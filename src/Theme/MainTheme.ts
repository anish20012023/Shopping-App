import { createTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {
    mainColor: string;
  }
}

declare module "@mui/material/styles" {
  interface ThemeOptions {
    mainColor?: string;
  }
}

export const MainTheme = createTheme({
  mainColor: "#1B1A20",
 

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflow: "auto !important",
          padding: "0px !important",
        },
      },
    },
  },
});
