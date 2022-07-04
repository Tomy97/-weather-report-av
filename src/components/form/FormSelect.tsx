import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

interface PropsI {
  label: string;
  placeholder: string;
  items?: any[];
}
const FormSelect = ({ label, placeholder, items }: PropsI) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label> {label} </Form.Label>
      <Form.Select>
        <option value="" disabled selected hidden className="text-muted">
          {placeholder}
        </option>
        {items?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

FormSelect.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  items: PropTypes.array,
};

export default FormSelect;
