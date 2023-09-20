import { createTheme } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    background: {
      default: "#222222",
    },
    primary: {
      main: blue[500],
    },
    text: {
      primary: grey[100],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 540,
      md: 780,
      lg: 1280,
      xl: 1540,
      xxl: 1920,
    },
});

