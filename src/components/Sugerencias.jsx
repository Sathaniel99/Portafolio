import React, { useState, useEffect } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import {
  BsSendFill,
  BsEnvelopeAtFill,
  BsTextarea,
  BsFileText,
  BsTextLeft,
} from "react-icons/bs";
import { Hr } from "./hr";

export function Sugerencias() {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [texto, setTexto] = useState("");
  const [sugerencia, setSugerencia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensaje = `Hola soy ${texto}\n , escribo por mi Sugerencia: ${sugerencia}`;
    window.open(`https://wa.me/+54528530?text=${mensaje}`, "_blank");
  };

  useEffect(() => {
    if (isChecked) {
      setEmail("Su forma de identificarlo...");
    } else {
      setEmail("Su Email...");
    }
  }, [isChecked]);

  return (
    <React.Fragment>
      <h3 className="mt-3 w-100 text-center user-select-none">Sugerencias</h3>
      <Hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 w-100 px-1" controlId="id_email">
          <InputGroup className="w-100">
            <InputGroup.Text id="email-addon">
              <BsEnvelopeAtFill
                style={{ display: isChecked ? "none" : "block" }}
              />
              <BsTextLeft style={{ display: isChecked ? "block" : "none" }} />
            </InputGroup.Text>
            <Form.Control
              name="email"
              type={isChecked ? "text" : "email"}
              placeholder={email}
              aria-label="Email"
              aria-describedby="email-addon"
              required
              onChange={(e) => setTexto(e.target.value)}
            />
            <InputGroup.Text>
              <Form.Check
                type="checkbox"
                id="checkbox-comments"
                className="mt-0"
                aria-label="Checkbox for comments"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3 px-1" controlId="id_comments">
          <InputGroup className="flex-column mb-2">
            <InputGroup.Text className="text-center text-muted user-select-none input-group-text">
              Sugerencia:
            </InputGroup.Text>
            <Form.Control
              as="textarea"
              name="comments"
              rows={10}
              className="w-auto"
              placeholder="Sugiera..."
              onChange={(e) => setSugerencia(e.target.value)}
              required
            />
          </InputGroup>
        </Form.Group>
        <div className="d-flex flex-column align-items-center gap-1 user-select-none">
          <Button variant="outline-success" type="submit">
            <BsSendFill /> Enviar
          </Button>
          <em style={{ fontSize: ".9rem" }}>Enviar via Whatsapp</em>
        </div>
      </Form>
    </React.Fragment>
  );
} 
