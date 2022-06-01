import { Fragment, useContext } from "react";
import { Description, Join } from "./styled/Home.styled";
import Card from "./styled/Card.styled";
import NewUser from "./content/sub-contents/user/NewUser";
import { AppContext } from "../store/appContext";
import { StyledAuthLink } from "./styled/content/sub-contents/user/User.styled";
import { StyledButton } from "./styled/forms/Form.styled";

function Home() {
  const { loggedInUserTokenData } = useContext(AppContext);

  return (
    <Fragment>
      <Description>
        <p>
          Ever found yourself forgetting your dear ones birthdays? Here we've
          come up with a solution where all you have to do is enter their
          birthdates and we'll do the remembering for you.
        </p>
        <h5>Here are services we offer:</h5>
        <div>
          <Card>Keep records of birthdays</Card>
          <Card>Send you a reminder email when the birthday arrives</Card>
          <Card>Send suggestions of what to do</Card>

          <Card>Keep records of user data including emails</Card>
          <Card>Provide support if needed</Card>
          <Card>Lessen the hassle of having to remember birthdays</Card>
        </div>
      </Description>
      <Join>
        {loggedInUserTokenData ? (
          <StyledButton>
            <StyledAuthLink to="addBirthday">Add Birthdays</StyledAuthLink>
          </StyledButton>
        ) : (
          <NewUser />
        )}
      </Join>
    </Fragment>
  );
}

export default Home;
