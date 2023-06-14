import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPrincipal from "./pages/PaginaPrincipal";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PaginaPrincipal />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
