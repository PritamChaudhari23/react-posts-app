import { FC, useEffect, useState } from "react";
import AppPage from "../../components/AppPage/AppPage";
import { fetchPostsAPI } from "../../../../network/api/postsapi";
import { PostType } from "../../../../types/Post";
import Post from "../Post/Post";
import { useDispatch } from "react-redux";
import { fetchCommentForPostAction } from "../../../../slices/commentsSlice";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate } from "react-router-dom";

const PostsList: FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const getPosts = async () => {
  //   const response = await fetchPostsAPI();
  //   if (response && response.data) {
  //     setPosts([...posts, response.data.posts[0]]);
  //   }
  //   console.log(response);
  // };

  useEffect(() => {
    // getPosts();
    let postId = 12;
    dispatch(fetchCommentForPostAction(postId));
  }, []);

  return (
    <AppPage
      title={" Posts"}
      description={"List of posts made by your friends"}
    >
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
        <RemoveRedEyeIcon
          onClick={() => {
            navigate(`/posts/${encodeURIComponent(18)}`);
          }}
        />
      </div>
    </AppPage>
  );
};

export default PostsList;
