import { StyledDetails } from "../../styled/content/sub-contents/Details.styled";
import { Routes, Route } from "react-router-dom";
import Home from "../../Home";
import BirthdayEntryForm from "../../forms/BirthdayEntryForm";
import LoginForm from "../../forms/LoginForm";
import RegisterForm from "../../forms/RegisterForm";
import UserAccount from "./user/UserAccount";
import Birthdays from "./user/birthdays/Birthdays";

function Details() {
  return (
    <StyledDetails>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addBirthday" element={<BirthdayEntryForm />} />
        <Route path="birthdays" element={<Birthdays />} />
        <Route path="account" element={<UserAccount />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
      </Routes>
    </StyledDetails>
  );
}

export default Details;
