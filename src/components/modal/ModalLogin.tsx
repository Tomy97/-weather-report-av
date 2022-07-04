import React, { useState } from "react";
import PropTypes from "prop-types";
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
          <Form>
            <FormInputEmail />
            <FormInputPassword />
            <ButtonComponent text="Iniciar sesión" />
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

ModalLogin.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default ModalLogin;
