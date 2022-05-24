import { useState } from "react";
import { SuccessMessageDiv } from "../../styled/forms/Form.styled";

const SuccessMessage = ({ successMessage }) => {
  const [showMessage, setShowMessage] = useState(false);

  if (successMessage) {
    setShowMessage(true);
  }

  const hideSuccessDivHandler = () => {
    setShowMessage(false);
  };

  return (
    <SuccessMessageDiv>
      <p>{successMessage}</p>{" "}
      <button onClick={hideSuccessDivHandler}>&times;</button>
    </SuccessMessageDiv>
  );
};

export default SuccessMessage;
