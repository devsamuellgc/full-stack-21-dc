import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/Login";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <h1>Página inicial</h1>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
