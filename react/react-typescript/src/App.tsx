import { Client, ListClients } from "./components/ListClients";
import { UserCard } from "./components/UserCard";

const clients: Client[] = [
  {
    name: "Samuel",
    age: 26,
  },
  {
    name: "Samuel",
    age: 26,
  },
  {
    name: "Samuel",
    age: 26,
  },
];

export default function App() {
  return (
    <>
      <UserCard name="Samuel" age={26} />
      <ListClients clients={clients} />
    </>
  );
}
