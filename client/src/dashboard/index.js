import { Box, Dialog, Snackbar } from "@components";
import { Dictionaries } from "@pages/dictionaries";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Page } from "../pages";
import { Login } from "./auth";
import { Sidebar } from "./sidebar";

const Default = () => {
  return (
    <Box
      flex
      gap
      grow
      sx={{ backgroundColor: "#ededed", p: 1, overflow: "hidden" }}
    >
      <Dialog />
      <Sidebar
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
        }}
      />
      <Page />
    </Box>
  );
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Default />,
    children: [
      { path: "dictionaries", element: <Dictionaries /> },
      { path: "home", element: <div>home</div> },
    ],
  },
]);

export const Dashboard = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <Snackbar />
      <RouterProvider router={router}>
        {user?.accessToken !== "" ? <Default /> : <Login />}
      </RouterProvider>
    </>
  );
};
