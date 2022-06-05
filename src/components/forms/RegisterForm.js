import { useNavigate, Link } from "react-router-dom";
import {
  FormContainer,
  RegisterFormInputs,
  StyledButton,
} from "../styled/forms/Form.styled";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextNumberInput } from "./utilities/FormInputTypes";
import { useHttp } from "../../hooks/use-http";
import {BarLoadingSpinner} from "./utilities/LoadingSpinner";
import ErrorMessage from "./utilities/ErrorMessage";

const RegisterForm = () => {
  const { sendRequest, data, error, loading } = useHttp();
  const navigate = useNavigate();

  if (data) {
    console.log(data)
    navigate("/login");
  }

  return (
    <FormContainer width="65rem">
      {loading && <BarLoadingSpinner loading={loading} />}
      <h3>Create Account</h3>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          username: "",
          email: "",
          password: "",
          password2: "",
        }}
        validationSchema={Yup.object({
          first_name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          last_name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          username: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(8, "Must be at least 8 characters long")
            .required("Required"),
          password2: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords do not match"
          ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            sendRequest("POST", "accounts/register/", values);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div>
            <RegisterFormInputs>
              <div>
                <TextNumberInput
                  label="First Name"
                  name="first_name"
                  type="text"
                  placeholder="John"
                />

                <TextNumberInput
                  label="Last Name"
                  name="last_name"
                  type="text"
                  placeholder="Doe"
                />

                <TextNumberInput
                  label="Username"
                  name="username"
                  type="text"
                  placeholder="ProUser"
                />
              </div>

              <div>
                <TextNumberInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="joe@gmail.com"
                />

                <TextNumberInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Your password"
                />

                <TextNumberInput
                  label="Confrim Password"
                  name="password2"
                  type="password"
                  placeholder="Confirm password"
                />
              </div>
            </RegisterFormInputs>
          </div>

          <StyledButton type="submit">Create</StyledButton>
        </Form>
      </Formik>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </FormContainer>
  );
};

export default RegisterForm;
