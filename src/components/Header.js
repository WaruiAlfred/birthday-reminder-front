import { useState } from "react";
import { StyledHeader } from "./styled/Header.styled";
import img from "../assets/img/birthday.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import SideMenu from "./SideMenu";
import { Link } from "react-router-dom";

function Header() {
  const [showSideNav, setShowSideNav] = useState(false);

  const sideNavToggleHandler = () => {
    setTimeout(setShowSideNav(true), 5);
  };

  return (
    <StyledHeader>
      {showSideNav && <SideMenu sideNavToggle={setShowSideNav} />}
      <div>
        <button onClick={sideNavToggleHandler}>
          <GiHamburgerMenu />
        </button>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <h1>Birthday Reminder</h1>
        </Link>
      </div>
      <img src={img} alt="party img" />
    </StyledHeader>
  );
}

export default Header;
