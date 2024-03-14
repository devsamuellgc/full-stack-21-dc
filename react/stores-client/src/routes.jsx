import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { ForgotPassword } from "./pages/ForgotPassword";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <h1>Página inicial</h1>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/esqueci-a-senha",
    element: <ForgotPassword />,
  },
]);
