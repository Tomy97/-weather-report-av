import React from "react";
import { Form } from "react-bootstrap";

const FormInputPassword = () => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="*******" />
    </Form.Group>
  );
};

export default FormInputPassword;
