import { Title, LineHr } from "../../styled-components/CardStyles";
import { Card, Container, Form } from "react-bootstrap";
import ButtonComponent from "../buttons/ButtonComponent";
import FormSelect from "../form/FormSelect";

const CardSelectZone = () => {
  const handleClick = (e: any) => {
    e.preventDefault();
    
    console.log("Click");
  };
  return (
    <Card>
      <Container>
        <Card.Body>
          <Card.Title className="text-center">
            <Title>Selecciona una zona</Title>
            <LineHr />
          </Card.Title>
          <Form onClick={handleClick}>
            <FormSelect label="Pais" placeholder="Selecciona un pais" />
            <FormSelect label="Ciudad" placeholder="Selecciona una ciudad" />
            <ButtonComponent text="Buscar" />
          </Form>
        </Card.Body>
      </Container>
    </Card>
  );
};

export default CardSelectZone;
