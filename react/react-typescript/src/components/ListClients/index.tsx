export interface Client {
  name: string;
  age: number;
}

interface ListClientsProps {
  clients: Client[];
}

export function ListClients({ clients }: ListClientsProps) {
  return (
    <>
      {clients
        ? clients.map((client) => (
            <p>
              {client.name} com {client.age} anos
            </p>
          ))
        : null}
    </>
  );
}
