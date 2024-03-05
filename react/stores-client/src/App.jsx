import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";

export default function App() {
  async function fetchStores() {
    try {
      const stores = await axios.get("http://localhost:3000/stores/1513");
      toast.success(stores.data.mensagem, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.mensagem, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }

  useEffect(() => {
    fetchStores();
  }, []);
  return <ToastContainer />;
}
