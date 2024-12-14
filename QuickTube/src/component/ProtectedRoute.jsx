import { useVideo } from "context/videoContext";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const { user } = useVideo();

  if (!user) return <Navigate to="/login" replace />;
  return <Outlet />;
};
