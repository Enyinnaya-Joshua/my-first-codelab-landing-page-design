import React from "react";
import { useRoutes } from "react-router-dom";
import HomeScreen from "../Pages/HomeScreen";

const AllRouter = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },
  ]);

  return element;
};

export default AllRouter;
