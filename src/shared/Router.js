import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import TodoList from "../pages/TodoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;