import styled from "styled-components";

export const Wrapper = styled.div`
  font-weight: 300;

  .loading-spinner {
    width: 9rem;
    margin: 0 auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .content > p {
    text-align: center;
    margin: 2rem 0;
  }

  .content > h5 {
    text-align: center;
    margin: 1rem 0;
  }

  .birthdays {
    background-color: ${({ theme }) => theme.content_bg};
    border-radius: 1rem;
    padding: 3rem;
    margin-bottom: 2rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    gap: 1rem;
  }

  .birthday {
    background-color: #fff;
    border-radius: 0.9rem;
    padding: 2rem;
    max-width: 70rem;

    &__header{
      display: flex;
      justify-content: space-between;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;

    @media screen and (min-width: 55em) {
      grid-column: 2 / 3;
    }
  }
`;
