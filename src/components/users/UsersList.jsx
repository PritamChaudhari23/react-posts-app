import { useEffect } from "react";
import Page from "../app/page/Page";
import { useDispatch, useSelector } from "react-redux";
import { usersSlice } from "../../store/appSlice";
import UserCard from "./UserCard";
import { Box, CircularProgress } from "@mui/material";

const UsersList = () => {
  const users = useSelector((state) => Object.values(state.users.users.byId));
  const loading = useSelector((state) => state.users.users.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersSlice.actions.fetchUsers());
  }, [dispatch]);

  return (
    <Page>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 2,
          }}
        >
          {users && users.map((user) => <UserCard key={user.id} user={user} />)}
        </Box>
      )}
    </Page>
  );
};

export default UsersList;
