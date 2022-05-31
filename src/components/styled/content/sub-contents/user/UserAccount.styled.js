import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 1rem;
  background: transparent;
  font-weight: 300;

  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;

  .profile-pic{
    align-self: center;
  }

  .user-details{
    margin: 1.5rem 8rem;
    padding: 2rem;
    display: flex;
    justify-content: space-between;

    &__detail{
      display: flex;
      align-items: center;

      &__identifier{
        font-weight: 700;
        margin-right: .8rem;
      }

      &__data{
        background-color: ${({theme}) => theme.colors.grey_light_1};
        width: 20rem;
        border-radius: 1rem;
        padding: .7rem;
        text-align: center;
      }

      &:not(:last-child){
        margin-bottom: 2rem;
      }
    }
  }
`;

export const StyledAccLink = styled(Link)`
  align-self: flex-end;
  margin-right: 9rem;
`
