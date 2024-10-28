import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <main>
      <Navbar />
      <section className="min-h-[calc(100vh-56px)] mt-14">
        <Outlet />
      </section>
    </main>
  );
};

export default App;
