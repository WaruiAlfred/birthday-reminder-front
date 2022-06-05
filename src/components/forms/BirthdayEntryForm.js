import { useNavigate } from "react-router-dom";
import {
  BirthdateInputs,
  FormContainer,
  StyledButton,
} from "../styled/forms/Form.styled";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextNumberInput } from "./utilities/FormInputTypes";
import { useHttp } from "../../hooks/use-http";
import {BarLoadingSpinner} from "./utilities/LoadingSpinner";
import ErrorMessage from "./utilities/ErrorMessage";

const BirthdayEntryForm = () => {
  const { sendRequest, data, error, loading } = useHttp();
  const navigate = useNavigate();

  return (
    <FormContainer width="65rem">
      {loading && <BarLoadingSpinner loading={loading} />}
      <h3>Input BirthDay</h3>
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
            const body = {
              friends_name: values.dearOneName,
              year_of_birth: values.yearOfBirth,
              month_of_birth: values.monthOfBirth,
              day_of_birth: values.dayOfBirth,
            };
            sendRequest("POST", "birthdays/", body);

            navigate("/birthdays");

            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div>
            <TextNumberInput
              label="Dear One's Name"
              name="dearOneName"
              type="text"
              placeholder="John Doe"
            />

            <p>Birthdate:</p>
            <BirthdateInputs>
              <div>
                <TextNumberInput
                  label="Day"
                  name="dayOfBirth"
                  type="number"
                  placeholder="02"
                />
              </div>

              <div>
                <TextNumberInput
                  label="Month"
                  name="monthOfBirth"
                  type="number"
                  placeholder="12"
                />
              </div>

              <div>
                <TextNumberInput
                  label="Year"
                  name="yearOfBirth"
                  type="number"
                  placeholder="1998"
                />
              </div>
            </BirthdateInputs>
          </div>

          <StyledButton type="submit">Add</StyledButton>
        </Form>
      </Formik>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormContainer>
  );
};

export default BirthdayEntryForm;
