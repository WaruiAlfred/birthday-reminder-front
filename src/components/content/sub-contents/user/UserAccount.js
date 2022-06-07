import { useEffect, useContext } from "react";
import { useHttp } from "../../../../hooks/use-http";
import {
  StyledAccLink,
  Wrapper,
} from "../../../styled/content/sub-contents/user/UserAccount.styled";
import { FaUserCircle } from "react-icons/fa";
import { AppContext } from "../../../../store/appContext";

function UserAccount() {
  const { data, sendRequest } = useHttp();
  const { username: loggedInUser } = useContext(AppContext);
  let username, first_name, last_name, email;

  useEffect(() => {
    const getAccountDetails = () => {
      sendRequest("GET", `accounts/users/?username=${loggedInUser}`);
    };

    return getAccountDetails();
  }, [sendRequest, loggedInUser]);

  if (data) {
    ({ username, first_name, last_name, email } = data[0]);

    // localStorage.setItem('userId',id)
  }

  return (
    <Wrapper>
      <div className="profile-pic">
        <FaUserCircle color="#cecece" size="7em" />
      </div>
      <div className="user-details">
        <div className="user-details--col">
          <div className="user-details__detail">
            <p className="user-details__detail__identifier">Username:</p>
            <p className="user-details__detail__data">{username}</p>
          </div>
          <div className="user-details__detail">
            <p className="user-details__detail__identifier">Email:</p>
            <p className="user-details__detail__data">{email}</p>
          </div>
        </div>
        <div className="user-details--col">
          <div className="user-details__detail">
            <p className="user-details__detail__identifier">First Name:</p>
            <p className="user-details__detail__data">{first_name}</p>
          </div>
          <div className="user-details__detail">
            <p className="user-details__detail__identifier">Last Name:</p>
            <p className="user-details__detail__data">{last_name}</p>
          </div>
        </div>
      </div>
      <StyledAccLink to="/">Edit?</StyledAccLink>
    </Wrapper>
  );
}

export default UserAccount;
