import { lazy, Suspense } from "react";
import ProtectedRoute from "../app/components/Auth/ProtectedRoute";
import PostDetails from "../app/pages/Posts/PostDetails";

const Loadable = (Component) => {
  return (props) => (
    <Suspense fallback={<div>Loading.....</div>}>
      <Component {...props} />
    </Suspense>
  );
};

const UsersList = Loadable(
  lazy(() => import("../app/pages/User/UsersList"))
);

const PostsList = Loadable(
  lazy(() => import("../app/pages/Posts/PostsList"))
);

const CommentsList = Loadable(
  lazy(() => import("../app/pages/Comments/CommentsList"))
);

const NotFound = Loadable(lazy(() => import("../app/pages/NotFound")));
const SignIn = Loadable(lazy(() => import("../app/pages/User/SignIn")));

const Friends = Loadable(
  lazy(() =>
    import("../app/pages/DummyPages").then((module) => ({
      default: module.Friends,
    }))
  )
);

const Memories = Loadable(
  lazy(() =>
    import("../app/pages/DummyPages").then((module) => ({
      default: module.Memories,
    }))
  )
);

const Interests = Loadable(
  lazy(() =>
    import("../app/pages/DummyPages").then((module) => ({
      default: module.Interests,
    }))
  )
);

const Places = Loadable(
  lazy(() =>
    import("../app/pages/DummyPages").then((module) => ({
      default: module.Places,
    }))
  )
);

const Events = Loadable(
  lazy(() =>
    import("../app/pages/DummyPages").then((module) => ({
      default: module.Events,
    }))
  )
);

const Profile = Loadable(
  lazy(() =>
    import("../app/pages/DummyPages").then((module) => ({
      default: module.Profile,
    }))
  )
);

const Help = Loadable(
  lazy(() =>
    import("../app/pages/DummyPages").then((module) => ({
      default: module.Help,
    }))
  )
);

const Settings = Loadable(
  lazy(() =>
    import("../app/pages/DummyPages").then((module) => ({
      default: module.Settings,
    }))
  )
);

const Logout = Loadable(
  lazy(() =>
    import("../app/pages/DummyPages").then((module) => ({
      default: module.Logout,
    }))
  )
);

const routes = [
  { path: "/", element: <PostsList /> },
  { path: "/posts/:id", element: <PostDetails /> },
  { path: "/users", element: <UsersList /> },
  {
    path: "/comments",
    element: <ProtectedRoute element={<CommentsList />} />,
  },
  { path: "*", element: <NotFound /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/friends", element: <Friends /> },
  { path: "/memories", element: <Memories /> },
  { path: "/interests", element: <Interests /> },
  { path: "/places", element: <Places /> },
  { path: "/events", element: <Events /> },
  { path: "/profile", element: <Profile /> },
  { path: "/settings", element: <Settings /> },
  { path: "/help", element: <Help /> },
  { path: "/logout", element: <Logout /> },
];

export default routes;
