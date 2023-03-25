import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Signup-login/Login";
import Signup from "../components/Signup-login/Signup";
import Sprint from "../components/sprints/Sprint";
import Tasks from "../components/tasks/Tasks";
import AuthRoute from "../Private/AuthRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRoute>
            <Sprint />
          </AuthRoute>
        }
      />
      <Route
        path="/tasks"
        element={
          <AuthRoute>
            <Tasks />
          </AuthRoute>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
