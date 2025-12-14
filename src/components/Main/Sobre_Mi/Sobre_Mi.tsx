// Componentes
import { Button, Tooltip, TooltipContent, TooltipTrigger, Spinner, Spinner_Img } from "@/components/ui/index";
import { ButtonRef, AccentSpan, buttons_ref, PERSONAL_INFO } from ".";
// Iconos
import { FaFilePdf, FaRegFileWord } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
// Hooks
import { useState } from "react";

export function Sobre_Mi() {
    const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
    const [isDownloadingDoc, setIsDownloadingDoc] = useState(false);

    const handleDownloadCV = (extension: string, setIsDownloading: (value: boolean) => void) => {
        return () => {
            setIsDownloading(true);
            const cvUrl = `/CV.${extension}`;
            const a = document.createElement('a');
            a.href = cvUrl;
            a.download = `CV - Adàn Luis Quincoces Escalonas.${extension}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            setTimeout(() => {
                setIsDownloading(false);
            }, 2000);
        };
    };

    return (
        <>
            <div>
                <h1 className="text-center text-3xl my-2 font-bold">Sobre Mi</h1>
                <hr className="border-neutral-500" />
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-hide px-2">
                <p className="text-start fs-5 lh-sm my-3">
                    Mi nombre es{" "}
                    <span className="select-all">{PERSONAL_INFO.name}</span>
                    , tengo {PERSONAL_INFO.age} años, soy graduado de{" "}
                    <span className="user-select-all">{PERSONAL_INFO.university}</span> de la{" "}
                    <ButtonRef ariaLabel={buttons_ref.uci.ariaLabel} text={buttons_ref.uci.text} url={buttons_ref.uci.url} img={buttons_ref.uci.img}></ButtonRef> en{" "}
                    <ButtonRef ariaLabel={buttons_ref.habana.ariaLabel} text={buttons_ref.habana.text} url={buttons_ref.habana.url} img={buttons_ref.habana.img}></ButtonRef>
                    , donde culminé mis estudios en julio de 2024. Previo a mi formación universitaria, me gradué del {PERSONAL_INFO.preUniversity} en junio de {PERSONAL_INFO.graduationYear}.
                </p>
                <p className="text-start fs-5 lh-sm my-3">
                    Actualmente trabajo en el:
                    <Tooltip>
                        <TooltipTrigger>
                            <p className="text-start text-blue-600 hover:text-blue-400 active:text-blue-800 fw-bold transition-all">- {PERSONAL_INFO.currentJob.name}</p>
                        </TooltipTrigger>
                        <TooltipContent>
                            <div className="w-60 h-45">
                                <Spinner_Img img={"INOTU.webp"} altImg={"Logo INOTU"} />
                            </div>
                        </TooltipContent>
                    </Tooltip>
                    Ubicado en {PERSONAL_INFO.currentJob.location} En esta posición, complementé el desarrollo y gestión del proyecto :
                    <Tooltip>
                        <TooltipTrigger>
                            <p className="text-start text-blue-600 hover:text-blue-400 active:text-blue-800 fw-bold transition-all">- {PERSONAL_INFO.currentJob.project}</p>
                        </TooltipTrigger>
                        <TooltipContent>
                            <div className="w-60 h-45">
                                <Spinner_Img img={"website.webp"} altImg={"Web SAGC"} />
                            </div>
                        </TooltipContent>
                    </Tooltip><br />
                </p>
                <span>Donde me encargué de aspectos relacionados con:</span>
                <ul>
                    {PERSONAL_INFO.currentJob.responsibilities.map((respon, index) => (
                        <li key={index}>· <AccentSpan text={respon} /></li>
                    ))}
                </ul>
                <p className="text-start fs-5 lh-sm my-3">
                    Con más de <AccentSpan text={`${PERSONAL_INFO.experienceYears} años de experiencia`} /> en el desarrollo de software tanto web como de escritorio. Además, poseo conocimientos integrales que abarcan todas las etapas del ciclo de vida del software, incluyendo el análisis de requisitos, diseño e implementación de aplicaciones, administración de bases de datos y gestión de infraestructuras (a nivel básico).
                    En el desarrollo de mi tesis, implementé la <AccentSpan text={"metodología AUP-UCI"} /> , lo que me permitió fortalecer mis habilidades en la planificación y ejecución de proyectos de software. También tengo experiencia utilizando herramientas de colaboración como <AccentSpan text={"Git y GitHub"} /> , para un trabajo en equipo eficiente y una buena gestión efectiva de equipos de desarrollo.
                </p>
                <hr className="border-neutral-500" />
                {/* Boton de descarga para el CV */}
                <div className="w-full flex items-center my-3 gap-2">
                    <span className="text-green-900 dark:text-green-500 animate-pulse">Descargar mi CV:</span>
                    <Button variant={'outline'} disabled={isDownloadingPdf}
                        onClick={handleDownloadCV("pdf", setIsDownloadingPdf)}>
                        {isDownloadingPdf ? <Spinner /> : <MdDownload />} Descargar <FaFilePdf />
                    </Button>
                    <Button variant={'outline'} disabled={isDownloadingDoc}
                        onClick={handleDownloadCV("doc", setIsDownloadingDoc)}>
                        {isDownloadingDoc ? <Spinner /> : <MdDownload />} Descargar <FaRegFileWord />
                    </Button>
                </div>
            </div>

        </>
    )
}