// Componentes
import { Button, Spinner } from "@/components/ui/index";
// Hooks
import { useEffect, useState } from "react";
// Utiles
import { openNewTab, fecha as _Fecha } from "@/components/utils";
import type { Repo } from ".";
import axios from "axios";
// Iconos
import { FaBook, FaArrowRightToBracket } from "react-icons/fa6";

type Language = "Python" | "TeX" | "HTML" | "CSS" | "JavaScript" | "TypeScript" | "PowerShell" | "Shell";

const languages_colors_list: Record<Language, string> = {
    "Python": "bg-green-700 shadow-green-700 border-green-700",
    "TeX": "bg-green-600 shadow-green-600 border-green-600",
    "HTML": "bg-orange-600 shadow-orange-600 border-orange-600",
    "CSS": "bg-purple-700 shadow-purple-700 border-purple-700",
    "JavaScript": "bg-yellow-500 shadow-yellow-500 border-yellow-500",
    "TypeScript": "bg-blue-700 shadow-blue-700 border-blue-700",
    "PowerShell": "bg-blue-700 shadow-blue-700 border-blue-700",
    "Shell": "bg-blue-700 shadow-blue-700 border-blue-700",
};

export function Card_proyect({ repo }: { repo: Repo }) {
    const [languages, setLanguages] = useState<Record<string, number>>({});
    const [loadingLanguages, setLoadingLanguages] = useState<boolean>(true);
    const fecha = _Fecha(repo.pushed_at);
    const name = repo.name.replaceAll("_", " ").replace("Oh","Oh!")

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const response = await axios.get(repo.languages_url);
                setLanguages(response.data);
            } catch (error) {
                console.error("Error al obtener lenguajes:", error);
            } finally {
                setLoadingLanguages(false);
            }
        };

        if (repo.languages_url) {
            fetchLanguages();
        }
    }, [repo.languages_url]);

    return (
        <div className="flex flex-col border border-neutral-500 rounded bg-neutral-300 dark:bg-neutral-900 p-2 my-4 transition-all shadow-md hover:shadow-slate-800 relative">
            <div className="flex justify-between m-2">
                <h1 className="flex flex-row gap-2 items-center text-2xl"><FaBook className="text-blue-800" /> {name}</h1>
                <Button variant={"secondary"} onClick={() => (openNewTab(repo.html_url, "Repositorio"))}><FaArrowRightToBracket /> Repositorio</Button>
            </div>
            <hr className="border-neutral-500" />
            <div className="m-2 min-h-12">
                {repo.description || "Sin descripción aún."}
            </div>
            <hr className="border-neutral-500" />
            <div className="flex flex-row gap-3 flex-wrap p-2">
                {loadingLanguages ? (
                    <div className="flex flex-row gap-2 items-center">
                        <Spinner /><span>Cargando lenguajes...</span>
                    </div>
                ) : Object.keys(languages).length > 0 ? (
                    Object.keys(languages).map((language) => (
                        <div className="flex flex-row items-center gap-1" key={language}>
                            <span className={`rounded-full w-3 h-3 border shadow-sm animate-pulse ${languages_colors_list[language as Language] || "bg-gray-700"}`}></span>
                            <span>{language}</span>
                        </div>
                    ))
                ) : (
                    <span>No se encontraron lenguajes</span>
                )}
            </div>
            <div className="w-full flex">
                <span className="ms-auto text-neutral-500 dark:text-neutral-400">Publicado: {fecha}</span>
            </div>
        </div>
    )
}