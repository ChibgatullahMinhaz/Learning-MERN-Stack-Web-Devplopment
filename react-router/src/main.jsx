import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import About from "./Components/About.jsx";
import { Laptopes } from "./Components/Laptopes.jsx";
import Blogs from "./Components/Blogs.jsx";
import { Home } from "./Components/Home.jsx";
import Root from "./Components/Root.jsx";
import User from "./Components/User.jsx";
import { Users2 } from "./Components/Users2.jsx";
import UserDetails from "./Components/UserDetails.jsx";
import Posts from "./Components/Posts/Posts.jsx";
import PostDetails from "./Components/Posts/PostDetails.jsx";
const user2Promies = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "about",
        Component: About,
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "laptops",
        Component: Laptopes,
      },
      {
        path: "Users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: User,
      },
      {
        path: "Users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
      {
        path: "Users2",
        element: (
          <Suspense fallback={<span>Loading......</span>}>
            <Users2 user2Promies={user2Promies}></Users2>
          </Suspense>
        ),
      },
      {
        path: "users2/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
      {
        path: "posts",
        loader: () =>
          fetch(
            `https://jsonplaceholder.typicode.com/posts`
          ),
        Component: Posts,
      },
      {
        path: "posts/:postsId",
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.postsId}`
          ),
        Component: PostDetails,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
