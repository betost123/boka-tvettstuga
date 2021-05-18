import React from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import LogInPage from "./LogInPage/LogInPage";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#718D74",
      light: "#9BB99E",
      dark: "#334D37",
    },
    secondary: {
      light: "#FFDD82",
      main: "#CCA64E",
      dark: "#92731A",
    },
    warning: {
      main: "#FD8B7C",
    },
    info: {
      main: "#6CA7FF",
    },
  },
  typography: {
    h1: {
      fontSize: 74,
    },
    subtitle1: {
      fontSize: 22,
      fontWeight: 700,
      lineHeight: "21,09px",
      fontStyle: "normal",
    },
    body1: {
      fontSize: 14,
    },
  },
});

function App() {
  return (
    <div style={{ background: theme.palette.primary.light, height: "100vh" }}>
      <ThemeProvider theme={theme}>
        <LogInPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
