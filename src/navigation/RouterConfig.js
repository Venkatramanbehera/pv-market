import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";

// const RouterConfig = () => {

// };

// export  RouterConfig;

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
};

export default RouterConfig;
