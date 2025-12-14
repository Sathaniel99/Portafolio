// Hooks
import { useContext } from "react"
import { WindowContext } from "../hooks/Context_api"
// Componentes
import { Button } from "../ui/index";

const buttons = [
    { text: "Sobre Mi", state: "SM" },
    { text: "Habilidades", state: "H" },
    { text: "Proyectos", state: "P" },
    { text: "Contacto", state: "C" },
    { text: "Sugerencias", state: "S" }
]

export function Buttons_page() {
    const { stateWindow, setStateWindow } = useContext(WindowContext);

    return (
        <div className="flex flex-col gap-3">
            {buttons.map((button, index) => (
                <Button className="w-full" variant={ stateWindow == button.state ? 'default' : "ghost"} key={index} onClick={() => setStateWindow(`${button.state}`)}>{button.text}</Button>
            ))}
        </div>)
}