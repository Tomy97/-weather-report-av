import { Card, Col, Container, Row } from "react-bootstrap";
import {
  LineHr,
  Title,
  TitlesDay,
  TitlesTest,
} from "../../styled-components/CardStyles";

const CardWeatherReport = () => {
  return (
    <Card>
      <Container>
        <Card.Body>
          <Card.Title>
            <Title className="text-center">Reporte del tiempo</Title>
            <LineHr />
          </Card.Title>
          <Row>
            <Col sm={12} md={6}>
              <Row>
                <Col md={12}>
                  <small className="text-muted">Argentina</small>
                </Col>
                <Col md={12}>
                  <span className="text-muted">Ciudad de Buenos Aires</span>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={10}>
                  <TitlesDay>Viernes</TitlesDay>
                </Col>
                <Col sm={12} md={10}>
                  <TitlesTest>Soleado</TitlesTest>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={6}></Col>
          </Row>
        </Card.Body>
      </Container>
    </Card>
  );
};

export default CardWeatherReport;
