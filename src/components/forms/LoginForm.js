import { FormContainer,StyledButton } from "../styled/forms/Form.styled";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextNumberInput } from "./utilities/FormInputTypes";

const LoginForm = () => {
  return (
    <FormContainer>
      <h3>Login</h3>
      <Formik
        initialValues={{
          userName: "",
          password: "",
        }}
        validationSchema={Yup.object({
          userName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          password: Yup.string()
            .min(8, "Must be at least 8 characters long")
            .required("Required"),
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
            <TextNumberInput
              label="Username"
              name="userName"
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
    </FormContainer>
  );
};

export default LoginForm;
