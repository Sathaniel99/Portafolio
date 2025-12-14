// Componentes
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/index";
import { Spinner_Img } from "@/components/ui/index";
// Utiles
import type { Card_habilidadProp } from "."

export function Card_habilidad({ text, img, altImg, url, ariaLabel, bgClass }: Card_habilidadProp) {
    return (
        <Tooltip>
            <TooltipTrigger>
                <a className={`flex flex-col h-42 w-32 transition-all no-underline border border-gray-700 hover:shadow-sm shadow-neutral-400 dark:shadow-neutral-950 ${bgClass} rounded-2xl m-1 p-2`} target="_blank" rel="noopener noreferrer" role="button" href={url} aria-label={ariaLabel}>
                    <span className="text-center block border-b border-gray-700 p-1 text-black dark:text-white">{text}</span>
                    <div className="h-full w-full flex overflow-hidden relative">
                        <Spinner_Img img={img} altImg={altImg} />
                    </div>
                </a>
            </TooltipTrigger>
            <TooltipContent>
                {altImg}
            </TooltipContent>
        </Tooltip>
    )
}