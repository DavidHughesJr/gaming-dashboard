import { createTheme } from "@mui/material/styles";
import { blueGrey, grey } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    allVariants: {
      color: grey[100],
      fontFamily: "serif",
    },
  },
  palette: {
    primary: blueGrey,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 540,
      md: 780,
      lg: 1280,
      xl: 1540,
      xxl: 1920,
    }
  }

  // components: {
  //   // Name of the component
  //   MuiButtonBase: {
  //     defaultProps: {
  //       // The props to change the default for.
  //       disableRipple: true, // No more ripple, on the whole application 💣!
  //     },
  //   },
  // },
});

export default theme;
