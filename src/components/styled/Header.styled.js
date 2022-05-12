import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  grid-row: header-start / header-end;
  background-color: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    /* margin-left: 3rem; */

    h1 {
      font-family: "Lobster", cursive;
      margin-left: 3rem;
    }
  }

  img {
    height: 100%;
    width: 20rem;
    clip-path: polygon(48% 53%, 100% 0, 100% 100%, 0 100%);
  }
`;

export const StyledSideMenu = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 0.9;
  height: 100vh;
  width: ${({ width }) => width || "25rem"};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  button {
    align-self: flex-end;
    border: none;
    background: none;
    color: currentColor;
    font-size: 5rem;
    margin: 3rem;

    &:hover {
      cursor: pointer;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledLink = styled(Link)`
  color: currentColor;
  text-decoration: none;
  font-family: "Lobster", cursive;
  font-size: 2.2rem;
  position: relative;
  z-index: 20;

  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0.3rem;
    width: 0.3rem;
    background-color: ${({ theme }) => theme.colors.grey_light_2};
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s;
  }

  &:hover::before {
    transform: scaleY(1);
    width: 100%;
  }
`;
