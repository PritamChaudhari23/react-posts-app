import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Page from "../app/page/Page";
import Post from "./Post";
import { fetchUserPosts } from "../../store/slices/postsSlice";

const UserPostsList = ({ mode = "params" }) => {
  const { userId: paramUserId } = useParams();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const loggedInUserId = useSelector((state) => state.auth.user?.id);
  const userId = mode === "self" ? loggedInUserId : Number(paramUserId);

  const { list, loading, error } = useSelector(
    (state) => state.posts.userPosts,
  );

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserPosts(userId));
    }
  }, [dispatch, userId]);

  if (!userId) {
    return (
      <Page>
        <Typography align="center">{t("postDetail.notFound")}</Typography>
      </Page>
    );
  }

  return (
    <Page>
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Typography color="error" align="center">
          {error}
        </Typography>
      )}

      {!loading && list.length === 0 && (
        <Typography align="center" color="text.secondary">
          {t("posts.noResults")}
        </Typography>
      )}

      {!loading && list.map((post) => <Post key={post.id} post={post} />)}
    </Page>
  );
};

export default UserPostsList;
