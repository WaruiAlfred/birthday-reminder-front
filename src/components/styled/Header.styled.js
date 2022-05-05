import styled from "styled-components";

export const StyledHeader = styled.header`
  grid-row: header-start / header-end;
  background-color: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;

  h1{
    font-family: 'Lobster', cursive;
    color: #fff;
    margin-left: 3rem;
  }
`;
