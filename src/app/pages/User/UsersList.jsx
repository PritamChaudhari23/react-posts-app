import { useEffect } from "react";
import AppPage from "../../components/AppPage/AppPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction } from "../../../slices/usersSlice";
import UserCard from "./UserCard";
import { Box, CircularProgress } from "@mui/material";

const UsersList = () => {
  const users = useSelector((state) => state.users.data);
  const loading = useSelector((state) => state.users.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, [dispatch]);

  return (
    <AppPage title={"Friends list"} description={"List of friends"}>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 2 }}>
          {users && users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </Box>
      )}
    </AppPage>
  );
};

export default UsersList;
