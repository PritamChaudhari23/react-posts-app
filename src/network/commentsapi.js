import axiosInstance from "./interceptor";

export const fetchCommentForPostAPI = async (postId) => {
  try {
    const response = await axiosInstance.get(`/comments/post/${postId}`);
    return response;
  } catch (error) {
    console.log("fetchCommentForPost error", error);
  }
};
