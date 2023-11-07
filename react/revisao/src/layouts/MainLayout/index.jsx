import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

export default function MainLayout() {
  return (
    <main className="flex flex-col">
      <Header nome="Digital College" cidade="Fortaleza" />
      <section className="p-5">
        <Outlet />
      </section>
    </main>
  );
}
