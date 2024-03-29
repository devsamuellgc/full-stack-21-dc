import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"
import { routes } from "./routes";

export default function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer />
      <Toaster />
    </>
  );
}
