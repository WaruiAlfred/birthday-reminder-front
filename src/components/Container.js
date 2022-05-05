import { StyledContainer } from "./styled/Container.styled";
import Content from "./content/Content";
import Footer from "./Footer";
import Header from "./Header";

function Container() {
  return (
    <StyledContainer>
      <Header />
      <Content />
      <Footer />
    </StyledContainer>
  );
}

export default Container;
