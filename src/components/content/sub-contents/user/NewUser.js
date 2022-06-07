import {
  NewUserContainerDiv,
  StyledAuthLink,
} from "../../../styled/content/sub-contents/user/User.styled";
import { StyledButton } from "../../../styled/forms/Button.styled";

const NewUser = () => {
  return (
    <NewUserContainerDiv>
      <p>You must have an account to set reminders.</p>
      <StyledButton>
        <StyledAuthLink to="register">Register</StyledAuthLink>/
        <StyledAuthLink to="login">Login</StyledAuthLink>
      </StyledButton>
    </NewUserContainerDiv>
  );
};

export default NewUser;
