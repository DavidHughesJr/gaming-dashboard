import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import { useEffect, useState } from "react";
import { Container, Box, Stack } from "@mui/material";
import Navigation from './Components/SideNav.jsx'
import TopNav from "./Components/TopNav.jsx";
import Content from "./Components/Content.jsx";


function App() {
  // https://api.rawg.io/api/platforms?key=YOUR_API_KEY
  // https://api.rawg.io/api/games/{id}/movies
  const APIKEY = "c2274413f3b04504ab022813fb50a432";

  const date = new Date()
  const formattedDate = Intl.DateTimeFormat("en-US", {
    dateStyle: "short",
  }).format(date).replaceAll('/', '-');

  var priorDate = new Date(new Date().setDate(date.getDate() - 7));

  const formattedDate2 = Intl.DateTimeFormat("en-US", {
    dateStyle: "short",
  }).format(priorDate).replaceAll('/', '-');

  const thisDate = new Intl.DateTimeFormat("fr-CA", { year: "numeric", month: "2-digit", day: "2-digit" }).format(Date.now())
  const ThirtyDays = new Intl.DateTimeFormat("fr-CA", { year: "numeric", month: "2-digit", day: "2-digit" }).format(priorDate)




  const [gamesList, setGamesList] = useState([])
  const [genreList, setGenreList] = useState([])

  useEffect(() => {
    const fetchGames = async () => {
      const res = await fetch(`https://api.rawg.io/api/games?dates=2023-01-01,2023-12-31&ordering=-rating&key=${APIKEY}`)
      const data = await res.json()
      setGamesList(data)
    }

    fetchGames()
  }, [])

  console.log(gamesList)

 

  console.log(thisDate)
  console.log(ThirtyDays)





  return (
    <ThemeProvider theme={theme} >
      <TopNav />
      <Container maxWidth='xxl'>
        <Stack flexDirection={{ md: "row", sm: "column" }} justifyContent='space-between'>
          <Box width={{ xs: '100%', md: '20%', xl: '15%' }} mr={5}>
            <Navigation />
          </Box>
          <Box width={{ xs: '100%', md: '80%', xl: '85%' }}>
            <Content title={'Trending'} gamesList={gamesList}  />
          </Box>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
