import styled from "styled-components";

export const FormContainer = styled.div`
  grid-column: 2 / 3;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.grey_light_1};
  box-shadow: ${({ theme }) => theme.box_shadow_1};
  padding: 2rem 3rem;
  margin: 2rem auto;
  width: ${({ width }) => width || "40rem"};
  height: ${({ height }) => height || "40rem"};

  h3 {
    text-align: center;
    font-family: "Lobster", cursive;
  }

  Form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      font-weight: 300;
      font-size: 2rem;
      color: #000;
      margin-left: 1.4rem;
    }
  }

  p {
    font-weight: 300;
    font-size: 1.7rem;
    text-align: center;
    margin-top: 2rem;
  }
`;

// Form Inputs
export const StyledInputAndLabel = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  label {
    font-weight: 300;
    font-size: 1.7rem;
    color: #000;
    margin-left: 1.4rem;
  }

  input {
    border: none;
    border-radius: 2rem;
    box-shadow: ${({ theme }) => theme.box_shadow_1};
    padding: 1rem;

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.primary_light};
    }
  }
`;

// RegisterForm
export const RegisterFormInputs = styled.div`
  display: flex;

  div {
    width: 93%;
  }
`;

//BirthdayEntryForm
export const BirthdateInputs = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    width: 90%;
  }
`;
