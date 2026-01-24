import { useEffect } from "react";
import AppPage from "../../components/AppPage/AppPage";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAction } from "../../../slices/postsSlice";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate } from "react-router-dom";

const PostsList = () => {
  const posts = useSelector((state) => {console.log(state); return state.posts.data});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPostsAction());
  }, [dispatch]);

  return (
    <AppPage
      title={" Posts"}
      description={"List of posts made by your friends"}
    >
      <div>
        {posts && posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </AppPage>
  );
};

export default PostsList;
