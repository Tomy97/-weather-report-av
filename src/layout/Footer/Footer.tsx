import { Container } from "react-bootstrap";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container fluid className="bg-av">
      <footer className="text-center text-white">
        <div className="text-center p-3">
          © {year} - Derechos reservados por Tomas Pandullo
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
