import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { ImageComponent } from "../../components/imageComponent";
import ButtonLogin from "../../components/buttons/ButtonLogin";
import "./Navbar.scss";
const NavbarComponent = () => {
  return (
    <Navbar className="bg-av">
      <Container className="justify-content-between">
        <ImageComponent />
        <ButtonLogin />
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
