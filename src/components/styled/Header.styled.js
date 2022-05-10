import styled from "styled-components";

export const StyledHeader = styled.header`
  grid-row: header-start / header-end;
  background-color: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-family: "Lobster", cursive;
    margin-left: 3rem;
  }

  img {
    height: 100%;
    width: 20rem;
    clip-path: polygon(48% 53%, 100% 0, 100% 100%, 0 100%);
  }
`;
