// Componentes
import { Input, Label, Textarea, Button, Tooltip, TooltipTrigger, TooltipContent, InputGroup, InputGroupAddon, InputGroupInput, toast } from "@/components/ui/index.ts"
// Hooks
import { useState, useRef } from "react";
// Iconos
import { FiSend } from "react-icons/fi";
import { MdEmail, MdTextFields } from "react-icons/md";
import { FaRegCircleXmark } from "react-icons/fa6";

export function Sugerencias() {
    // hooks
    const [isChecked, setIsChecked] = useState<boolean>(true);
    const [inputText, setInputText] = useState("");
    const [textAreaText, setTextAreaText] = useState("");
    const [classInput, setClassInput] = useState("border-neutral-500");
    const [classTextArea, setClassTextArea] = useState("border-neutral-500");
    const msgRef = useRef<HTMLTextAreaElement>(null);
    const identRef = useRef<HTMLInputElement>(null);

    // constantes
    const inputField = isChecked ? "email" : "text"
    const icon = isChecked ? <MdEmail /> : <MdTextFields />
    const labelField = isChecked ? "Email:" : "Forma de identificarlo:"
    const msgTooltip = isChecked ? "No usar email." : "Usar email."
    const placeholder = isChecked ? "ejemplo: usuario@dominio.com..." : "ejemplo: Roberto, Manuel, Raúl Fonseca..."


    // Funciones
    // Alternar el check
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    };

    // Enviar mensaje
    const handleSendMessage = () => {
        const msge = msgRef.current?.value;
        const ident = identRef.current?.value;

        if (!msge || !ident) {
            toast.error(`Por favor, completa todos los campos.`);
            return;
        }

        const encodedMessage = encodeURIComponent(msge);
        const encodedIdent = encodeURIComponent(ident);

        const url = `https://wa.me/5491112345678?text=Hola%20soy%20${encodedIdent},%20escribo%20por%20mi%20sugerencia:%20${encodedMessage}`;

        window.open(url, "_blank", "noopener,noreferrer");

    }

    // Validaciones
    // Email
    const handleEmailValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value
        if (email.includes("@") && email.split("@")[1].includes(".") && email.split("@")[1].split(".")[1].length > 1) {
            setClassInput("border-green-600");
            setInputText("");
        }
        else {
            setClassInput("border-red-600");
            setInputText("Email no válido.");
        }
    }
    // Identidad
    const handleIdentValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value
        if (text != "" && text.length > 2) {
            setClassInput("border-green-600")
        }
        else {
            setClassInput("border-red-600")
        }
    }
    const validation = isChecked ? handleEmailValidation : handleIdentValidation
    // TextArea
    const handleTextAreaValidation = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value
        if (text != "" && text.split(" ").length > 2) {
            setClassTextArea("border-green-600");
            setTextAreaText("");
        }
        else {
            setClassTextArea("border-red-600")
            setTextAreaText("Campo inválido.");
        }
    }
    return (
        <>
            <h1 className="text-center text-3xl my-2 font-bold">Sugerencias</h1>
            <hr className="border-neutral-500" />
            <div className="grid w-full mt-5 gap-3">
                <div className="flex flex-row justify-between mb-1">
                    <Label htmlFor="ident">{labelField}</Label>
                    {inputText != "" && (<Label className="text-red-600 px-3 rounded flex flex-row items-center gap-2"><FaRegCircleXmark /> {inputText}</Label>)}
                </div>
                {/* Grupo del input */}
                <InputGroup className={`max-w-lg ${classInput}`}>
                    {/* Icono izquierdo */}
                    <InputGroupAddon align={"inline-start"}>{icon}</InputGroupAddon>
                    {/* Input */}
                    <InputGroupInput ref={identRef} id="ident" type={inputField} placeholder={placeholder} onChange={validation}></InputGroupInput>
                    {/* Checkbox derecho */}
                    <InputGroupAddon align={"inline-end"}>
                        <Tooltip>
                            <TooltipTrigger>
                                <Input className="cursor-pointer h-full w-4 mx-1" type="checkbox" checked={isChecked} onChange={handleCheckboxChange}></Input>
                            </TooltipTrigger>
                            <TooltipContent>
                                {msgTooltip}
                            </TooltipContent>
                        </Tooltip>
                    </InputGroupAddon>
                </InputGroup>
                <div className="h-2">
                    {textAreaText != "" && (<Label className="text-red-600 px-3 rounded flex flex-row items-center gap-2"><FaRegCircleXmark /> {textAreaText}</Label>)}
                </div>
                <Textarea ref={msgRef} id="msg" className={`h-50 ${classTextArea}`} cols={5} onChange={handleTextAreaValidation} placeholder="Sugiera en este contenedor de texto..."></Textarea>
                
                <div className="flex flex-col justify-center mt-5 gap-2">
                    <Button className="mx-auto" onClick={handleSendMessage}><FiSend /> Enviar</Button>
                    <em className="text-center text-sm">Enviar via Whatsapp</em>
                </div>
            </div>
        </>
    )
}


