import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <main>
      <Navbar />
      <div className="min-h-[calc(100vh-56px)] pt-14">
        <Outlet />
      </div>
    </main>
  );
};

export default App;
