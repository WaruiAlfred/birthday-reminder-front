import { FormContainer } from "../styled/forms/Form.styled";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextNumberInput } from "./utilities/FormInputTypes";
import Button from "./utilities/Button";

const RegisterForm = () => {
  return (
    <FormContainer>
      <h4>Create Account</h4>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          userName: "",
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
            name="userName"
            type="text"
            placeholder="ProUser"
          />

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

          <Button type="submit">Create</Button>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default RegisterForm;
