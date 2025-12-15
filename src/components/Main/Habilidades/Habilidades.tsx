// Utiles
import { type Categoria, Card_habilidad } from ".";

const habilidades: Categoria[] = [
    {
        categoria: "Lenguajes de Programación",
        tecnologias: [
            {
                text: "JavaScript",
                img: "JS.webp",
                altImg: "JavaScript",
                url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
                ariaLabel: "Más información sobre JavaScript",
                bgClass: "bg-yellow-600/30 dark:bg-yellow-950/75",
            },
            {
                text: "TypeScript",
                img: "typescript.webp",
                altImg: "TypeScript",
                url: "https://www.typescriptlang.org/",
                ariaLabel: "Más información sobre TypeScript",
                bgClass: "bg-blue-600/30 dark:bg-blue-950/75",
            },
            {
                text: "Python",
                img: "python.webp",
                altImg: "Python",
                url: "https://www.python.org/",
                ariaLabel: "Más información sobre Python",
                bgClass: "bg-gradient-to-br from-cyan-600 dark:from-cyan-950 to-yellow-600 dark:to-yellow-950",
            },
            {
                text: "Java",
                img: "java.webp",
                altImg: "JAVA",
                url: "https://www.java.com/",
                ariaLabel: "Más información sobre JAVA",
                bgClass: "bg-gradient-to-t from-cyan-600/50 dark:from-cyan-950 to-orange-600/50 dark:to-orange-950",
            }
        ]
    },
    {
        categoria: "Lenguajes de Marcado/Estilización",
        tecnologias: [
            {
                text: "HTML5",
                img: "HTML5.webp",
                altImg: "HTML5",
                url: "https://developer.mozilla.org/es/docs/Web/HTML",
                ariaLabel: "Más información sobre HTML5",
                bgClass: "bg-orange-600/30 dark:bg-orange-950/75",
            },
            {
                text: "CSS3",
                img: "CSS3.webp",
                altImg: "CSS3",
                url: "https://developer.mozilla.org/es/docs/Web/CSS",
                ariaLabel: "Más información sobre CSS3",
                bgClass: "bg-blue-600/30 dark:bg-blue-950/75",
            }
        ]
    },
    {
        categoria: "Formatos de Datos",
        tecnologias: [
            {
                text: "JSON",
                img: "json.webp",
                altImg: "JSON",
                url: "https://www.json.org/json-es.html",
                ariaLabel: "Más información sobre JSON",
                bgClass: "bg-neutral-600/30 dark:bg-neutral-300/5",
            }
        ]
    },
    {
        categoria: "Frameworks/Bibliotecas (Frontend)",
        tecnologias: [
            {
                text: "React",
                img: "react.webp",
                altImg: "React",
                url: "https://es.react.dev/",
                ariaLabel: "Más información sobre React",
                bgClass: "bg-cyan-600/20 dark:bg-cyan-950",
            }
        ]
    },
    {
        categoria: "Frameworks/Bibliotecas (Backend)",
        tecnologias: [
            {
                text: "Django",
                img: "django.webp",
                altImg: "Django",
                url: "https://www.djangoproject.com/",
                ariaLabel: "Más información sobre Django",
                bgClass: "bg-green-600/20 dark:bg-green-950",
            },
            {
                text: "FastApi",
                img: "fastapi.webp",
                altImg: "FastApi",
                url: "https://fastapi.tiangolo.com/",
                ariaLabel: "Más información sobre FastApi",
                bgClass: "bg-cyan-600/20 dark:bg-cyan-950/75",
            },
            {
                text: "Flask",
                img: "flask.webp",
                altImg: "Flask",
                url: "https://flask-es.readthedocs.io/",
                ariaLabel: "Más información sobre Flask",
                bgClass: "bg-neutral-600/20 dark:bg-neutral-800/90",
            }
        ]
    },
    {
        categoria: "Frameworks/Bibliotecas de UI",
        tecnologias: [
            {
                text: "Tailwind CSS",
                img: "Tailwind_CSS.webp",
                altImg: "Tailwind CSS",
                url: "https://v2.tailwindcss.com/",
                ariaLabel: "Más información sobre Tailwind CSS",
                bgClass: "bg-cyan-600/20 dark:bg-cyan-950/75",
            },
            {
                text: "Bootstrap 5.3",
                img: "Bootstrap.webp",
                altImg: "Bootstrap 5.3",
                url: "https://getbootstrap.com/",
                ariaLabel: "Más información sobre Bootstrap 5.3",
                bgClass: "bg-purple-600/30 dark:bg-purple-950/75",
            },
            {
                text: "Material UI",
                img: "materialui.webp",
                altImg: "Material UI",
                url: "https://mui.com/",
                ariaLabel: "Más información sobre Material UI",
                bgClass: "bg-blue-600/30 dark:bg-blue-950/75",
            },
            {
                text: "Chakra UI",
                img: "chakraui.webp",
                altImg: "Chakra UI",
                url: "https://chakra-ui.com/",
                ariaLabel: "Más información sobre Chakra UI",
                bgClass: "bg-teal-600/30 dark:bg-teal-950/75",
            },
            {
                text: "Evergreen",
                img: "evergreen.webp",
                altImg: "Evergreen",
                url: "https://evergreen.segment.com/",
                ariaLabel: "Más información sobre Evergreen",
                bgClass: "bg-green-600/30 dark:bg-emerald-300/20",
            },
            {
                text: "PrimeReact",
                img: "primereact.webp",
                altImg: "PrimeReact",
                url: "https://primereact.org/",
                ariaLabel: "Más información sobre PrimeReact",
                bgClass: "bg-blue-600/30 dark:bg-blue-950/75",
            },
            {
                text: "Shadcn UI",
                img: "shadcnui.webp",
                altImg: "Shadcn UI",
                url: "https://ui.shadcn.com/",
                ariaLabel: "Más información sobre Shadcn UI",
                bgClass: "bg-neutral-600/30 dark:bg-neutral-800/75",
            },
            {
                text: "Mantine",
                img: "mantine.webp",
                altImg: "Mantine",
                url: "https://mantine.dev/",
                ariaLabel: "Más información sobre Mantine",
                bgClass: "bg-blue-600/30 dark:bg-blue-950/75",
            },
            {
                text: "Blueprint",
                img: "blueprint.webp",
                altImg: "Blueprint",
                url: "https://blueprintjs.com/",
                ariaLabel: "Más información sobre Blueprint",
                bgClass: "bg-blue-600/30 dark:bg-blue-950/75",
            },
            {
                text: "Hero UI",
                img: "heroui.webp",
                altImg: "Hero UI",
                url: "https://www.tailwindtoolbox.com/",
                ariaLabel: "Más información sobre Hero UI",
                bgClass: "bg-purple-600/30 dark:bg-neutral-500/20",
            },
            {
                text: "Flowbite React",
                img: "flowbitereact.webp",
                altImg: "Flowbite React",
                url: "https://flowbite-react.com/",
                ariaLabel: "Más información sobre Flowbite React",
                bgClass: "bg-blue-600/30 dark:bg-blue-950/75",
            },
            {
                text: "HighCharts",
                img: "highcharts.webp",
                altImg: "HighCharts",
                url: "https://www.highcharts.com/",
                ariaLabel: "Más información sobre HighCharts",
                bgClass: "bg-linear-45 bg-blue-600/30 dark:from-sky-500/20 dark:to-cyan-500/30",
            }
        ]
    },
    {
        categoria: "Miscelánea",
        tecnologias: [
            {
                text: "Vite",
                img: "vite.webp",
                altImg: "Vite",
                url: "https://vite.dev/",
                ariaLabel: "Más información sobre Vite",
                bgClass: "bg-gradient-to-l from-purple-600/50 dark:from-purple-600/30 via-yellow-600/50 dark:via-yellow-600/25 to-cyan-600/50 dark:to-cyan-950",
            },
            {
                text: "GitHub",
                img: "github.webp",
                altImg: "GitHub",
                url: "https://github.com/",
                ariaLabel: "Más información sobre GitHub",
                bgClass: "bg-neutral-600/20 dark:bg-neutral-900",
            }
        ]
    },
    {
        categoria: "Bases de Datos",
        tecnologias: [
            {
                text: "PostgreSQL",
                img: "postgreesql.webp",
                altImg: "PostgreSQL",
                url: "https://www.postgresql.org/",
                ariaLabel: "Más información sobre PostgreSQL",
                bgClass: "bg-cyan-600/35 dark:bg-blue-600/25",
            },
            {
                text: "SQLite",
                img: "sqlite.webp",
                altImg: "SQLite",
                url: "https://www.sqlite.org/",
                ariaLabel: "Más información sobre SQLite",
                bgClass: "bg-cyan-600/20 dark:bg-blue-600/10",
            }
        ]
    },
    {
        categoria: "Herramientas de Diseño Gráfico/UI",
        tecnologias: [
            {
                text: "Figma",
                img: "figma.webp",
                altImg: "Figma",
                url: "https://www.figma.com/",
                ariaLabel: "Más información sobre Figma",
                bgClass: "bg-purple-600/30 bg-linear-45 from-black/50 dark:to-purple-950",
            },
            {
                text: "Canvas",
                img: "canvas.webp",
                altImg: "Canvas",
                url: "https://www.canva.com/",
                ariaLabel: "Más información sobre Canva",
                bgClass: "bg-blue-600/30 dark:bg-blue-950/75",
            },
            {
                text: "Adobe Photoshop",
                img: "photoshop.webp",
                altImg: "Adobe Photoshop",
                url: "https://www.adobe.com/products/photoshop.html",
                ariaLabel: "Más información sobre Photoshop",
                bgClass: "bg-blue-600/30 dark:bg-blue-950/75",
            },
            {
                text: "Adobe Premiere",
                img: "premiere.webp",
                altImg: "Adobe Premiere",
                url: "https://www.adobe.com/products/premiere.html",
                ariaLabel: "Más información sobre Premiere",
                bgClass: "bg-purple-600/30 dark:bg-purple-950/80",
            },
            {
                text: "Adobe Audition",
                img: "audition.webp",
                altImg: "Adobe Audition",
                url: "https://www.adobe.com/products/audition.html",
                ariaLabel: "Más información sobre Audition",
                bgClass: "bg-emerald-600/30 dark:bg-emerald-950/75",
            },
            {
                text: "Adobe AfterEffects",
                img: "aftereffects.webp",
                altImg: "Adobe AfterEffects",
                url: "https://www.adobe.com/products/aftereffects.html",
                ariaLabel: "Más información sobre Adobe AfterEffects",
                bgClass: "bg-indigo-600/30 dark:bg-indigo-950",
            },
            {
                text: "Adobe XD",
                img: "adobexd.webp",
                altImg: "Adobe XD",
                url: "https://www.adobe.com/products/xd.html",
                ariaLabel: "Más información sobre Adobe XD",
                bgClass: "bg-red-600/30 dark:bg-red-800/20",
            }
        ]
    },
    {
        categoria: "Herramientas de Desarrollo",
        tecnologias: [
            {
                text: "Git",
                img: "git.webp",
                altImg: "Git",
                url: "https://git-scm.com/",
                ariaLabel: "Más información sobre Git",
                bgClass: "bg-orange-600/30 dark:bg-orange-950/75",
            },
            {
                text: "VSC",
                img: "vscode.webp",
                altImg: "Visual Studio Code",
                url: "https://code.visualstudio.com/",
                ariaLabel: "Más información sobre Visual Studio Code",
                bgClass: "bg-blue-600/30 dark:bg-blue-950/75",
            },
            {
                text: "VSC(Code-Server)",
                img: "codeserver.webp",
                altImg: "VSC(Code-Server)",
                url: "https://github.com/coder/code-server",
                ariaLabel: "Más información sobre VSC(Code-Server)",
                bgClass: "bg-blue-600/30 dark:bg-blue-950/75",
            },
            {
                text: "bash",
                img: "bash.webp",
                altImg: "bash",
                url: "https://www.gnu.org/software/bash/",
                ariaLabel: "Más información sobre bash",
                bgClass: "bg-neutral-600/30 dark:bg-neutral-950/75",
            }
        ]
    },
    {
        categoria: "Herramientas de Producción Musical",
        tecnologias: [
            {
                text: "FL Studio",
                img: "flstudio.webp",
                altImg: "FL Studio",
                url: "https://www.image-line.com/",
                ariaLabel: "Más información sobre FL Studio",
                bgClass: "bg-radial from-orange-400/50 via-orange-400/50 to-neutral-900/50 dark:from-orange-900 dark:via-neutral-900 dark:to-neutral-800",
            },
            {
                text: "Cubase",
                img: "cubase.webp",
                altImg: "Cubase",
                url: "https://www.steinberg.net/cubase/",
                ariaLabel: "Más información sobre Cubase",
                bgClass: "bg-cyan-600/30 dark:bg-cyan-950/75",
            },
            {
                text: "Audacity",
                img: "audacity.webp",
                altImg: "Audacity",
                url: "https://www.audacityteam.org/",
                ariaLabel: "Más información sobre Audacity",
                bgClass: "bg-yellow-600/30 dark:bg-yellow-600/25",
            }
        ]
    },
    {
        categoria: "Herramientas de Ofimática",
        tecnologias: [
            {
                text: "Microsoft Office",
                img: "msoffice.webp",
                altImg: "Microsoft Office",
                url: "https://www.microsoft.com/es-es/microsoft-365/microsoft-office",
                ariaLabel: "Más información sobre Microsoft Office",
                bgClass: "bg-orange-600/30 dark:bg-orange-950/75",
            }
        ]
    }
];




export function Habilidades() {
    return (
        <>
            <div>
                <h1 className="text-center text-3xl my-2 font-bold">Habilidades</h1>
                <hr className="border-neutral-500" />
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-hide px-2">
                {habilidades.map((habilidad) => (
                    <div key={habilidad.categoria} className="mt-8">
                        <h2 className="text-lg font-semibold mb-3 px-2 text-neutral-700 dark:text-neutral-300 border-l-4 border-cyan-500 bg-neutral-500/10 rounded-tr rounded-br p-2">{habilidad.categoria}</h2>
                        <div className="flex flex-wrap justify-start px-2 pb-5 rounded-md relative">

                            <div className="flex flex-wrap gap-2">
                                {habilidad.tecnologias.map((tecnologia) => (
                                    <Card_habilidad key={`${habilidad.categoria}-${tecnologia.text}`} url={tecnologia.url}
                                        altImg={tecnologia.altImg} ariaLabel={tecnologia.ariaLabel} img={tecnologia.img}
                                        text={tecnologia.text} bgClass={tecnologia.bgClass} />
                                ))}

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}