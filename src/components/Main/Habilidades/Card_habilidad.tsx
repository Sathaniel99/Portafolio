// Componentes
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/index";
import { Spinner_Img } from "@/components/ui/index";
// Utiles
import type { Card_habilidadProp } from ".";

export function Card_habilidad({ text, img, altImg, url, ariaLabel, bgClass }: Card_habilidadProp) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <a className={`flex h-10 items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all hover:-translate-y-1 hover:animate-pulse ${bgClass} max-w-50`}
                    target="_blank" rel="noopener noreferrer" role="button" href={url} aria-label={ariaLabel} >
                    <div className="h-full w-5 flex overflow-hidden relative">
                        <Spinner_Img img={img} altImg={altImg} errorTextClassName="hidden" />
                    </div>
                    <span className="text-neutral-800 dark:text-neutral-200 truncate">
                        {text}
                    </span>
                </a>
            </TooltipTrigger>
            <TooltipContent>
                {text}
            </TooltipContent>
        </Tooltip>
    );
}
