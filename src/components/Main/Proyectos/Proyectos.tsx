// Componentes
import { Card_proyect, type Repo } from "./index"
import { Separator, Spinner } from "@/components/ui/index";
// Hooks
import { useState, useEffect } from "react";
// Utiles
import axios from "axios";
// Iconos
import { FaRegCircleXmark } from "react-icons/fa6";


export const Proyectos = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const apiKey = import.meta.env.VITE_API_KEY_PRIV;
        console.log(apiKey)
        const fetchRepos = async () => {
            try {
                const response = await axios.get(
                    "https://api.github.com/user/repos",
                    {
                        headers: {
                            Authorization: apiKey,
                        },
                    }
                );
                setRepos(response.data);
            } catch (err) {
                setError(
                    axios.isAxiosError(err)
                        ? err.response?.data.message || err.message
                        : "Error desconocido"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) return (
        <>
            <h1 className="text-center text-3xl my-2 font-bold">Proyectos</h1>
            <hr className="border-neutral-500" />
            <Separator />
            <div className="flex flex-row items-center justify-center gap-2 my-6 w-full animate-pulse">
                <Spinner className="text-blue-700 size-8" />
                <h1 className="text-center text-lg">Cargando repositorios...</h1>
            </div>
        </>
    );
    if (error) return (
        <>
            <h1 className="text-center text-3xl my-2 font-bold">Proyectos</h1>
            <hr className="border-neutral-500" />
            <Separator />
            <div className="">
                <div className="flex flex-row items-center justify-center gap-2 mt-6 w-full">
                    <FaRegCircleXmark className="text-red-600 size-7" />
                    <h1 className="text-center text-red-600 text-lg">Ha ocurrido un error</h1>
                </div>
            </div>
        </>
    );

    return (
        <>
            <div>
                <h1 className="text-center text-3xl my-2 font-bold">Proyectos</h1>
                <hr className="border-neutral-500" />
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-hide px-2">
                {repos.map((repo, index) => (
                    <Card_proyect key={index} repo={repo} />
                ))}
            </div>
        </>
    );
};
