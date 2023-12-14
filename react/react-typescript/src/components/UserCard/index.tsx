interface UserCardProps {
  name: string;
  age: number;
}

export function UserCard({ name, age }: UserCardProps) {
  return (
    <div className="p-6 rounded-md flex flex-col gap-2">
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
    </div>
  );
}
