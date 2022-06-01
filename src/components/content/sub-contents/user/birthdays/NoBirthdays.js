import { NoBirthdaysContainerDiv } from "../../../../styled/content/sub-contents/user/User.styled";
import { StyledButton } from "../../../../styled/forms/Form.styled";
import addBirthdaySvg from "../../../../assets/svg/add_birthday.svg";

const NoBirthdays = () => {
  return (
    <NoBirthdaysContainerDiv>
      <img src={addBirthdaySvg} alt="add birthday img" />
      <div>
        <p>
          Add your dear ones birthdays and let us do what we do best:{" "}
          <span>remind you</span>.
        </p>
        <StyledButton>Add Birthday</StyledButton>
      </div>
    </NoBirthdaysContainerDiv>
  );
};

export default NoBirthdays;
