import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SiGmail } from "react-icons/si";
import { FaSquarePhone, FaTelegram, FaFacebook, FaWhatsapp, FaInstagram, FaGithub, FaCircleCheck } from "react-icons/fa6";
import { Hr } from './hr';
import './Contacto.css';
import { OverlayTrigger, Tooltip, Button, Toast, ToastContainer } from 'react-bootstrap';

const contacts = [
    { title: 'Gmail', text: 'adanlqe@gmail.com', Icon: SiGmail, action: copy_text, type: 'Correo', class: 'btn-outline-email' },
    { title: 'Número de teléfono', text: '+53 54528530', Icon: FaSquarePhone, action: copy_text, type: 'Número de Teléfono', class: 'btn-outline-phone' },
    { title: 'Telegram', link: 'https://t.me/mojitodeazucar', Icon: FaTelegram, class: 'btn-outline-telegram' },
    { title: 'Facebook', link: 'https://www.facebook.com/adanluis.quincocesescalonas', Icon: FaFacebook, class: 'btn-outline-facebook' },
    { title: 'Whatsapp', link: 'https://wa.me/5354528530', Icon: FaWhatsapp, class: 'btn-outline-whatsapp' },
    { title: 'Instagram', link: 'https://www.instagram.com/sathaniel_lr/', Icon: FaInstagram, class: 'btn-outline-instagram' },
    { title: 'Github', link: 'https://github.com/Sathaniel99/', Icon: FaGithub, class: 'btn-outline-github' },
];

export function Contacto() {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const handleCopy = (text, type) => {
        copy_text(text, type);
        setToastMessage(`${type} copiado al portapapeles`);
        setShowToast(true);
    };

    return (
        <>
            <h3 className="mt-3 w-100 text-center">Contacto</h3>
            <Hr />
            <div className="container d-flex flex-wrap justify-content-between align-items-center gap-3">
                {contacts.map((contact, index) =>
                    contact.link ? renderLinkButton(contact, index) : renderButton(contact, index, handleCopy)
                )}
            </div>
            <ToastContainer position="top-end" className="p-3 position-fixed">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide className="shadow">
                    <Toast.Header>
                        <strong className="me-auto h-100">Informaciòn <FaCircleCheck className="text-success"/></strong>
                    </Toast.Header>
                    <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
}

function renderButton(contact, index, handleCopy) {
    return (
        <OverlayTrigger
            key={index}
            placement="top"
            overlay={<Tooltip id={`tooltip-top`}>{contact.title}</Tooltip>}
            trigger={["hover", "focus"]} // Add "focus" trigger here
        >
            <Button variant="outline-email" className={`card-ctc btn ${contact.class} shadow rounded-2 px-5 py-3 fs-2 d-flex`} onClick={() => handleCopy(contact.text, contact.type)}>
                <contact.Icon className="m-auto" />
            </Button>
        </OverlayTrigger>
    );
}

function renderLinkButton(contact, index) {
    return (
        <OverlayTrigger
            key={index}
            placement="top"
            overlay={<Tooltip id={`tooltip-top`}>{contact.title}</Tooltip>}
            trigger={['hover', 'focus', 'click']}
        >
            <Button variant="outline-email" className={`card-ctc btn ${contact.class} shadow rounded-2 px-5 py-3 fs-2 d-flex`} onClick={() => window.open(contact.link)}>
                <contact.Icon className="m-auto" />
            </Button>
        </OverlayTrigger>
    );
}

function copy_text(texto, tipo) {
    const $elementoTemporal = document.createElement('textarea');
    $elementoTemporal.value = texto;
    document.body.appendChild($elementoTemporal);
    $elementoTemporal.select();
    document.execCommand('copy');
    document.body.removeChild($elementoTemporal);
}