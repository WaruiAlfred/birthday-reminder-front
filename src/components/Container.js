import { StyledContainer } from "./styled/Container.styled";
import { IconContext } from "react-icons";
import Content from "./content/Content";
import Footer from "./Footer";
import Header from "./Header";

function Container() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: "1.5em" }}>
      <StyledContainer>
        <Header />
        <Content />
        <Footer />
      </StyledContainer>
    </IconContext.Provider>
  );
}

export default Container;
