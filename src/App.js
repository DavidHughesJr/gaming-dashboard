import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import { useEffect, useState } from "react";
import { Container, Box, Stack } from "@mui/material";
import Navigation from './Components/SideNav.jsx'
import TopNav from "./Components/TopNav.jsx";
import Content from "./Components/Content.jsx";


function App() {
  // https://api.rawg.io/api/platforms?key=YOUR_API_KEY
  const APIKEY = "c2274413f3b04504ab022813fb50a432";

  const [gamesList, setGamesList] = useState([])
  const [genreList, setGenreList] = useState([])

  useEffect(() => {
    const fetchGames = async () => {
      const res = await fetch(`https://api.rawg.io/api/games?key=${APIKEY}`)
      const data = await res.json()
      setGamesList(data)
    }

    fetchGames()
  }, [])

  console.log(gamesList)

  return (
    <ThemeProvider theme={theme} >
      <TopNav />
      <Container maxWidth='xl'>
        <Stack flexDirection={{ md: "row", sm: "column" }} justifyContent='space-between'>
          <Box width={{ xs: '100%', md: '20%', xl: '15%' }} mr={5}>
            <Navigation />
          </Box>
          <Box width={{ xs: '100%', md: '80%', xl: '85%' }}>
            <Content gamesList={gamesList} />
          </Box>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
