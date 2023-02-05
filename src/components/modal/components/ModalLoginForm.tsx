import { useState } from "react";
import { Form } from "formik";
import ButtonComponent from "@Components/buttons/ButtonComponent";
import FormInputEmail from "@Components/form/FormInputEmail";
import FormInputPassword from "@Components/form/FormInputPassword";

export const ModalLoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  return (
    <Form>
      <FormInputEmail />
      <FormInputPassword />
      <ButtonComponent text="Iniciar sesión" />
    </Form>
  );
};

export default ModalLoginForm;
