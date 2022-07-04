import React from "react";
import { Form } from "react-bootstrap";

const FormInputEmail = () => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Usuario</Form.Label>
      <Form.Control type="email" placeholder="americavirtual@gmail.com" />
    </Form.Group>
  );
};

export default FormInputEmail;
