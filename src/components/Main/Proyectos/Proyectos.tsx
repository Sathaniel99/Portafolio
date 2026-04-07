// Componentes
import { Card_proyect, type Repo } from "./index"
import { Separator } from "@/components/ui/index";
// Hooks
import { useState, useEffect, useTransition } from "react";
// Utiles
import axios from "axios";
// Iconos
import { FaRegCircleXmark } from "react-icons/fa6";
import { Skeleton } from "@/components/ui/skeleton";


export const Proyectos = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();


    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get("https://api.github.com/users/Sathaniel99/repos?type=owner");
                startTransition(() => {
                    setRepos(response.data);
                });
            } catch (err) {
                setError(
                    axios.isAxiosError(err)
                        ? err.response?.data.message || err.message
                        : "Error desconocido"
                );
            }
        };

        fetchRepos();
    }, []);

    if (isPending) return (
        <>
            <h1 className="text-center text-3xl my-2 font-bold">Proyectos</h1>
            <hr className="border-neutral-500" />
            <div className="flex-1 overflow-y-auto scrollbar-hide px-2">
                {Array(10).fill(0).map((_, index) => (
                    <Skeleton key={index} className="min-h-52 w-full my-4"></Skeleton>
                ))}
            </div>
        </>
    );
    if (error) return (
        <>
            <h1 className="text-center text-3xl my-2 font-bold">Proyectos</h1>
            <hr className="border-neutral-500" />
            <Separator />
            <div className="">
                <div className="flex flex-col items-center justify-center gap-2 mt-6 w-full border border-red-600 rounded-md p-3 bg-red-600/5">
                    <div className="flex flex-row gap-2">
                        <FaRegCircleXmark className="text-red-600 size-7" />
                        <h1 className="text-center text-red-600 text-lg">Ha ocurrido un error</h1>
                    </div>
                    <p className="text-red-600 text-center">{error}</p>
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
                {repos.map((repo) => (
                    <Card_proyect key={repo.id} repo={repo} />
                ))}
            </div>
        </>
    );
};
