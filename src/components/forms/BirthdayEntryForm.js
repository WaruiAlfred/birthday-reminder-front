import { FormContainer } from "../styled/forms/Form.styled";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextNumberInput } from "./utilities/FormInputTypes";
import Button from "./utilities/Button";

const BirthdayEntryForm = () => {
  return (
    <FormContainer>
      <h4>Input BirthDay</h4>
      <Formik
        initialValues={{
          dearOneName: "",
          dayOfBirth: "",
          monthOfBirth: "",
          yearOfBirth: "",
        }}
        validationSchema={Yup.object({
          dearOneName: Yup.string()
            .max(40, "Must be 15 characters or less")
            .required("Required"),
          dayOfBirth: Yup.number().positive().required("Required"),
          monthOfBirth: Yup.number().positive().required("Required"),
          yearOfBirth: Yup.number()
            .positive()
            .min(4, "Must be 4 characters")
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
          <TextNumberInput
            label="Dear One's Name"
            name="firstName"
            type="text"
            placeholder="John"
          />

          <p>Birthdate:</p>
          <div>
            <TextNumberInput
              label="Day"
              name="dayOfBirth"
              type="number"
              placeholder="02"
            />

            <TextNumberInput
              label="Month"
              name="monthOfBirth"
              type="number"
              placeholder="12"
            />

            <TextNumberInput
              label="Year"
              name="yearOfBirth"
              type="number"
              placeholder="1998"
            />
          </div>

          <Button type="submit">Add</Button>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default BirthdayEntryForm;
