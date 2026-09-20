import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Page from "../app/page/Page";
import Post from "./Post";
import {
  fetchPosts,
  searchPosts,
  clearSearch,
  setPage,
} from "../../store/slices/postsSlice";

const PostsList = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { list, loading, error, page, hasMore } = useSelector(
    (state) => state.posts.posts,
  );
  const {
    query,
    isActive,
    loading: searchLoading,
  } = useSelector((state) => state.posts.search);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (!value.trim()) {
      dispatch(clearSearch());
      dispatch(fetchPosts());
    } else {
      dispatch(searchPosts(value));
    }
  };

  const handleNextPage = () => {
    dispatch(setPage(page + 1));
    dispatch(fetchPosts());
  };

  const handlePrevPage = () => {
    dispatch(setPage(Math.max(page - 1, 1)));
    dispatch(fetchPosts());
  };

  return (
    <Page>
      <Box sx={{ maxWidth: 800, margin: "auto", mb: 2 }}>
        <TextField
          fullWidth
          label={t("posts.searchPlaceholder")}
          value={query}
          onChange={handleSearchChange}
        />
      </Box>

      {(loading || searchLoading) && (
        <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Typography color="error" align="center">
          {error}
        </Typography>
      )}

      {!loading && !searchLoading && list.length === 0 && (
        <Typography align="center" color="text.secondary">
          {t("posts.noResults")}
        </Typography>
      )}

      {!loading &&
        !searchLoading &&
        list.map((post) => <Post key={post.id} post={post} />)}

      {!isActive && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 2,
            alignItems: "center",
          }}
        >
          <Button disabled={page === 1} onClick={handlePrevPage}>
            {t("posts.prev")}
          </Button>
          <Typography>{t("posts.page", { page })}</Typography>
          <Button disabled={!hasMore} onClick={handleNextPage}>
            {t("posts.next")}
          </Button>
        </Box>
      )}
    </Page>
  );
};

export default PostsList;
