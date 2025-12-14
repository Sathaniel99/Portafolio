import { toast } from "@/components/ui/index";

export async function copyToClipboard(text: string, type: string){
    try {
        await navigator.clipboard.writeText(text);
        toast.success(`${type} copiado al portapapeles.`);
    } catch (err) {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        if (err instanceof Error) {
            toast.error(`Error al copiar al portapapeles: ${text}.`);
        }
    }
};

export function openNewTab(url: string, type: string) {
    toast.loading(`Abriendo ${type} en una nueva pestaña.`);
    setTimeout(() => {
        window.open(url, "_blank", "noopener,noreferrer");
        toast.success(`${type} abierto satisfactoriamente.`);
    }, 2000);
}

const opcionesFecha: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: '2-digit',
    year: 'numeric',
};

export function fecha(time: string) {
    return new Date(time).toLocaleDateString('es-ES', opcionesFecha);
}