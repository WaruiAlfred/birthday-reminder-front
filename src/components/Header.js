import { StyledHeader } from "./styled/Header.styled";
import img from "../assets/img/birthday.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import SideMenu from "./SideMenu";

function Header() {
  return (
    <StyledHeader>
      <SideMenu />
      <div>
        <GiHamburgerMenu />
        <h1>Birthday Reminder</h1>
      </div>
      <img src={img} alt="party img" />
    </StyledHeader>
  );
}

export default Header;
