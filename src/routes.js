import { lazy, Suspense } from "react";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import PostDetails from "./temp/app/pages/Posts/PostDetails";

const Loadable = (Component) => {
  return (props) => (
    <Suspense fallback={<div>Loading.....</div>}>
      <Component {...props} />
    </Suspense>
  );
};

const UsersList = Loadable(
  lazy(() => import("./temp/app/pages/User/UsersList")),
);

const PostsList = Loadable(
  lazy(() => import("./temp/app/pages/Posts/PostsList")),
);

const UserPostsList = Loadable(
  lazy(() => import("./temp/app/pages/Posts/UserPostsList")),
);

const CommentsList = Loadable(
  lazy(() => import("./temp/app/pages/Comments/CommentsList")),
);

const NotFound = Loadable(lazy(() => import("./temp/app/pages/NotFound")));
const SignIn = Loadable(lazy(() => import("./temp/app/pages/User/SignIn")));

const routes = [
  { path: "/", element: <PostsList /> },
  { path: "/posts/:id", element: <PostDetails /> },
  { path: "/users", element: <UsersList /> },
  { path: "/users/:userId/posts", element: <UserPostsList /> },
  { path: "/friends", element: <UsersList /> },
  {
    path: "/comments",
    element: <ProtectedRoute element={<CommentsList />} />,
  },
  { path: "*", element: <NotFound /> },
  { path: "/signin", element: <SignIn /> },
];

export default routes;
