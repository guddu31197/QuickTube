import { Model, Navbar, Player } from "component";
import { ProtectedRoute } from "component/ProtectedRoute";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import {
  HistoryPage,
  HomePage,
  Library,
  LikedPage,
  LoginPage,
  Profile,
  SignUpPage,
  WatchLater,
  WatchPage,
} from "./pages";

export const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/model" element={<Model/>} />
        <Route path="/watch" element={<WatchPage />}>
          <Route path=":videoListID" element={<Player />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route element={<ProtectedRoute />}>
          <Route path="/liked" element={<LikedPage />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/library" element={<Library />} />
          <Route path="/history" element={<HistoryPage/>} />
        </Route>
      </Routes>
    </>
  );
};
