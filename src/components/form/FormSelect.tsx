import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

interface PropsI {
  label: string;
  placeholder: string;
  items?: any[];
}
const FormSelect = ({ label, placeholder, items }: PropsI) => {
  const data = [
    {
      id: 1,
      name: "Pais 1",
    },
    {
      id: 2,
      name: "Pais 2",
    },
    {
      id: 3,
      name: "Pais 3",
    },
  ];
  const handleClick = (e: any) => {
    const selected = e.target.value;
    console.log(selected);
  };
  return (
    <Form.Group className="mb-3">
      <Form.Label> {label} </Form.Label>
      <Form.Select onClick={handleClick}>
        <option disabled selected hidden className="text-muted">
          {placeholder}
        </option>
        {data?.map((item) => (
          <option key={item.id} value={item.id} >
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
