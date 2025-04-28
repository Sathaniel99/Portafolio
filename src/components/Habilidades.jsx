import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Habilidades.css";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


export function Habilidades() {
  const cardBaseClass =
    "card-tecn text-decoration-none shadow m-1 p-2 border border-1 border-secondary rounded-3 text-center d-flex flex-column";

  const data = {
    Frontend: [
      {
        name: "HTML5",
        img: "/portfolio/HTML5.png",
        url: "https://developer.mozilla.org/es/docs/Web/HTML",
        class: `${cardBaseClass} bg-danger-subtle`,
      },
      {
        name: "CSS3",
        img: "/portfolio/CSS3.png",
        url: "https://developer.mozilla.org/es/docs/Web/CSS",
        class: `${cardBaseClass} bg-primary-subtle`,
      },
      {
        name: "JavaScript",
        img: "/portfolio/JS.png",
        url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
        class: `${cardBaseClass} bg-warning-subtle`,
      },
      {
        name: "Bootstrap 5.3",
        img: "/portfolio/Bootstrap.png",
        url: "https://getbootstrap.com/",
        class: `${cardBaseClass} bg-primary-subtle`,
      },
      {
        name: "Tailwind CSS",
        img: "/portfolio/Tailwind_CSS.png",
        url: "https://v2.tailwindcss.com/",
        class: `${cardBaseClass} bg-info-subtle`,
      },
    ],
    Backend: [
      {
        name: "Python",
        img: "/portfolio/python.png",
        url: "https://www.python.org/",
        class: `${cardBaseClass} bg-success-subtle`,
      },
      {
        name: "JAVA",
        img: "/portfolio/java.png",
        url: "https://www.java.com/",
        class: `${cardBaseClass} bg-info-subtle`,
      },
    ],
    Frameworks: [
      {
        name: "Django",
        img: "/portfolio/django.png",
        url: "https://www.djangoproject.com/",
        class: `${cardBaseClass} bg-success-subtle`,
      },
      {
        name: "React",
        img: "/portfolio/react.svg",
        url: "https://es.react.dev/",
        class: `${cardBaseClass} bg-info-subtle`,
      },
      {
        name: "Nextjs",
        img: "/portfolio/nextjs.svg",
        url: "https://nextjs.org/",
        class: `${cardBaseClass} bg-dark-subtle`,
      },
    ],
    BD: [
      {
        name: "PostgreSQL",
        img: "/portfolio/postgreesql.svg",
        url: "https://www.postgresql.org/",
        class: `${cardBaseClass} bg-info-subtle`,
      },
      {
        name: "SQLite",
        img: "/portfolio/sqlite.png",
        url: "https://www.sqlite.org/",
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
        <div className="h-100 w-100 d-flex overflow-hidden">
          <img
            className="object-fit-contain w-100 m-auto"
            src={src}
            alt={alt}
            loading="lazy"
          />
        </div>
      </a>
    </OverlayTrigger>
  );
}
