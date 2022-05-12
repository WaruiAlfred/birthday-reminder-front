import styled from "styled-components";

export const NewUserContainerDiv = styled.div`
  max-width: 50rem;
  margin: 5% auto;
  text-align: center;
  font-weight: 300;

  p {
    margin-bottom: 2rem;
  }
`;

export const NoBirthdaysContainerDiv = styled.div`
  max-width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 70rem;
    height: 60rem;
  }

  div {
    max-width: 40rem;
    text-align: center;

    p {
      margin-bottom: 2rem;

      span {
        font-style: italic;
        font-weight: bold;
      }
    }
  }
`;
