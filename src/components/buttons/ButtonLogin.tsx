import { useState } from "react";
import { Button } from "react-bootstrap";
import ModalLogin from "../modal/ModalLogin";
import "./Buttons.scss";

const ButtonLogin = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(true);
  return (
    <>
      <Button className="text-uppercase btn-av fw-bold" onClick={handleClose}>
        Iniciar Sesion
        <i className="bi bi-person-fill mx-1"></i>
      </Button>
      <ModalLogin show={show} setShow={setShow} />
    </>
  );
};

export default ButtonLogin;
