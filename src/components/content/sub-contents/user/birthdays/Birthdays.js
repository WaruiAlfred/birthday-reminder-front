import { useEffect } from "react";
import { useHttp } from "../../../../../hooks/use-http";
import { Wrapper } from "../../../../styled/content/sub-contents/user/birthdays/Birthdays.styled";
import NoBirthdays from "./NoBirthdays";
import { FadeLoadingSpinner } from "../../../../forms/utilities/LoadingSpinner";
import UserWelcome from "../UserWelcome";

const Birthdays = () => {
  const { sendRequest, loading, data, error } = useHttp();
  let noData = false;

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

  return (
    <Wrapper>
      <UserWelcome />
      <div className="loading-spinner">
        {loading && !data && <FadeLoadingSpinner loading={loading} />}
      </div>
      {noData && <NoBirthdays />}
    </Wrapper>
  );
};

export default Birthdays;
