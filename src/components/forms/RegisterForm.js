import {
  FormContainer,
  RegisterFormInputs,
  StyledButton,
} from "../styled/forms/Form.styled";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextNumberInput } from "./utilities/FormInputTypes";

const RegisterForm = () => {
  return (
    <FormContainer width="65rem">
      <h3>Create Account</h3>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          userName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(8, "Must be at least 8 characters long")
            .required("Required"),
          passwordConfirmation: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords do not match"
          ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
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
                  name="firstName"
                  type="text"
                  placeholder="John"
                />

                <TextNumberInput
                  label="Last Name"
                  name="lastName"
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
                  name="passwordConfirmation"
                  type="password"
                  placeholder="Confrim password"
                />
              </div>
            </RegisterFormInputs>
          </div>

          <StyledButton type="submit">Create</StyledButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default RegisterForm;
