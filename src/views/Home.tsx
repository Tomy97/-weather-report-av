import { Title } from "../styled-components/CardStyles";
import { Col, Row } from "react-bootstrap";
import CardSelectZone from "../components/cards/CardSelectZone";
import CardWeatherReport from "../components/cards/CardWeatherReport";
import "./Home.scss";
const Home = () => {
  return (
    <div>
      <h2 className="text-uppercase text-center mt-4">
        <Title>
          Servicio del clima
        </Title>
      </h2>
      <hr className="linea mb-3" />
      <Row>
        <Col sm={12} md={6}>
          <CardSelectZone />
        </Col>
        <Col sm={12} md={6}>
          <CardWeatherReport />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
