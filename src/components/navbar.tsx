import { RiBloggerFill } from "@remixicon/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white border-b h-14">
      <div className="h-full w-full max-w-screen-lg mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1">
          <RiBloggerFill className="text-indigo-600"/>
          <p className="text-base font-medium">GQL Blogs</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
