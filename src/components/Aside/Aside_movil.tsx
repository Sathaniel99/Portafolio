// Componentes
import { Avatar_own, Buttons_page } from "./index";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/index"
// Iconos
import { FaBars } from "react-icons/fa6";



export function Aside_movil() {
    return (
        <>
            <Sheet>
                <SheetTrigger>
                    <div className={'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 md:hidden absolute top-0 start-0 mt-2 ms-2 z-25'} role='button'><FaBars /></div>
                </SheetTrigger>
                <SheetContent className='bg-linear-to-tr from-neutral-300 dark:from-neutral-900 to-slate-300 dark:to-black/10 border border-neutral-700 shadow-2xl shadow-neutral-50/5 px-15' aria-describedby={'Side movil'}>
                    <SheetTitle className="text-center my-5" aria-describedby={'Side movil'}>Adán Luis Quincoces Escalona</SheetTitle>
                    <Avatar_own />
                    <hr className="border-neutral-500 my-5" />
                    <Buttons_page />

                </SheetContent>
            </Sheet>
        </>
    )
}