import styled from "styled-components";

export const StyledButton = styled.button`
  align-self: center;
  border-radius: 3rem;
  border: none;
  box-shadow: ${({ theme }) => theme.box_shadow_1};
  background-image: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.colors.primary_light},
    ${({ theme }) => theme.colors.primary}
  );
  color: #fff;
  font-size: 1.7rem;
  width: ${({ width }) => width || "17rem"};
  height: 4rem;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }

  &:focus {
    border: none;
    outline: ${({ theme }) => theme.colors.primary};
  }
`;
