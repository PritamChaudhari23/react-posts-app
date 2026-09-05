import axios from "axios";

const requestHandler = (config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

const errorHandler = (error) => {
  error.message = error.response?.data?.message || "Something went wrong";
  return Promise.reject(error);
};

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com", // Import from env
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(requestHandler, errorHandler);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  errorHandler,
);

const getPosts = async (limit = 0, skip = 0) => {
  const data = await axiosInstance.get("/posts", { params: { limit, skip } });
  return { posts: data.posts, total: data.total };
};

const searchPosts = async (query) => {
  const data = await axiosInstance.get("/posts/search", {
    params: { q: query },
  });
  return data.posts;
};

const getPostById = (id) => axiosInstance.get(`/posts/${id}`);

const getPostComments = async (postId) => {
  const data = await axiosInstance.get(`/posts/${postId}/comments`);
  return data.comments;
};

const createPost = (post) => axiosInstance.post("/posts/add", post);

const updatePost = (postId, updatedData) =>
  axiosInstance.put(`/posts/${postId}`, updatedData);

const deletePost = (postId) => axiosInstance.delete(`/posts/${postId}`);

const getUsers = async () => {
  const data = await axiosInstance.get("/users");
  return data.users;
};

const getUserPosts = async (userId) => {
  const data = await axiosInstance.get(`/users/${userId}/posts`);
  return data.posts;
};

const getUserById = (userId) => axiosInstance.get(`/users/${userId}`);

export {
  getPosts,
  searchPosts,
  getPostById,
  getPostComments,
  createPost,
  updatePost,
  deletePost,
  getUsers,
  getUserPosts,
  getUserById,
};
