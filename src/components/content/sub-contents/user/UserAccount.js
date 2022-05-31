import { StyledAccLink, Wrapper } from "../../../styled/content/sub-contents/user/UserAccount.styled";
import { FaUserCircle } from "react-icons/fa";

function UserAccount() {
  return (
    <Wrapper>
      <div className="profile-pic">
        <FaUserCircle color="#cecece" size="7em" />
      </div>
      <div className="user-details">
        <div className="user-details--col">
          <div className="user-details__detail">
            <p className="user-details__detail__identifier">Username:</p>
            <p className="user-details__detail__data">Sparrow</p>
          </div>
          <div className="user-details__detail">
            <p className="user-details__detail__identifier">Email:</p>
            <p className="user-details__detail__data">spa@gmail.com</p>
          </div>
        </div>
        <div className="user-details--col">
          <div className="user-details__detail">
            <p className="user-details__detail__identifier">First Name:</p>
            <p className="user-details__detail__data">John</p>
          </div>
          <div className="user-details__detail">
            <p className="user-details__detail__identifier">Last Name:</p>
            <p className="user-details__detail__data">Doe</p>
          </div>
        </div>
      </div>
      <StyledAccLink to="/">Edit?</StyledAccLink>
    </Wrapper>
  );
}

export default UserAccount;
