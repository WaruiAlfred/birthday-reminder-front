import { StyledSideMenu, StyledLink } from "./styled/Header.styled";
import { FaHome } from "react-icons/fa";
import { BiBookAdd } from "react-icons/bi";
import { RiLoginCircleFill } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";

const SideMenu = ({ sideNavToggle }) => {
  const closeSideMenuHandler = () => {
    setTimeout(sideNavToggle(false), 5);
  };

  return (
    <StyledSideMenu>
      <button onClick={closeSideMenuHandler}>&times;</button>
      <div>
        <StyledLink to="/">
          <FaHome />
          Home
        </StyledLink>
        <StyledLink to="addBirthday">
          <BiBookAdd />
          Add Birthday
        </StyledLink>
        <StyledLink to="register">
          <MdManageAccounts />
          Create account
        </StyledLink>
        <StyledLink to="login">
          <RiLoginCircleFill />
          Login
        </StyledLink>
      </div>
    </StyledSideMenu>
  );
};

export default SideMenu;
