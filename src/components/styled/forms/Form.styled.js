import styled from "styled-components";

export const FormContainer = styled.div`
  grid-column: 2 / 3;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.grey_light_1};
  box-shadow: 0 0.7rem 1.5rem ${({ theme }) => theme.colors.grey_light_2};
  padding: 2rem 3rem;
  margin: 2rem auto;
  width: ${({ width }) => width || "40rem"};
  height: ${({ height }) => height || "40rem"};
`;
