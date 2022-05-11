import { useField } from "formik";
import { StyledInputAndLabel } from "../../styled/forms/Form.styled";

const errorStyles = { color: "red", fontSize: "15px" };

export const TextNumberInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <StyledInputAndLabel>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div style={errorStyles}>{meta.error}</div>
      ) : null}
    </StyledInputAndLabel>
  );
};
