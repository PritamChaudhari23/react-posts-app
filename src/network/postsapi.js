import axiosInstance from "./interceptor";

export const fetchPostsAPI = async () => {
  try {
    const response = await axiosInstance.get("/posts");
    return response;
  } catch (error) {
    console.log("fetchPosts error", error);
  }
};

export const createPostAPI = async (post) => {
  try {
    const response = await axiosInstance.post("/posts", post);
    return response;
  } catch (error) {
    console.log("fetchPosts error", error);
  }
};

export const updatePostAPI = async (post) => {
  try {
    const response = await axiosInstance.put(`/posts/${post.id}`, post);
    return response;
  } catch (error) {
    console.log("fetchPosts error", error);
  }
};

export const deletePostAPI = async (postID) => {
  try {
    const response = await axiosInstance.delete(`/posts/${postID}`);
    return response;
  } catch (error) {
    console.log("fetchPosts error", error);
  }
};
