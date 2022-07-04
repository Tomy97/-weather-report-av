import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { ButtonI } from "../../interfaces/Button.interface";
import "./Buttons.scss";

const ButtonComponent = ({ text }: ButtonI) => {
  return (
    <div className="d-grid gap-2">
      <Button className="btn-av text-uppercase fw-bold mb-2">{text}</Button>
    </div>
  );
};

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonComponent;
