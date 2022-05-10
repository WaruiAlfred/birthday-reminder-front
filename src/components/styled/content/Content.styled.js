import styled from "styled-components";
import ImgSrc from "../../../assets/img/birthday.jpg";

export const MainContent = styled.main`
  grid-row: body-start / body-end;
  color: #000;

  display: grid;
  grid-template-rows: minmax(10rem, 14rem) 1fr;
  grid-template-columns: minmax(1rem, 5rem) 1fr minmax(1rem, 5rem);
`;

export const BodyImg = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  background-image: url(${ImgSrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
