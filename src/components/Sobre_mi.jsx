import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Popover, OverlayTrigger } from "react-bootstrap";

export function Sobre_mi() {
    const uciPopover = (
        <Popover id="uci-popover" className="shadow">
            <Popover.Body>
                <img className="object-fit-contain m-auto h-100 w-100" src="/Portafolio/uci.png" alt="UCI" id="img-uci"/>
            </Popover.Body>
        </Popover>
    );

    const habanaPopover = (
        <Popover id="habana-popover" className="shadow">
            <Popover.Body>
                <img className="h-100 w-100 object-fit-cover rounded border border-1 border-secondary-subtle shadow" src="/Portafolio/habana_maps.jpeg" alt="La Habana" id="img-habana"/>
            </Popover.Body>
        </Popover>
    );

    const inotuPopover = (
        <Popover id="inotu-popover" className="shadow">
            <Popover.Body>
                <img className="h-100 w-100 object-fit-cover m-auto rounded" src="/Portafolio/INOTU.png" alt="INOTU" id="img-inotu"/>
            </Popover.Body>
        </Popover>
    );

    return (
        <React.Fragment>
            <style>{`
                #uci-popover, #habana-popover, #inotu-popover{
                    width: 10rem;
                    height: 8rem;
                    display: flex;
                }
                #sagpn-popover{
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
            <h3 className="mt-3 w-100 text-center">Sobre Mí</h3>
            <hr className="w-100 border border-1 border-secondary" />
            <p className="text-center fs-5">
                Mi nombre es <span className="user-select-all">Adán Luis Quincoces Escalona</span>, tengo 25 años, soy graduado de <span className="user-select-all">Ingeniero en Ciencias Informáticas</span> de la 
                <OverlayTrigger trigger={['hover', 'focus', 'click']} placement="top" overlay={uciPopover}>
                    <a className="text-decoration-none" href="https://www.uci.cu/"> Universidad de las Ciencias Informáticas (UCI)</a>
                </OverlayTrigger> en 
                <OverlayTrigger trigger={['hover', 'focus', 'click']} placement="top" overlay={habanaPopover}>
                    <a className="text-decoration-none" href="https://www.bing.com/maps?q=La%20Habana&amp;satid=id.sid%3A3ca5066a-a331-c1b3-135f-1fde36da55db&amp;FORM=KC2MAP"> La Habana</a>
                </OverlayTrigger>.
            </p>
            <p className="text-center fs-5">
                Actualmente trabajo como Director de Informática en el 
                <OverlayTrigger trigger={['hover', 'focus', 'click']} placement="top" overlay={inotuPopover}>
                    <a className="text-decoration-none" href="https://www.inotu.gob.cu/es"> Insituto Nacional de Ordenamiento Territorial y Urbanismo <strong>(INOTU)</strong></a>
                </OverlayTrigger>, el cual reside en La Habana, Boyeros.
            </p>
        </React.Fragment>
    );
}
