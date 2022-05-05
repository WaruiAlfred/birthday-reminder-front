import styled from "styled-components";

export const StyledHeader = styled.header`
  grid-row: header-start / header-end;
  background-color: ${({ theme }) => theme.colors.primary};
`;
