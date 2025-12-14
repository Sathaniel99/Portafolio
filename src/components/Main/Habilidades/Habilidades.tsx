// Utiles
import { type Categoria, Card_habilidad } from ".";

const habilidades: Categoria[] = [
    {
        categoria: "Frontend",
        tecnologias: [
            {
                text: "HTML5",
                img: "/HTML5.webp",
                altImg: "HTML5",
                url: "https://developer.mozilla.org/es/docs/Web/HTML",
                ariaLabel: "Más información sobre HTML5",
                bgClass: "bg-orange-600/30 dark:bg-orange-950/75",
            },
            {
                text: "CSS3",
                img: "/CSS3.webp",
                altImg: "CSS3",
                url: "https://developer.mozilla.org/es/docs/Web/CSS",
                ariaLabel: "Más información sobre CSS3",
                bgClass: "bg-blue-600/30 dark:bg-blue-950/75",
            },
            {
                text: "JavaScript",
                img: "/JS.webp",
                altImg: "JavaScript",
                url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
                ariaLabel: "Más información sobre JavaScript",
                bgClass: "bg-yellow-600/30 dark:bg-yellow-950/75",
            },
            {
                text: "Bootstrap 5.3",
                img: "/Bootstrap.webp",
                altImg: "Bootstrap 5.3",
                url: "https://getbootstrap.com/",
                ariaLabel: "Más información sobre Bootstrap 5.3",
                bgClass: "bg-purple-600/30 dark:bg-purple-950/75",
            },
            {
                text: "Tailwind CSS",
                img: "/Tailwind_CSS.webp",
                altImg: "Tailwind CSS",
                url: "https://v2.tailwindcss.com/",
                ariaLabel: "Más información sobre Tailwind CSS",
                bgClass: "bg-cyan-600/20 dark:bg-cyan-950/75",
            }
        ]
    },
    {
        categoria: "Backend",
        tecnologias: [
            {
                text: "Python",
                img: "/python.webp",
                altImg: "Python",
                url: "https://www.python.org/",
                ariaLabel: "Más información sobre Python",
                bgClass: "bg-gradient-to-br from-cyan-600 dark:from-cyan-950 to-yellow-600 dark:to-yellow-950",
            },
            {
                text: "JAVA",
                img: "/java.webp",
                altImg: "JAVA",
                url: "https://www.java.com/",
                ariaLabel: "Más información sobre JAVA",
                bgClass: "bg-gradient-to-t from-cyan-600/50 dark:from-cyan-950 to-orange-600/50 dark:to-orange-950",
            },
        ]
    },
    {
        categoria: "Frameworks",
        tecnologias: [
            {
                text: "Django",
                img: "/django.webp",
                altImg: "Django",
                url: "https://www.djangoproject.com/",
                ariaLabel: "Más información sobre Django",
                bgClass: "bg-green-600/20 dark:bg-green-950",
            },
            {
                text: "React",
                img: "/react.webp",
                altImg: "React",
                url: "https://es.react.dev/",
                ariaLabel: "Más información sobre React",
                bgClass: "bg-cyan-600/20 dark:bg-cyan-950",
            },
            {
                text: "Nextjs",
                img: "/nextjs.svg",
                altImg: "Nextjs",
                url: "https://nextjs.org/",
                ariaLabel: "Más información sobre Nextjs",
                bgClass: "bg-neutral-600/20 dark:bg-neutral-950",
            },
            {
                text: "FastApi",
                img: "/fastapi.webp",
                altImg: "FastApi",
                url: "https://fastapi.tiangolo.com/",
                ariaLabel: "Más información sobre FastApi",
                bgClass: "bg-cyan-600/20 dark:bg-cyan-950/75",
            },
            {
                text: "Flask",
                img: "/flask.webp",
                altImg: "Flask",
                url: "https://flask-es.readthedocs.io/",
                ariaLabel: "Más información sobre Flask",
                bgClass: "bg-neutral-600/20 dark:bg-neutral-950",
            }
        ]
    },
    {
        categoria: "Bases de Datos",
        tecnologias: [
            {
                text: "PostgreSQL",
                img: "/postgreesql.webp",
                altImg: "PostgreSQL",
                url: "https://www.postgresql.org/",
                ariaLabel: "Más información sobre PostgreSQL",
                bgClass: "bg-cyan-600/35 dark:bg-blue-600/25",
            },
            {
                text: "SQLite",
                img: "/sqlite.webp",
                altImg: "SQLite",
                url: "https://www.sqlite.org/",
                ariaLabel: "Más información sobre SQLite",
                bgClass: "bg-cyan-600/20 dark:bg-blue-600/10",
            }
        ]
    },
    {
        categoria: "Miscelaneas",
        tecnologias: [
            {
                url: "https://github.com/",
                ariaLabel: "Más información sobre Github",
                text: "Github",
                altImg: "Github",
                img: "/github.webp",
                bgClass: "bg-neutral-600/20 dark:bg-neutral-900",
            },
            {
                url: "https://vite.dev/",
                ariaLabel: "Más información sobre Vite",
                text: "Vite",
                altImg: "Vite",
                img: "/vite.webp",
                bgClass: "bg-gradient-to-l from-purple-600/50 dark:from-purple-600/30 via-yellow-600/50 dark:via-yellow-600/25 to-cyan-600/50 dark:to-cyan-950",
            }
        ]
    },
];



export function Habilidades() {
    return (
        <>
            <h1 className="text-center text-3xl my-2 font-bold">Habilidades</h1>
            <hr className="border-neutral-500" />
            <div className="h-[70vh] overflow-auto scrollbar-hide">
                {habilidades.map((habilidad) => (
                    <div key={habilidad.categoria} className="mt-8">
                        <h2 className="text-center text-2xl my-2 font-semibold">{habilidad.categoria}</h2>
                        <div className="flex flex-wrap justify-center gap-6 bg-neutral-300 dark:bg-neutral-800 border border-neutral-600 px-2 py-5 rounded-md">
                            {habilidad.tecnologias.map((tecnologia) => (
                                <Card_habilidad key={`${habilidad.categoria}-${tecnologia.text}`} url={tecnologia.url}
                                    altImg={tecnologia.altImg} ariaLabel={tecnologia.ariaLabel} img={tecnologia.img}
                                    text={tecnologia.text} bgClass={tecnologia.bgClass} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}