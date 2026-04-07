// Componentes
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

export function Theme() {

    const classButton = "absolute top-0 end-0 mt-2 me-2 z-25 border bg-background/30 shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 p-2 rounded-full transition-all"

    return (
        <AnimatedThemeToggler
            className={classButton}
            duration={800}
            
        />
    );
}
