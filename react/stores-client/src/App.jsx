import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";

export default function App() {
  const [name, setName] = useState("");

  function handleNewName(newName) {
    setName(newName);
  }

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
      console.log(error);
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

  // useEffect(() => {
  //   fetchStores();
  // }, []);
  return (
    <div>
      <h1 data-cy="title">Um texto para testar o teste</h1>
      <p data-cy="initial-text">{name}</p>
      <button data-cy="change-name" onClick={() => handleNewName("Samuel")}>
        Mudar o nome
      </button>
      <p data-cy="final-text">{name}</p>
      <ToastContainer />
    </div>
  );
}
