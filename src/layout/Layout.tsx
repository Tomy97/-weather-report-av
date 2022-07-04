import Home from "../views/Home";
import { Container } from "react-bootstrap";
import Footer from "./Footer/Footer";
import NavbarComponent from "./Navbar/NavbarComponent";

export const Layout = () => {
  return (
    <>
      <NavbarComponent />
      <Container>
        <Home />
      </Container>
      <Footer />
    </>
  );
};
