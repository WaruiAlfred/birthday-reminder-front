import { Fragment, useEffect } from "react";
import { useHttp } from "../../../../../hooks/use-http";
import { Wrapper } from "../../../../styled/content/sub-contents/user/birthdays/Birthdays.styled";
import NoBirthdays from "./NoBirthdays";
import { FadeLoadingSpinner } from "../../../../forms/utilities/LoadingSpinner";
import UserWelcome from "../UserWelcome";
import moment from "moment";
import { StyledButton } from "../../../../styled/forms/Button.styled";
import { StyledAuthLink } from "../../../../styled/content/sub-contents/user/User.styled";
import ErrorMessage from "../../../../forms/utilities/ErrorMessage";

const Birthdays = () => {
  const { sendRequest, loading, data, error } = useHttp();
  let noData = false;
  let content = <NoBirthdays />;

  useEffect(() => {
    const getBirthdays = () => {
      const userId = localStorage.getItem("userId");

      sendRequest("GET", `birthdays_data/?user=${userId}`);
    };

    return getBirthdays();
  }, [sendRequest]);

  console.log(data);
  if (data && data.length === 0) {
    noData = true;
  }

  if (data) {
    content = (
      <Fragment>
        <p>These are your dear ones' birthdays</p>
        <h5>Current date: {moment(new Date()).format("L")} </h5>
        <div className="birthdays">
          {data.map((birthday, i) => (
            <div key={i} className="birthday">
              <div className="birthday__header">
                <p>{birthday.friends_name}</p>
                <p>
                  {moment(
                    new Date(
                      birthday.year_of_birth,
                      birthday.month_of_birth,
                      birthday.day_of_birth
                    )
                  ).format("L")}
                </p>
              </div>
              <div className="birthday__data">
                <p>
                  Turning {""}
                  {moment(
                    new Date(
                      birthday.year_of_birth,
                      birthday.month_of_birth,
                      birthday.day_of_birth
                    )
                  ).to(new Date(), true)}
                </p>
                <p>
                  {new Date().getMonth() - birthday.month_of_birth === 0
                    ? "Today"
                    : new Date().getMonth() - birthday.month_of_birth < 0
                    ? `In ${
                        new Date().getMonth() - birthday.month_of_birth
                      } months`.replace("-", "")
                    : "Next year"}
                </p>
              </div>
            </div>
          ))}
          <div className="buttons">
            <StyledButton>
              <StyledAuthLink to="/addBirthday">Add </StyledAuthLink>
            </StyledButton>
            <StyledButton>More &rarr;</StyledButton>
          </div>
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Fragment>
    );
  }

  return (
    <Wrapper>
      <UserWelcome />
      <div className="loading-spinner">
        {loading && !data && <FadeLoadingSpinner loading={loading} />}
      </div>
      {noData && <NoBirthdays />}
      <div className="content">{content}</div>
    </Wrapper>
  );
};

export default Birthdays;
