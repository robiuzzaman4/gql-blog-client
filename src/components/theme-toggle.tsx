import { IconButton } from "@radix-ui/themes";
import { RiMoonFill, RiSunFill } from "@remixicon/react";
import { useTheme } from "./theme-provider";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <IconButton
          className="hover:cursor-pointer"
          variant="soft"
          color="gray"
          onClick={() => setTheme("light")}
        >
          <RiSunFill className="size-4" />
        </IconButton>
      ) : (
        <IconButton
          className="hover:cursor-pointer"
          variant="soft"
          color="gray"
          onClick={() => setTheme("dark")}
        >
          <RiMoonFill className="size-4" />
        </IconButton>
      )}
    </>
  );
};

export default ThemeToggle;
