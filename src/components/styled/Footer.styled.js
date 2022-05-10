import styled from "styled-components";

export const StyledFooter = styled.footer`
  grid-row: footer-start / footer-end;
  background-color: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: space-around;

  p:nth-child(2) {
    font-style: italic;
    font-size: 1.8rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;

  div {
    a {
      &:not(:last-child) {
        margin-right: 2rem;
      }

      &:hover {
        border-bottom: 0.6rem solid #fff;
      }
    }
  }
`;
