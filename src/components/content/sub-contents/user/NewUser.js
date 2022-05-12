import { NewUserContainerDiv } from "../../../styled/content/sub-contents/user/User.styled";
import { StyledButton } from "../../../styled/forms/Form.styled";

const NewUser = () => {
  return <NewUserContainerDiv>
    <p>You must have an account to set reminders.</p>
    <StyledButton>Register/Login</StyledButton>
  </NewUserContainerDiv>;
};

export default NewUser;
