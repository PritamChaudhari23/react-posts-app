import { useEffect } from "react";
import Page from "../app/page/Page";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/slices/usersSlice";
import UserCard from "./UserCard";
import { Box, CircularProgress, Grid } from "@mui/material";

const UsersList = () => {
  const users = useSelector((state) => Object.values(state.users.users.byId));
  const loading = useSelector((state) => state.users.users.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Page>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Page>
  );
};

export default UsersList;
