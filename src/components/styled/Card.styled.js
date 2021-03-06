import styled from "styled-components";

const Card = styled.div`
  padding: 2rem;
  margin: 0.6rem auto;
  border-radius: 2rem;
  box-shadow: 1rem 1rem 1rem ${({ theme }) => theme.colors.grey_light_2};
  width: ${({ width }) => width || "24rem"};
  height: ${({ height }) => height || "10rem"};
  font-size: ${({ font }) => font || "1.5rem"};
  font-weight: 300;
`;

export default Card;
