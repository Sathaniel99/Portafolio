// Hooks
import { useContext } from "react"
import { WindowContext } from "../hooks/Context_api"
// Componentes
import { Aside_movil, Theme, Contacto, Habilidades, Proyectos, Sobre_Mi, Sugerencias } from "@/components/index"

export function Main() {
    const { stateWindow } = useContext(WindowContext);

    const windows = {
        SM: <Sobre_Mi />,
        H: <Habilidades />,
        P: <Proyectos />,
        C: <Contacto />,
        S: <Sugerencias />
    }
    return (
        <div className="w-full h-full min-h-0 overflow-hidden px-3 md:ps-3 md:pe-0 py-4 relative flex flex-col">
            <Theme />
            <Aside_movil />
            {windows[stateWindow as keyof typeof windows] || windows.SM}
        </div>
    )
}