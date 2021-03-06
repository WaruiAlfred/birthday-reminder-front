import { useContext } from "react";
import { Link } from "react-router-dom";
import { FormContainer } from "../styled/forms/Form.styled";
import { StyledButton } from "../styled/forms/Button.styled";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextNumberInput } from "./utilities/FormInputTypes";
import { useHttp } from "../../hooks/use-http";
import { BarLoadingSpinner } from "./utilities/LoadingSpinner";
import ErrorMessage from "./utilities/ErrorMessage";
import { AppContext } from "../../store/appContext";

const LoginForm = () => {
  const { sendRequest, data, error, loading } = useHttp();
  const { onSetToken } = useContext(AppContext);

  return (
    <FormContainer>
      {loading && <BarLoadingSpinner loading={loading} />}
      <h3>Login</h3>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .min(2, "Must be more than 2 characters")
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          password: Yup.string()
            .min(8, "Must be at least 8 characters long")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            sendRequest("POST", "accounts/login/", values);

            if (data) {
              onSetToken(data, values.username);
            }

            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div>
            <TextNumberInput
              label="Username"
              name="username"
              type="text"
              placeholder="ProUser"
            />

            <TextNumberInput
              label="Password"
              name="password"
              type="password"
              placeholder="Your password"
            />
          </div>

          <StyledButton type="submit">Login</StyledButton>
        </Form>
      </Formik>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <p>
        Need an account? <Link to="/register">Create account</Link>
      </p>
    </FormContainer>
  );
};

export default LoginForm;
