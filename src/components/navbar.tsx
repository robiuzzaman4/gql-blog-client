import { Button } from "@radix-ui/themes";
import { RiBloggerFill } from "@remixicon/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white border-b h-14">
      <div className="h-full w-full max-w-screen-lg mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1">
          <RiBloggerFill className="text-indigo-600" />
          <p className="text-base font-semibold">GQL Blogs</p>
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/signin">
            <Button className="hover:cursor-pointer">Sign In</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
