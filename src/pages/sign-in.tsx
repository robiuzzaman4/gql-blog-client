import { Button, Card, Heading, TextField } from "@radix-ui/themes";
import { RiLockPasswordLine, RiMailLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section className="h-[calc(100vh-56px)] w-full max-w-screen-lg mx-auto px-4 flex items-center justify-center">
      <Card className="w-full max-w-sm mx-auto space-y-3" size="3">
        <Heading as="h3">Sign In</Heading>
        <TextField.Root placeholder="Enter Your Email" type="text">
          <TextField.Slot>
            <RiMailLine className="size-4 text-gray-10" />
          </TextField.Slot>
        </TextField.Root>
        <TextField.Root placeholder="Enter Your Password" type="password">
          <TextField.Slot>
            <RiLockPasswordLine className="size-4 text-gray-10" />
          </TextField.Slot>
        </TextField.Root>
        <div className="w-full flex items-center justify-end">
          <Button>Sign In</Button>
        </div>
        <p className="text-sm font-normal text-gray-9">
          Don't have any account?{" "}
          <Link to="/signup" className="text-accent-9">
            Sign Up
          </Link>{" "}
          Now.
        </p>
      </Card>
    </section>
  );
};

export default SignIn;
