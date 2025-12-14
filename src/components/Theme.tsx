// Hooks
import { useState } from "react";
// Componentes
import { Button } from "./ui/index";
// Iconos
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

export function Theme() {
    const [theme, setTheme] = useState<string>(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.className = savedTheme;
        return savedTheme;
    });

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.className = newTheme;
        localStorage.setItem("theme", newTheme);
    };

    const icon = theme === "light" ? <FaMoon /> : <IoSunnyOutline />;

    return (
        <Button
            className="absolute top-0 end-0 mt-2 me-2 z-25"
            variant={"outline"}
            onClick={toggleTheme}
        >
            {icon}
        </Button>
    );
}
