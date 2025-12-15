// Componentes
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/index";
// Utiles
import { copyToClipboard, openNewTab } from "@/components/utils";
// Iconos
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaTelegram, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

interface contactsProps {
    name: string,
    bgClass: string,
    icon: React.ReactNode,
    click: React.ReactEventHandler
}

const contacts: contactsProps[] = [
    {
        name: "Gmail",
        bgClass: "border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white shadow-orange-700",
        icon: <SiGmail className="m-auto" size={20} />,
        click: () => (copyToClipboard("adanlqe@gmail.com", "Gmail")),
    },
    {
        name: "Número de teléfono",
        bgClass: "border-green-700 text-green-700 hover:bg-green-700 hover:text-white shadow-green-700",
        icon: <FaPhoneSquareAlt className="m-auto" size={20} />,
        click: () => (copyToClipboard("+5354528530", "Número de teléfono")),
    },
    {
        name: "Telegram",
        bgClass: "border-cyan-700 text-cyan-700 hover:bg-cyan-700 hover:text-white shadow-cyan-700",
        icon: <FaTelegram className="m-auto" size={20} />,
        click: () => (openNewTab("https://t.me/mojitodeazucar", "Telegram")),
    },
    {
        name: "Facebook",
        bgClass: "border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white shadow-blue-900",
        icon: <FaFacebook className="m-auto" size={20} />,
        click: () => (openNewTab("https://www.facebook.com/adanluis.quincocesescalonas", "Facebook")),
    },
    {
        name: "Whatsapp",
        bgClass: "border-green-900 text-green-900 hover:bg-green-900 hover:text-white shadow-green-900",
        icon: <SiWhatsapp className="m-auto" size={20} />,
        click: () => (openNewTab("https://wa.me/5354528530", "Whatsapp")),
    },
    {
        name: "Instagram",
        bgClass: "border-rose-900 text-rose-900 from-rose-500 to-yellow-500 hover:bg-linear-to-bl hover:text-white shadow-rose-900",
        icon: <FaInstagram className="m-auto" size={20} />,
        click: () => (openNewTab("https://www.instagram.com/sathaniel_lr/", "Instagram")),
    },
    {
        name: "Github",
        bgClass: "border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white shadow-indigo-900",
        icon: <FaGithub className="m-auto" size={20} />,
        click: () => (openNewTab("https://github.com/Sathaniel99/", "Github")),
    },
]

export function Contacto() {
    return (
        <div className="mt-auto w-full">
            <h1 className="flex justify-center items-center gap-2 w-full">
                ¡Contactame! <FaHeart className="text-red-600 animate-pulse"/>
            </h1>
            <hr className="border-neutral-500 mb-2 mt-1"></hr>
            <div className="flex flex-row justify-center w-full">
                {contacts.map((ctc, index) => (
                    <Tooltip key={index}>
                        <TooltipTrigger>
                            <div role="button" className={`w-8 h-8 fs-2 flex border-2 shadow-sm rounded-full transition-all ${ctc.bgClass}`} onClick={ctc.click}>
                                {ctc.icon}
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            {ctc.name}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </div>
    )
}