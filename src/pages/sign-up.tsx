import { Button, Card, Heading, TextArea, TextField } from "@radix-ui/themes";
import { RiLockPasswordLine, RiMailLine, RiUser3Line } from "@remixicon/react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="h-[calc(100vh-56px)] w-full max-w-screen-lg mx-auto px-4 flex items-center justify-center">
      <form className="w-full max-w-xs mx-auto">
        <Card className="space-y-3" size="3">
          <Heading as="h3">Sign Up</Heading>
          <TextField.Root placeholder="Enter Your Name" type="text">
            <TextField.Slot>
              <RiUser3Line className="size-4 text-gray-10" />
            </TextField.Slot>
          </TextField.Root>
          <TextField.Root placeholder="Enter Your Email" type="email">
            <TextField.Slot>
              <RiMailLine className="size-4 text-gray-10" />
            </TextField.Slot>
          </TextField.Root>
          <TextField.Root placeholder="Enter Your Password" type="password">
            <TextField.Slot>
              <RiLockPasswordLine className="size-4 text-gray-10" />
            </TextField.Slot>
          </TextField.Root>
          <TextArea placeholder="Enter Your Bio" />
          <div className="w-full flex items-center justify-end">
            <Button type="submit" className="hover:cursor-pointer">Sign Up</Button>
          </div>
          <p className="text-sm font-normal text-gray-9">
            Already have an account?{" "}
            <Link to="/signin" className="text-accent-9">
              Sign In
            </Link>{" "}
            Now.
          </p>
        </Card>
      </form>
    </section>
  );
};

export default SignUp;
