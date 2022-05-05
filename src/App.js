import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styled/Global";

const theme = {}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <p>Birthday Reminder</p>
    </ThemeProvider>
  );
}

export default App;
