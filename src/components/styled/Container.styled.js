import styled from "styled-components";

export const StyledContainer = styled.div`
  display: grid;
  grid-template-rows:
    [header-start] minmax(10vh, 8rem) [header-end body-start] minmax(75vh, 1fr)
    [body-end footer-start] minmax(10vh, 15vh) [footer-end];
`;
