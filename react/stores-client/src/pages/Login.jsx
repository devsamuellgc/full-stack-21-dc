import { useState } from "react";
import { UserForm } from "../components/userForm";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleSubmit() {
    navigate("/");
  }

  return (
    <div>
      <h2>Faça seu login aqui</h2>
      <UserForm
        state={name}
        handleChange={handleName}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
