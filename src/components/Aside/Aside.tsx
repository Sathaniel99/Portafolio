import { Avatar_own, Buttons_page, Contacto } from "./index"

export function Aside() {
    return (
        <div className="hidden md:flex flex-col max-w-2xs min-w-60 px-6 py-2 md:border-r md:border-r-neutral-500">
            <Avatar_own />
            <hr className="border-neutral-500 my-5" />
            <Buttons_page />
            <Contacto></Contacto>
        </div>
    )
}