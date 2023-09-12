import Card from "./Card";

export default function Cards() {
  return (
    <div className="flex items-center gap-12">
      <Card
        title="PERSONAL MANAGER"
        text="Available in the Pacific Time Zone working hours"
        src="https://static.tildacdn.com/tild3236-3339-4231-b161-366365366237/ill-e-1.svg"
      />
      <Card
        title="CLEAR BUDGET"
        text="We provide detailed estimates. You agree to everything before we start"
        src="https://static.tildacdn.com/tild6138-3037-4361-b039-323039383662/ill-e-2.svg"
      />
      <Card
        title="REALTIME DASHBOARD
        COMING SOON"
        text="Integrated dashboard providing full control over the development process"
        src="https://static.tildacdn.com/tild6366-6135-4966-b635-336633336561/ill-e-3.svg"
      />
    </div>
  );
}
