import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.js";
import { useEffect, useState } from "react";
import Content from "./Components/common/Content.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Components/router/Root.jsx";
import { ErrorBoundary } from "./Components/router/ErrorBoundary.jsx";
import rawgApi, { order, dates } from "./Components/api/rawgConfig.js";
import GenrePage from "./Components/pages/GenrePage.jsx";

function App() {
  const [allGames, setAllGames] = useState([]);
  const [releaseDateGame, setReleaseDateGame] = useState([]);
  const [genre, setGenre] = useState([]);
  const [date, setDate] = useState(dates.today);

  useEffect(() => {
    const fetchGamesData = async () => {
      const resAllGames = await rawgApi.getGames(order.added, dates.today);
      const allGamesData = await resAllGames.json();

      const resRelease = await rawgApi.getGames(dates.today, order.added);
      const releaseData = await resRelease.json();

      const resGenre = await rawgApi.getGames(dates.today, order.added);
      const genreData = await resGenre.json();

      setAllGames(allGamesData);
      setReleaseDateGame(releaseData);
      setGenre(genreData);
    };

    fetchGamesData();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} ErrorBoundary={ErrorBoundary}>
        <Route
          index
          element={<Content title={allGames.seo_title} listing={allGames} />}
        />
        <Route path="releases/:dates" index element={<GenrePage />} />
        <Route path="games/:genre" index element={<GenrePage />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
