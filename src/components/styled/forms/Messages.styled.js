import styled from "styled-components";

// Error Message Div
export const ErrorMessageDiv = styled.div`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  border: none;
  margin: 1.5rem 0;
  background-color: #f00000;
  color: #fff;
  text-align: center;
  padding: 1rem;
`;

// Success Message Div
export const SuccessMessageDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: #77dd77;
  color: #fff;

  button {
    border: none;
    background: none;
    font-size: 3rem;
    font-weight: bold;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      border: none;
      outline: ${({ theme }) => theme.colors.primary};
    }
  }
`;
