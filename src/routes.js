import { useAuth } from "./components/auth/AuthProvider";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import NotFound from "./components/app/NotFound";
import PostsList from "./components/posts/PostList";
import PostDetail from "./components/posts/PostDetail";
import UserPostsList from "./components/posts/UserPostsList";
import Comment from "./components/comments/Comment";
import UsersList from "./components/users/UsersList";
import SignIn from "./components/users/SignIn";
import SignUp from "./components/users/SignUp";

const HomeRedirect = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/posts" /> : <Navigate to="/signin" />;
};

const routes = [
  { path: "/", element: <HomeRedirect /> },
  { path: "/posts", element: <ProtectedRoute element={<PostsList />} /> },
  { path: "/posts/:id", element: <ProtectedRoute element={<PostDetail />} /> },
  {
    path: "/myposts",
    element: <ProtectedRoute element={<UserPostsList mode="self" />} />,
  },
  { path: "/users", element: <ProtectedRoute element={<UsersList />} /> },
  {
    path: "/users/:userId/posts",
    element: <ProtectedRoute element={<UserPostsList />} />,
  },
  { path: "/comments", element: <ProtectedRoute element={<Comment />} /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
