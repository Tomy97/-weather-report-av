import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  console.log(year);

  return (
    <Container fluid>
      <h1>Footer</h1>
    </Container>
  );
};

export default Footer;
