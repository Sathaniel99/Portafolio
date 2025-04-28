import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Sobre_mi } from "./components/Sobre_mi.jsx";
import { Habilidades } from "./components/Habilidades.jsx";
import { Proyectos } from "./components/Proyectos.jsx";
import { Contacto } from "./components/Contacto.jsx";
import { Sugerencias } from "./components/Sugerencias.jsx";
import Image from "react-bootstrap/Image";
import { Hr } from "./components/hr.jsx";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Button, Offcanvas } from "react-bootstrap";
import { LuSquareMenu } from "react-icons/lu";
import "./App.css";

export function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="high-card border border-1 border-secondary overflow-hidden position-relative m-auto w-100 rounded shadow bg-bg-body-secondary d-flex">
      <Button
        variant="outline-secondary"
        onClick={handleShow}
        className="m-3 position-absolute top-0 start-0 d-md-none"
      >
        <LuSquareMenu />
      </Button>
      <Tab.Container id="left-tabs-example" defaultActiveKey="about">
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav variant="pills" className="flex-column h-100 p-1 align-items-center">
              <Nav.Item className="w-100 pb-2 p-4">
                <Image
                  src="/portfolio/user.jpg"
                  roundedCircle
                  className="img-fluid shadow border border-2 border-bg-secondary-subtle p-1"
                />
              </Nav.Item>
              <Nav.Item>
                <Hr />
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="about" className="text-center width-15" onClick={handleClose}>
                  Sobre Mi
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="hablities" className="text-center width-15" onClick={handleClose}>
                  Habilidades
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="projects" className="text-center width-15" onClick={handleClose}>
                  Proyectos
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="contact" className="text-center width-15" onClick={handleClose}>
                  Contacto
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sugerenc" className="text-center width-15" onClick={handleClose}>
                  Sugerencias
                </Nav.Link>
              </Nav.Item>
            </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      
        <Row className="py-4 h-100 w-100 m-auto">
          <Col sm={4} className="border-end border-1 border-secondary h-100 d-none d-md-block" id="sideLeftBar">
            
            <Nav variant="pills" className="flex-column h-100 p-1 gap-2">
              <Nav.Item className="w-100 pb-2 p-4">
                <Image
                  src="/portfolio/user.jpg"
                  roundedCircle
                  className="img-fluid shadow border border-2 border-bg-secondary-subtle p-1"
                />
              </Nav.Item>
              <Nav.Item>
                <Hr />
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="about" className="text-center">
                  Sobre Mi
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="hablities" className="text-center">
                  Habilidades
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="projects" className="text-center">
                  Proyectos
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="contact" className="text-center">
                  Contacto
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sugerenc" className="text-center">
                  Sugerencias
                </Nav.Link>
              </Nav.Item>
            </Nav>

          </Col>
          <Col className="h-100">
            <Tab.Content className="overflow-auto h-100">
              <Tab.Pane eventKey="about" className="h-100 text-center">
                <Sobre_mi />
              </Tab.Pane>
              <Tab.Pane
                eventKey="hablities"
                className="h-100 text-center user-select-none"
              >
                <Habilidades />
              </Tab.Pane>
              <Tab.Pane
                eventKey="projects"
                className="h-100 text-center lh-sm user-select-none"
              >
                <Proyectos />
              </Tab.Pane>
              <Tab.Pane
                eventKey="contact"
                className="h-100 text-center user-select-none"
              >
                <Contacto />
              </Tab.Pane>
              <Tab.Pane
                eventKey="sugerenc"
                className="h-100 text-center w-100 position-relative"
              >
                <Sugerencias />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
