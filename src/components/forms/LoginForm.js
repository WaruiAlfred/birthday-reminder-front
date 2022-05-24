import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer, StyledButton } from "../styled/forms/Form.styled";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextNumberInput } from "./utilities/FormInputTypes";
import { useHttp } from "../../hooks/use-http";
import LoadingSpinner from "./utilities/LoadingSpinner";
import ErrorMessage from "./utilities/ErrorMessage";

const LoginForm = () => {
  const { sendRequest, data, error, loading } = useHttp();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("tokenData", JSON.stringify(data));
  }, [data]);

  if(data){
    navigate("/");
  }

  return (
    <FormContainer>
      {loading && <LoadingSpinner loading={loading} />}
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
    </FormContainer>
  );
};

export default LoginForm;
