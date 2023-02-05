import React, { useState } from "react";
import { Container, Form, Modal } from "react-bootstrap";
import { ButtonI } from "../../interfaces/Button.interface";
import ButtonComponent from "../buttons/ButtonComponent";
import FormInputEmail from "../form/FormInputEmail";
import FormInputPassword from "../form/FormInputPassword";

const ModalLogin = ({ show, setShow }: ButtonI) => {
  return (
    <Modal show={show} onHide={() => setShow(false)} size="sm">
      <Modal.Body>
        <Container>
          
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ModalLogin;
