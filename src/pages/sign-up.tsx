import { gql, useMutation } from "@apollo/client";
import {
  Button,
  Card,
  Heading,
  Spinner,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { RiLockPasswordLine, RiMailLine, RiUser3Line } from "@remixicon/react";
import { FormEvent } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const SIGNUP = gql`
  mutation signup(
    $name: String!
    $email: String!
    $password: String!
    $bio: String!
  ) {
    signup(name: $name, email: $email, password: $password, bio: $bio) {
      message
      token
    }
  }
`;

const SignUp = () => {
  // sign up mutations state and hooks
  const [signup, { loading }] = useMutation(SIGNUP);

  // handle sign up
  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const payload = {
      name: form.fullname.value,
      email: form.email.value,
      password: form.password.value,
      bio: form.bio.value,
    };

    try {
      const response = await signup({
        variables: {
          ...payload,
        },
      });
      const message = response?.data?.signup?.message;
      const token = response?.data?.signup?.token;
      if (message === "Signup Successfull!") {
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.log("signup error: ", error);
    } finally {
      form.reset();
    }
  };
  return (
    <section className="h-[calc(100vh-56px)] w-full max-w-screen-lg mx-auto px-4 flex items-center justify-center">
      <form onSubmit={handleSignUp} className="w-full max-w-xs mx-auto">
        <Card className="space-y-3" size="3">
          <Heading as="h3">Sign Up</Heading>
          <TextField.Root
            placeholder="Enter Your Name"
            type="text"
            name="fullname"
            required
          >
            <TextField.Slot>
              <RiUser3Line className="size-4 text-gray-10" />
            </TextField.Slot>
          </TextField.Root>
          <TextField.Root
            placeholder="Enter Your Email"
            type="email"
            name="email"
            required
          >
            <TextField.Slot>
              <RiMailLine className="size-4 text-gray-10" />
            </TextField.Slot>
          </TextField.Root>
          <TextField.Root
            placeholder="Enter Your Password"
            type="password"
            name="password"
            required
          >
            <TextField.Slot>
              <RiLockPasswordLine className="size-4 text-gray-10" />
            </TextField.Slot>
          </TextField.Root>
          <TextArea placeholder="Enter Your Bio" name="bio" required />
          <div className="w-full flex items-center justify-end">
            <Button
              type="submit"
              className="hover:cursor-pointer"
              disabled={loading}
            >
              <Spinner loading={loading} />
              Sign Up
            </Button>
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
