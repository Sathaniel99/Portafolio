// Componentes
import { Tooltip, TooltipContent, TooltipTrigger, Spinner_Img } from "@/components/ui/index";
// Utiles
import type { ButtonRefProps } from ".";


export function ButtonRef({ url, text, ariaLabel, img }: ButtonRefProps) {
    return (
        <Tooltip>
            <TooltipTrigger>
                <a className={`text-blue-600 hover:text-blue-400 active:text-blue-800 fw-bold transition-all`} href={url} target="_blank" rel="noopener noreferrer" role="button" aria-label={ariaLabel}>{text}</a>
            </TooltipTrigger>
            <TooltipContent>
                <div className="w-60 h-45 bg-neutral-800">
                    <Spinner_Img img={img} altImg={ariaLabel}/>
                </div>
            </TooltipContent>
        </Tooltip>
    )
}