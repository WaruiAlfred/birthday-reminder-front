import { useContext } from "react";
import { WelcomeDiv } from "../../../styled/content/sub-contents/Details.styled";
import { FaBirthdayCake } from "react-icons/fa";
import { AppContext } from "../../../../store/appContext";

const UserWelcome = () => {
  const{username:loggedInUser}=useContext(AppContext)

  return (
    <WelcomeDiv>
      <h3>Welcome back {loggedInUser}</h3>
      <FaBirthdayCake color="#BB2E45" size="2em" />
    </WelcomeDiv>
  );
};

export default UserWelcome;
