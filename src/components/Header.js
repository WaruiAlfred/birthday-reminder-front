import { StyledHeader } from "./styled/Header.styled";
import img from "../assets/img/birthday.jpg";

function Header() {
  return (
    <StyledHeader>
      <h1>Birthday Reminder</h1>
      <img src={img} alt="party img" />
    </StyledHeader>
  );
}

export default Header;
