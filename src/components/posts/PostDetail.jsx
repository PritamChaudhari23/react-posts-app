import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import Page from "../app/page/Page";
import Post from "./Post";
import Comment from "../comments/Comment";
import { setCurrentPostId } from "../../store/slices/postsSlice";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const post = useSelector((state) =>
    state.posts.posts.list.find((p) => p.id === Number(id)),
  );
  const author = useSelector((state) => {
    const authorId = post?.userId;
    return authorId ? state.users.users.byId[authorId] : null;
  });
  const comments = useSelector((state) => state.comments.comments.list);
  const commentsLoading = useSelector(
    (state) => state.comments.comments.loading,
  );

  useEffect(() => {
    if (post) {
      dispatch(setCurrentPostId({ postId: post.id, authorId: post.userId }));
    }
  }, [dispatch, post]);

  if (!post) {
    return (
      <Page>
        <Typography align="center">{t("postDetail.notFound")}</Typography>
      </Page>
    );
  }

  return (
    <Page>
      <Post post={post} clickable={false} />

      {author && (
        <Box sx={{ maxWidth: 800, margin: "auto", mt: 2 }}>
          <Typography variant="subtitle1">
            {t("postDetail.byAuthor", {
              name: `${author.firstName} ${author.lastName}`,
            })}
          </Typography>
        </Box>
      )}

      <Box sx={{ maxWidth: 800, margin: "auto", mt: 3 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {t("postDetail.commentsTitle")}
        </Typography>
        {commentsLoading ? (
          <CircularProgress size={24} />
        ) : (
          <List>
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </List>
        )}
      </Box>
    </Page>
  );
};

export default PostDetail;
