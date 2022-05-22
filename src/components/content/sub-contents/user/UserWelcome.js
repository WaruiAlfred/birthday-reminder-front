import { WelcomeDiv } from "../../../styled/content/sub-contents/Details.styled";
import { FaBirthdayCake } from "react-icons/fa";

const UserWelcome = () => {
  return (
    <WelcomeDiv>
      <h3>Welcome back New User</h3>
      <FaBirthdayCake color="#BB2E45" size="2em" />
    </WelcomeDiv>
  );
};

export default UserWelcome;
