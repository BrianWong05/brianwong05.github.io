import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const storageKey = "vite-ui-theme";

  const changeTheme = () => {
    const currentTheme = localStorage.getItem(storageKey);
    if (currentTheme === "system") {
      const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark";
      setTheme(theme);
    } else {
      const theme = localStorage.getItem(storageKey) === "dark" ? "light" : "dark";
      setTheme(theme);
    }
  };

  return (
    <Button variant="outline" size="icon" onClick={changeTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
