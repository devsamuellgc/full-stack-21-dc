import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/fale-conosco",
        element: <h2>Página filha do caminho "/"</h2>,
      },
      {
        path: "/sobre",
        element: <h2>Página sobre nós</h2>,
      },
    ],
  },
]);
