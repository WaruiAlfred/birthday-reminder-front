import { ThemeProvider } from "styled-components";
import Container from "./components/Container";
import GlobalStyles from "./components/styled/Global";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Container/>
    </ThemeProvider>
  );
}

export default App;
