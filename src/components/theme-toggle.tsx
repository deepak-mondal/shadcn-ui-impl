import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			className="h-[clamp(2.5rem,2.2rem+1.5vw,3rem)] w-[clamp(2.5rem,2.2rem+1.5vw,3rem)]"
		>
			<Sun className="h-[clamp(1.25rem,1.1rem+0.75vw,1.5rem)] w-[clamp(1.25rem,1.1rem+0.75vw,1.5rem)] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[clamp(1.25rem,1.1rem+0.75vw,1.5rem)] w-[clamp(1.25rem,1.1rem+0.75vw,1.5rem)] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
