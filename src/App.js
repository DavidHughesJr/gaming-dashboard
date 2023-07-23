import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import Navigation from'./Components/Navigation.jsx'


function App() {
  // https://api.rawg.io/api/platforms?key=YOUR_API_KEY
  const APIKEY = "c2274413f3b04504ab022813fb50a432";

  const [gamesList, setGamesList] = useState([])
  const [genreList, setGenreList] = useState([])

  useEffect(() => {
    const fetchGames = async () => {
      const res = await fetch( `https://api.rawg.io/api/games?key=${APIKEY}`)
      const data = await res.json()
      setGamesList(data)
    }

    // fetchGames()
  }, [])

  return (
    <ThemeProvider theme={theme} >
    <Stack flexDirection={{ md: "row", sm: "column" }} justifyContent='space-between'>
      <Box width={{xs: '100%', md: '25%'}}>
        <Navigation />
      </Box>
      <Box  width={{xs: '25%', md: '75%'}}>Content</Box>
    </Stack>
    </ThemeProvider>
  );
}

export default App;
