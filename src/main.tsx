import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Toaster } from "sonner";

const client = new ApolloClient({
  uri: "https://gql-blog-server.vercel.app/api/graphql/",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider defaultTheme="light">
        <Theme>
          <Toaster position="top-center"/>
          <RouterProvider router={router} />
        </Theme>
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>
);
