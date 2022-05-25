import { ThemeProvider } from "styled-components";
import Container from "./components/Container";
import GlobalStyles from "./components/styled/Global";
import AppContextProvider from "./store/appContext";
import { theme } from "./theme";

function App() {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container />
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default App;
