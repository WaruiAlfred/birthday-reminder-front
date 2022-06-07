import { ErrorMessageDiv } from "../../styled/forms/Messages.styled";

const ErrorMessage = ({ children }) => {
  return <ErrorMessageDiv>{children}</ErrorMessageDiv>;
};

export default ErrorMessage;
