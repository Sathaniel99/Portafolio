import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Popover, OverlayTrigger } from "react-bootstrap";
import Tooltip from 'react-bootstrap/Tooltip';
import { BiDownload } from "react-icons/bi";

export function Sobre_mi() {
    const uciPopover = (
        <Popover id="uci-popover" className="shadow">
            <Popover.Body>
                <img className="object-fit-contain m-auto h-100 w-100" src="/Portafolio/uci.webp" alt="UCI" id="img-uci"/>
            </Popover.Body>
        </Popover>
    );

    const habanaPopover = (
        <Popover id="habana-popover" className="shadow">
            <Popover.Body>
                <img className="h-100 w-100 object-fit-cover rounded border border-1 border-secondary-subtle shadow" src="/Portafolio/habana_maps.webp" alt="La Habana" id="img-habana"/>
            </Popover.Body>
        </Popover>
    );

    const inotuPopover = (
        <Popover id="inotu-popover" className="shadow">
            <Popover.Body>
                <img className="h-100 w-100 object-fit-cover m-auto rounded" src="/Portafolio/INOTU.webp" alt="INOTU" id="img-inotu"/>
            </Popover.Body>
        </Popover>
    );

    const sagpnPopover = (
        <Popover id="sagpn-popover" className="shadow rounded web-container-sagpn">
            <Popover.Body>
                <img className="object-fit-contain m-auto h-100 w-100" src="/Portafolio/website.webp" alt="SAGPN" id="img-sagpn"/>
                </Popover.Body>
            </Popover>
        );
    
    const function_Download = () => {
        const externalUrl = '/Portafolio/CV - Adán Luis Quincoces Escalona.doc';
        const link = document.createElement('a');
        link.href = externalUrl;
        link.download = 'CV - Adán Luis Quincoces Escalona';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <React.Fragment>
            <style>{`
                .glow-pulse{
                    animation: glow-pulse 2s infinite;
                    }
                @keyframes glow-pulse{
                    0{
                        box-shadow: 0 0 0px 0px gray;
                    }
                    50%{
                        box-shadow: 0 0 10px 1px gray;
                    }
                    100%{
                        box-shadow: 0 0 0px 0px gray;
                    }
                }
                .bg-primary{
                    --shadow: var(--bs-primary-rgb);
                }
                .bg-secondary{
                    --shadow: var(--bs-secondary-rgb);
                }
                .bg-success{
                    --shadow: var(--bs-success-rgb);
                }
                .bg-danger{
                    --shadow: var(--bs-danger-rgb);
                }
                .bg-warning{
                    --shadow: var(--bs-warning-rgb);
                }
                .bg-info{
                    --shadow: var(--bs-info-rgb);
                }
                .bg-violet{
                    background-color: #663399;
                    --shadow: var(102, 51, 153);
                }
                .bg-cyan{
                    background-color: #12a3a8ff;
                    --shadow: var(18, 163, 168);
                }
                .bg-orange{
                    background-color:rgb(227, 76, 38);
                    --shadow: var(227, 76, 38);
                }
                .bg-blue{
                    background-color:rgb(53, 114, 165);
                    --shadow: var(53, 114, 165);
                }
                .bg-green-grey{
                    background-color:rgb(39, 99, 49);
                    --shadow: var(39, 99, 49);
                }
                #uci-popover, #habana-popover, #inotu-popover{
                    width: 10rem;
                    height: 8rem;
                    display: flex;
                }
                .web-container-sagpn{
                    max-width: 38rem;
                    height: 20rem;
                    display: flex;
                }
                .web-container-contador{
                    max-width: 38rem;
                    height: 20rem;
                    display: flex;
                }
                html[data-bs-theme="dark"] #img-inotu{
                    filter: invert(1) grayscale(1);
                }
                html[data-bs-theme="light"] #img-uci{
                    filter: invert(1);
                }
                .popover-body{
                    padding: 0.5rem;
                }
            `}</style>
            <OverlayTrigger placement="top" overlay={<Tooltip>{"Descargar CV"}</Tooltip>}>
                <button className="btn btn-outline-secondary py-2 d-flex align-items-center gap-2 position-absolute end-0" onClick={function_Download}>
                    <BiDownload class="fs-5"/>
                </button>
            </OverlayTrigger>
            <h3 className="mt-3 w-100 text-center">Sobre Mí</h3>
            <hr className="w-100 border border-1 border-secondary" />
            <p className="text-start fs-5 lh-sm">
                Mi nombre es <span className="user-select-all">Adán Luis Quincoces Escalona</span>, tengo 25 años, soy graduado de <span className="user-select-all">Ingeniero en Ciencias Informáticas</span> de la 
                <OverlayTrigger trigger={['hover', 'focus', 'click']} placement="top" overlay={uciPopover}>
                    <a className="text-decoration-none text-primary-emphasis fw-bold" href="https://www.uci.cu/"> Universidad de las Ciencias Informáticas (UCI)</a>
                </OverlayTrigger> en 
                <OverlayTrigger trigger={['hover', 'focus', 'click']} placement="top" overlay={habanaPopover}>
                    <a className="text-decoration-none text-primary-emphasis fw-bold" href="https://www.bing.com/maps?q=La%20Habana&amp;satid=id.sid%3A3ca5066a-a331-c1b3-135f-1fde36da55db&amp;FORM=KC2MAP"> La Habana</a>
                </OverlayTrigger>,
                donde culminé mis estudios en julio de 2024. Previo a mi formación universitaria, me gradué del Instituto Preuniversitario de Veguitas Granma (I.P.U. Abel Santamaría Cuadrado) en junio de 2017.
            </p>
            <p className="text-start fs-5 lh-sm">
                Actualmente trabajo como Director de Informática en el 
                <OverlayTrigger trigger={['hover', 'focus', 'click']} placement="top" overlay={inotuPopover}>
                    <a className="text-decoration-none text-primary-emphasis fw-bold" href="https://www.inotu.gob.cu/es"> Insituto Nacional de Ordenamiento Territorial y Urbanismo <strong>(INOTU)</strong></a>
                </OverlayTrigger>, ubicado en Boyeros, La Habana. En esta posición, complemento el desarrollo y gestión del proyecto :
                <OverlayTrigger trigger={['hover', 'focus', 'click']} placement="top" overlay={sagpnPopover}>
                    <p className="text-decoration-none text-primary-emphasis fw-bold cursor-pointer text-wrap text-break">- Sistema Automatizado de Gestión y Control <strong>(SAGC)</strong></p>
                </OverlayTrigger>
                Donde me encargo de aspectos relacionados con la Ciberseguridad, Modularidad, Diseño de Interfaces y Mapas Catastrales.
            </p>
            <p className="text-start fs-5 lh-sm">
            Con más de 3 años de experiencia en el desarrollo de software tanto web como de escritorio. Además, poseo conocimientos integrales que abarcan todas las etapas del ciclo de vida del software, incluyendo el análisis de requisitos, diseño e implementación de aplicaciones, administración de bases de datos y gestión de infraestructuras (a nivel básico).
            <br />
            En el desarrollo de mi tesis, implementé la metodología AUP-UCI , lo que me permitió fortalecer mis habilidades en la planificación y ejecución de proyectos de software. También tengo experiencia utilizando herramientas de colaboración como Git y GitHub , para un trabajo en equipo eficiente y una buena gestión efectiva de equipos de desarrollo.
            </p>
        </React.Fragment>
    );
}
