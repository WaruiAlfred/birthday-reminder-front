import { StyledSideMenu, StyledLink } from "./styled/Header.styled";
import { FaHome } from "react-icons/fa";
import { BiBookAdd } from "react-icons/bi";
import { RiLoginCircleFill, RiLogoutCircleFill } from "react-icons/ri";

const SideMenu = () => {
  return (
    <StyledSideMenu>
      <button>&times;</button>
      <div>
        <StyledLink to="#">
          <FaHome />
          Home
        </StyledLink>
        <StyledLink to="#">
          <BiBookAdd />
          Add Birthday
        </StyledLink>
        <StyledLink to="#">
          <RiLoginCircleFill />
          Login
        </StyledLink>
        <StyledLink to="#">
          <RiLogoutCircleFill />
          Logout
        </StyledLink>
      </div>
    </StyledSideMenu>
  );
};

export default SideMenu;
