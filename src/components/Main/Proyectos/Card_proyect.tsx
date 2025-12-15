// Componentes
import { Button } from "@/components/ui/index";
import { Skeleton } from "@/components/ui/skeleton";
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
    const name = repo.name.replaceAll("_", " ").replace("Oh", "Oh!")

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
        <div className="flex flex-col border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-700/10 p-4 my-4
                transition-all duration-200 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-700 relative overflow-hidden">
                    
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
                <h1 className="flex items-center gap-3 text-xl font-semibold text-neutral-800 dark:text-neutral-100">
                    <FaBook className="text-blue-500 dark:text-blue-400" />
                    {name}
                </h1>
                <Button
                    variant={"secondary"}
                    className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-700
                       hover:bg-neutral-200 dark:hover:bg-neutral-600
                       text-neutral-800 dark:text-neutral-100"
                    onClick={() => openNewTab(repo.html_url, "Repositorio")}>
                    <FaArrowRightToBracket />
                    Repositorio
                </Button>
            </div>

            {/* Descripción */}
            <div className="mb-3 px-1 text-neutral-700 dark:text-neutral-300 min-h-12">
                {repo.description || <span className="text-neutral-400 dark:text-neutral-500">Sin descripción aún.</span>}
            </div>

            {/* Lenguajes */}
            <div className="flex flex-wrap gap-2.5 px-1 py-3 border-t border-neutral-200 dark:border-neutral-700 overflow-hidden">
                {loadingLanguages ? (
                    <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                        {Array(5).fill(0).map((_, index) => (
                            <div key={index} className="flex flex-row items-center gap-1.5">
                                <Skeleton className="h-5 w-5 rounded-full animate-pulse bg-neutral-200 dark:bg-neutral-700" />
                                <Skeleton className="h-4 w-24 animate-pulse bg-neutral-200 dark:bg-neutral-700" />
                            </div>
                        ))}
                    </div>
                ) : Object.keys(languages).length > 0 ? (
                    Object.keys(languages).map((language) => (
                        <div className="flex items-center gap-1.5 text-sm" key={language}>
                            <span
                                className={`rounded-full w-2.5 h-2.5 ${languages_colors_list[language as Language] || "bg-gray-400"}`}>
                            </span>
                            <span className="text-neutral-700 dark:text-neutral-300">{language}</span>
                        </div>
                    ))
                ) : (
                    <span className="text-sm text-neutral-400 dark:text-neutral-500">No se encontraron lenguajes</span>
                )}
            </div>

            {/* Fecha */}
            <div className="flex justify-end pt-2 border-t border-neutral-200 dark:border-neutral-700">
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    Publicado: {fecha}
                </span>
            </div>
        </div>

    )
}