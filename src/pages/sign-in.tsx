import { gql, useMutation } from "@apollo/client";
import { Button, Card, Heading, Spinner, TextField } from "@radix-ui/themes";
import { RiLockPasswordLine, RiMailLine } from "@remixicon/react";
import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SIGNIN = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
      message
    }
  }
`;

const SignIn = () => {
  // sign in mutations state and hooks
  const [signin, { loading }] = useMutation(SIGNIN);

  // router
  const navigate = useNavigate();

  // handle sign in
  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const payload = {
      email: form.email.value,
      password: form.password.value,
    };

    try {
      const response = await signin({
        variables: {
          ...payload,
        },
      });
      const message = response?.data?.signin?.message;
      const token = response?.data?.signin?.token;
      if (message === "Signin Successfull!") {
        toast.success(message);
        localStorage.setItem("auth-token", JSON.stringify(token));
        navigate("/");
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.log("signin error: ", error);
    } finally {
      form.reset();
    }
  };

  return (
    <section className="h-[calc(100vh-56px)] w-full max-w-screen-lg mx-auto px-4 flex items-center justify-center">
      <form onSubmit={handleSignIn} className="w-full max-w-xs mx-auto">
        <Card className="space-y-3" size="3">
          <Heading as="h3">Sign In</Heading>
          <TextField.Root
            placeholder="Enter Your Email"
            type="email"
            name="email"
          >
            <TextField.Slot>
              <RiMailLine className="size-4 text-gray-10" />
            </TextField.Slot>
          </TextField.Root>
          <TextField.Root
            placeholder="Enter Your Password"
            type="password"
            name="password"
          >
            <TextField.Slot>
              <RiLockPasswordLine className="size-4 text-gray-10" />
            </TextField.Slot>
          </TextField.Root>
          <Button
            style={{ width: "100%" }}
            type="submit"
            className="hover:cursor-pointer"
            disabled={loading}
          >
            <Spinner loading={loading} />
            Sign In
          </Button>

          <p className="text-sm font-normal text-gray-9">
            Don't have any account?{" "}
            <Link to="/signup" className="text-accent-9">
              Sign Up
            </Link>{" "}
            Now.
          </p>
        </Card>
      </form>
    </section>
  );
};

export default SignIn;
