import { Card, Col, Container, Row } from "react-bootstrap";
import { Title } from "../../styled-components/CardStyles";

const CardWeatherReport = () => {
  return (
    <Card>
      <Container>
        <Card.Title>
          <Title className="text-center">Reporte del tiempo</Title>
        </Card.Title>
        <Card.Body>
          <Row>
            <Col sm={12} md={6}>
              <Row>
                <Col md={12}>
                  <small className="text-muted">
                    Argentina
                  </small>
                </Col>
                <Col md={12}>
                  <span className="text-muted">
                    Ciudad de Buenos Aires
                  </span>
                </Col>
              </Row>
              <Row>
                
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
