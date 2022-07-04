import { Title, LineHr } from "../../styled-components/CardStyles";
import { Card, Container, Form } from "react-bootstrap";
import ButtonComponent from "../buttons/ButtonComponent";
import FormSelect from "../form/FormSelect";

const CardSelectZone = () => {
  return (
    <Card>
      <Container>
        <Card.Body>
          <Card.Title className="text-center">
            <Title>
              Selecciona la zona
            </Title>
            <LineHr />
          </Card.Title>
          <Form>
            <FormSelect label="Pais" placeholder="Selecciona un pais" />
          </Form>
          <ButtonComponent text="Buscar" />
        </Card.Body>
      </Container>
    </Card>
  );
};

export default CardSelectZone;
