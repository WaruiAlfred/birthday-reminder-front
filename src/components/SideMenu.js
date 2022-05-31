import { useContext } from "react";
import { StyledSideMenu, StyledLink } from "./styled/Header.styled";
import { FaHome } from "react-icons/fa";
import { BiBookAdd } from "react-icons/bi";
import {
  RiLoginCircleFill,
  RiAccountCircleFill,
  RiLogoutCircleFill,
} from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";
import { AppContext } from "../store/appContext";

const SideMenu = ({ sideNavToggle }) => {
  const { loggedInUserTokenData, logout } = useContext(AppContext);

  const loggedIn = !!loggedInUserTokenData;

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
        {loggedIn && (
          <StyledLink to="/addBirthday">
            <BiBookAdd />
            Add Birthday
          </StyledLink>
        )}
        <StyledLink to="/register">
          <MdManageAccounts/>
          Create {loggedIn && "new"} account
        </StyledLink>
        {loggedIn && (
          <StyledLink to="/account">
            <RiAccountCircleFill />
            Account
          </StyledLink>
        )}
        {!loggedIn && (
          <StyledLink to="/login">
            <RiLoginCircleFill />
            Login
          </StyledLink>
        )}
        <StyledLink to="/" onClick={logout}>
          <RiLogoutCircleFill />
          Logout
        </StyledLink>
      </div>
    </StyledSideMenu>
  );
};

export default SideMenu;
