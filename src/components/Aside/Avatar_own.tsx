// Componentes
import { Spinner_Img } from "../ui/index"

export function Avatar_own() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="rounded-full w-50 h-50 border border-neutral-500 my-3 p-1 flex items-center justify-center overflow-hidden">
                <Spinner_Img img="user.webp" altImg="Foto de perfil." imgClassName="rounded-full object-cover!"/>
            </div>
        </div>
    )
}