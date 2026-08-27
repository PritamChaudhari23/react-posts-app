import ProtectedRoute from "./components/auth/ProtectedRoute";
import NotFound from "./components/app/NotFound";
import Post from "./components/posts/Post";
import Comment from "./components/comments/Comment";
import UsersList from "./components/users/UsersList";
import SignIn from "./components/users/SignIn";

const routes = [
  { path: "/", element: <Post /> },
  { path: "/posts/:id", element: <Post /> },
  { path: "/users", element: <UsersList /> },
  { path: "/users/:userId/posts", element: <Post /> },
  { path: "/friends", element: <UsersList /> },
  {
    path: "/comments",
    element: <ProtectedRoute element={<Comment />} />,
  },
  { path: "*", element: <NotFound /> },
  { path: "/signin", element: <SignIn /> },
];

export default routes;
