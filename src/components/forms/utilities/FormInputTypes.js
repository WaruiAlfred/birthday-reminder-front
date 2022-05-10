import { useField } from "formik";

const errorStyles = { color: "red", fontSize: "20px" };

export const TextNumberInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={props.className}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div style={errorStyles}>{meta.error}</div>
      ) : null}
    </div>
  );
};