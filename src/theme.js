import { createTheme } from "@mui/material/styles";
import { blueGrey, grey } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    allVariants: {
      color: grey[100],
      fontFamily: "Impact, fantasy",
    },
  },
  palette: {
    primary: blueGrey,
  },

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
