import { MainContent, BodyImg } from "../styled/content/Content.styled";
// import Details from "./sub-contents/Details";
import BirthdayEntryForm from "../forms/BirthdayEntryForm";
import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";

function Content() {
  return (
    <MainContent>
      <BodyImg />
      {/*<Details/>*/}
      <BirthdayEntryForm />
      <LoginForm />
      <RegisterForm />
    </MainContent>
  );
}

export default Content;
