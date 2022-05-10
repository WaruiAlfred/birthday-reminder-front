import { StyledDetails,WelcomeDiv } from "../../styled/content/sub-contents/Details.styled";
import {FaBirthdayCake} from 'react-icons/fa'

function Details() {
  return <StyledDetails>
    <WelcomeDiv>
      <h3>Welcome New User</h3>
      <FaBirthdayCake color="#BB2E45" size='2em'/>
    </WelcomeDiv>
  </StyledDetails>;
}

export default Details;
