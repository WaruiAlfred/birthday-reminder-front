import {
  StyledDetails,
  WelcomeDiv,
} from "../../styled/content/sub-contents/Details.styled";
import { FaBirthdayCake } from "react-icons/fa";
import NoBirthdays from "./user/NoBirthdays";

function Details() {
  return (
    <StyledDetails>
      <WelcomeDiv>
        <h3>Welcome New User</h3>
        <FaBirthdayCake color="#BB2E45" size="2em" />
      </WelcomeDiv>
      <NoBirthdays />
    </StyledDetails>
  );
}

export default Details;
