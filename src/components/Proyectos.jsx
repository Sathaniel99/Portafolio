import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Hr } from "./hr";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { FaEye } from "react-icons/fa6";
import { Spinner } from "react-bootstrap";
import { useState } from "react";

const ProjectCard = ({ 
  name,
  description,
  img,
  repoUrl,
  technologies
}) => {
  const popover = (
    <Popover id={`${img}-popover`} className="shadow rounded">
      <Popover.Body>
        <img 
          className="object-fit-contain m-auto h-100 w-100" 
          src={`/Portafolio/${img}.webp`} 
          alt={name}
          id={`img-${img}`}
        />
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="border border-2 border-secondary-subtle rounded p-3 bg-body-tertiary shadow-sm my-3">
      <div className="d-flex justify-content-between">
        <OverlayTrigger trigger={['hover', 'focus', 'click']} placement="top" overlay={popover}>
          <div className="m-0 py-1 cursor-pointer d-flex align-items-center gap-2">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo mr-1 color-fg-muted">
              <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
            </svg>
            <h5 className="m-0">{name}</h5>
            <FaEye/>
          </div>
        </OverlayTrigger>
        <button 
          className="btn btn-outline-secondary py-1 d-flex align-items-center gap-2" 
          onClick={() => window.open(repoUrl)}
        >
          <p className="m-0">Repositorio</p>
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-arrow-up-right">
            <path d="M4.53 4.75A.75.75 0 0 1 5.28 4h6.01a.75.75 0 0 1 .75.75v6.01a.75.75 0 0 1-1.5 0v-4.2l-5.26 5.261a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L9.48 5.5h-4.2a.75.75 0 0 1-.75-.75Z"></path>
          </svg>
        </button>
      </div>
      <Hr />
      <p className="text-start lh-1">
        {description}
      </p>
      <Hr />
      <div className="d-flex flex-row flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <div key={index} className="d-flex gap-1 align-items-center">
            <span 
              className={`rounded-circle border border-1 border-secondary-subtle glow-pulse ${tech.color}`}
              style={{ 
                width: '.8rem', 
                height: '.8rem'
              }}
            ></span>
            <p className="m-0">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export function Proyectos() {
    const [isLoading, setIsLoading] = useState(true);
      const handleImageLoad = () => {
        setIsLoading(false);
    };
    const projects = [
        {
            name: "SAGPN",
            img: "sagpn",
            description: "\"Sistema Automatizado de Gestión de Problemas y Necesidades\" de una empresa mediante la creacion de Tickets dirigido principalmente a temas Informáticos-Técnicos.",
            repoUrl: "https://github.com/Sathaniel99/SAGPN",
            technologies: [
                { name: "Django", color: "bg-success" },
                { name: "Bootstrap", color: "bg-violet" },
                { name: "SQLite", color: "bg-secondary" },
                { name: "HTMX", color: "bg-green-grey" },
                { name: "HighCharts", color: "bg-primary" }
            ]
        },
        {
            name: "Contador",
            img: "contador",
            description: "Un contador simple para dos variables (P y S).",
            repoUrl: "https://github.com/Sathaniel99/Contador",
            technologies: [
                { name: "Python", color: "bg-blue" },
                { name: "Qt", color: "bg-success" },
            ]
        },
        {
            name: "PassGen",
            img: "passgen",
            description: "Generador de Contraseñas Seguras con Toast.",
            repoUrl: "https://github.com/Sathaniel99/PassGen",
            technologies: [
                { name: "HTML", color: "bg-orange" },
                { name: "CSS", color: "bg-primary" },
                { name: "JavaScript", color: "bg-warning" },
                { name: "Bootstrap", color: "bg-violet" }
            ]
        },
        {
          name: "Mapa de Cuba",
          img: "mapa-cuba",
          description: "Mapa cubano descriptivo por provincias.",
          repoUrl: "https://github.com/Sathaniel99/cuba-maps",
          technologies: [
              { name: "HTML", color: "bg-orange" },
              { name: "CSS", color: "bg-violet" },
              { name: "JavaScript", color: "bg-warning" },
              { name: "TypeScript", color: "bg-primary" },
              { name: "React", color: "bg-cyan" },
          ]
        },
        {
          name: "Tablero Yu-Gi-Oh!",
          img: "yugi-field",
          description: "Estilo visual de cada tablero de Yu-Gi-Oh!, se puede visualizar cada versión de este tipo.",
          repoUrl: "https://sathaniel99.github.io/fields-yugioh",
          technologies: [
              { name: "HTML", color: "bg-orange" },
              { name: "CSS", color: "bg-violet" },
              { name: "JavaScript", color: "bg-warning" },
              { name: "Bootstrap", color: "bg-violet"}
          ]
        },
      ];

  return (
    <React.Fragment>
        <h3 className="mt-3 w-100">Proyectos</h3>
        <Hr/>
        <p className="">
            Actualmente me encuentro trabajando en un proyecto para mi empresa, llamado Sistema Automatizado de Gestión y Control (SAGC) en el cual
            gestiono lo relacionado con la Ciberseguridad, Modularidad, Diseño de interfaces y Mapas Catastrales.
        </p>
        <div className="position-relative container">
            {isLoading && (
                <div className="position-absolute top-50 start-50 translate-middle">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
                )}
                <img className={`img-fluid rounded-2 shadow border border-1 border-secondary ${isLoading ? 'invisible' : ''}`}
                onLoad={handleImageLoad}
                loading="lazy"
                src="/Portafolio/website.webp" alt="Web SAGC"/>
        </div>
        <p className="fw-light fst-italic fs-6 lh-1 mt-1">Web en desarrollo.</p>
        <p className="">
          Dicha web gestiona y controla los tramites y las ilegalidades que ocurren a nivel nacional, asi como todo el proceso y toma de decisiones de estos.
        </p>
        <Hr />
                
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            img={project.img}
            description={project.description}
            repoUrl={project.repoUrl}
            technologies={project.technologies}
          />
        ))}

        <Hr />
    </React.Fragment>
  );
}