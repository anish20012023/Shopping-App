import { CssBaseline, ThemeProvider } from "@mui/material";
import { MainTheme } from "./Theme/MainTheme";
import Main from "./Components/Main/Main";

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}

export default App;
