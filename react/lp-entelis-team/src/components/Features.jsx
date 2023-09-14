import { useState } from "react";
import Cards from "./Cards";

const cards = [
  {
    title: "PERSONAL MANAGER",
    text: "Available in the Pacific Time Zone working hours",
    src: "https://static.tildacdn.com/tild3236-3339-4231-b161-366365366237/ill-e-1.svg",
  },
  {
    title: "CLEAR BUDGET",
    text: "We provide detailed estimates. You agree to everything before we start",
    src: "https://static.tildacdn.com/tild6138-3037-4361-b039-323039383662/ill-e-2.svg",
  },
  {
    title: "REALTIME DASHBOARD COMING SOON",
    text: "Integrated dashboard providing full control over the development process",
    src: "https://static.tildacdn.com/tild6366-6135-4966-b635-336633336561/ill-e-3.svg",
  },
];

export default function Features() {
  const [data, setData] = useState(cards);
  const [name, setName] = useState("");

  const card = {
    title: "REALTIME DASHBOARD COMING SOON",
    text: "Integrated dashboard providing full control over the development process",
    src: "https://static.tildacdn.com/tild6366-6135-4966-b635-336633336561/ill-e-3.svg",
  };

  function addCard() {
    setData([...data, card]);
  }

  function changeName(e) {
    setName(e.target.value);
  }

  return (
    <section className="flex items-center justify-between gap-12">
      <h2>Key features</h2>
      <p>{name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          changeName(e);
        }}
      />
      <Cards data={data} />
      <button onClick={addCard}>Adicionar</button>
    </section>
  );
}
