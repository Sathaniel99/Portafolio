// Componentes
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/index";
// Utiles
import { copyToClipboard, openNewTab } from "@/components/utils";
// Iconos
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaTelegram, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa6";

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
        icon: <SiGmail className="m-auto" size={35} />,
        click: () => (copyToClipboard("adanlqe@gmail.com", "Gmail")),
    },
    {
        name: "Número de teléfono",
        bgClass: "border-green-700 text-green-700 hover:bg-green-700 hover:text-white shadow-green-700",
        icon: <FaPhoneSquareAlt className="m-auto" size={35} />,
        click: () => (copyToClipboard("+5354528530", "Número de teléfono")),
    },
    {
        name: "Telegram",
        bgClass: "border-cyan-700 text-cyan-700 hover:bg-cyan-700 hover:text-white shadow-cyan-700",
        icon: <FaTelegram className="m-auto" size={35} />,
        click: () => (openNewTab("https://t.me/mojitodeazucar", "Telegram")),
    },
    {
        name: "Facebook",
        bgClass: "border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white shadow-blue-900",
        icon: <FaFacebook className="m-auto" size={35} />,
        click: () => (openNewTab("https://www.facebook.com/adanluis.quincocesescalonas", "Facebook")),
    },
    {
        name: "Whatsapp",
        bgClass: "border-green-900 text-green-900 hover:bg-green-900 hover:text-white shadow-green-900",
        icon: <SiWhatsapp className="m-auto" size={35} />,
        click: () => (openNewTab("https://wa.me/5354528530", "Whatsapp")),
    },
    {
        name: "Instagram",
        bgClass: "border-rose-900 text-rose-900 from-rose-500 to-yellow-500 hover:bg-linear-to-bl hover:text-white shadow-rose-900",
        icon: <FaInstagram className="m-auto" size={35} />,
        click: () => (openNewTab("https://www.instagram.com/sathaniel_lr/", "Instagram")),
    },
    {
        name: "Github",
        bgClass: "border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white shadow-indigo-900",
        icon: <FaGithub className="m-auto" size={35} />,
        click: () => (openNewTab("https://github.com/Sathaniel99/", "Github")),
    },
]

export function Contacto() {
    return (
        <>
            <div>
                <h1 className="text-center text-3xl my-2 font-bold">Contacto</h1>
                <hr className="border-neutral-500" />
            </div>
            <div className="flex flex-wrap justify-between items-center gap-3 p-5">
                {contacts.map((ctc, index) => (
                    <Tooltip key={index}>
                        <TooltipTrigger>
                            <div role="button" className={`w-28 sm:w-34 h-18 min-w-15 fs-2 flex border-2 shadow-lg rounded transition-all ${ctc.bgClass}`} onClick={ctc.click}>
                                {ctc.icon}
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            {ctc.name}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </>
    )
}

