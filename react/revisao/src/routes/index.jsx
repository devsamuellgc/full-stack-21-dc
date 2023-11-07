import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NaoEcontrada from "../pages/NaoEncontrada";
import SobreNos from "../pages/SobreNos";
import FaleConosco from "../pages/FaleConosco";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/fale-conosco",
        element: <FaleConosco />,
      },
      {
        path: "/sobre",
        element: <SobreNos />,
      },
    ],
  },
  {
    path: "*",
    element: <NaoEcontrada />,
  },
]);
