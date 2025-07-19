import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Habilidades.css";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from "react";
import { Spinner } from "react-bootstrap";


export function Habilidades() {
  const cardBaseClass =
    "card-tecn text-decoration-none shadow m-1 p-2 border border-1 border-secondary rounded-3 text-center d-flex flex-column";

  const data = {
    Frontend: [
      {
        name: "HTML5",
        img: "/Portafolio/HTML5.webp",
        url: "https://developer.mozilla.org/es/docs/Web/HTML",
        class: `${cardBaseClass} bg-danger-subtle`,
      },
      {
        name: "CSS3",
        img: "/Portafolio/CSS3.webp",
        url: "https://developer.mozilla.org/es/docs/Web/CSS",
        class: `${cardBaseClass} bg-primary-subtle`,
      },
      {
        name: "JavaScript",
        img: "/Portafolio/JS.webp",
        url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
        class: `${cardBaseClass} bg-warning-subtle`,
      },
      {
        name: "Bootstrap 5.3",
        img: "/Portafolio/Bootstrap.webp",
        url: "https://getbootstrap.com/",
        class: `${cardBaseClass} bg-primary-subtle`,
      },
      {
        name: "Tailwind CSS",
        img: "/Portafolio/Tailwind_CSS.webp",
        url: "https://v2.tailwindcss.com/",
        class: `${cardBaseClass} bg-info-subtle`,
      },
    ],
    Backend: [
      {
        name: "Python",
        img: "/Portafolio/python.webp",
        url: "https://www.python.org/",
        class: `${cardBaseClass} bg-success-subtle`,
      },
      {
        name: "JAVA",
        img: "/Portafolio/java.webp",
        url: "https://www.java.com/",
        class: `${cardBaseClass} bg-info-subtle`,
      },
    ],
    Frameworks: [
      {
        name: "Django",
        img: "/Portafolio/django.webp",
        url: "https://www.djangoproject.com/",
        class: `${cardBaseClass} bg-success-subtle`,
      },
      {
        name: "React",
        img: "/Portafolio/react.webp",
        url: "https://es.react.dev/",
        class: `${cardBaseClass} bg-info-subtle`,
      },
      {
        name: "Nextjs",
        img: "/Portafolio/nextjs.svg",
        url: "https://nextjs.org/",
        class: `${cardBaseClass} bg-dark-subtle`,
      },
    ],
    BD: [
      {
        name: "PostgreSQL",
        img: "/Portafolio/postgreesql.webp",
        url: "https://www.postgresql.org/",
        class: `${cardBaseClass} bg-info-subtle`,
      },
      {
        name: "SQLite",
        img: "/Portafolio/sqlite.webp",
        url: "https://www.sqlite.org/",
        class: `${cardBaseClass} bg-primary-subtle`,
      },
    ],
    Miscelaneas: [
      {
        name: "Github",
        img: "/Portafolio/github.webp",
        url: "https://github.com/",
        class: `${cardBaseClass} bg-secondary-subtle`,
      },
      {
        name: "Vite",
        img: "/Portafolio/vite.webp",
        url: "https://vite.dev/",
        class: `${cardBaseClass} bg-primary-subtle`,
      },
    ],
  };

  return (
    <React.Fragment>
      <h3 className="mt-3 w-100 text-center">Habilidades</h3>
      <hr className="w-100 border border-1 border-secondary" />
      {Object.entries(data).map(([category, items]) => (
        <div className="container" key={category}>
          <h3 className="text-center">{category}</h3>
          <div className="d-flex flex-wrap justify-content-around">
            {items.map((item) => (
              <Card
                key={item.name}
                tooltipTitle={item.name}
                className={item.class}
                name={item.name}
                src={item.img}
                alt={item.name}
                url={item.url}
              />
            ))}
          </div>
          <hr className="w-100 border border-1 border-secondary" />
        </div>
      ))}
    </React.Fragment>
  );
}

function Card({ tooltipTitle, className, name, src, alt, url }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip>{tooltipTitle}</Tooltip>}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        role="button"
        aria-label={`Más información sobre ${name}`}
      >
        <span className="text-muted d-block border-bottom border-secondary border-1 p-1">
          {name}
        </span>
        <div className="h-100 w-100 d-flex overflow-hidden position-relative">
          {isLoading && (
            <div className="position-absolute top-50 start-50 translate-middle">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          <img
            className={`object-fit-contain w-100 m-auto ${isLoading ? 'invisible' : ''}`}
            src={src}
            alt={alt}
            onLoad={handleImageLoad}
            loading="lazy"
          />
        </div>
      </a>
    </OverlayTrigger>
  );
}