import styled from "styled-components";

export const StyledHomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
`;

export const Description = styled.div`
  padding: 2rem;

  p {
    text-align: center;
    margin: 1rem 0;
    font-weight: 300;
    font-size: 1.8rem;
  }

  h5 {
    text-align: center;
    margin-top: 5rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Join = styled.div`
  align-self: center;
`;
