import { NoBirthdaysContainerDiv } from "../../../../styled/content/sub-contents/user/User.styled";
import { StyledButton } from "../../../../styled/forms/Button.styled";
import addBirthdaySvg from "../../../../../assets/svg/add_birthday.svg";
import { StyledAuthLink } from "../../../../styled/content/sub-contents/user/User.styled";

const NoBirthdays = () => {
  return (
    <NoBirthdaysContainerDiv>
      <img src={addBirthdaySvg} alt="add birthday img" />
      <div>
        <p>
          Add your dear ones birthdays and let us do what we do best:{" "}
          <span>remind you</span>.
        </p>
        <StyledButton>
          <StyledAuthLink to="/addBirthday">Add Birthdays</StyledAuthLink>
        </StyledButton>
      </div>
    </NoBirthdaysContainerDiv>
  );
};

export default NoBirthdays;
