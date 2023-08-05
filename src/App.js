import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import { useEffect, useState } from "react";
import Content from "./Components/Content.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Components/Pages/Root.jsx";
import { ErrorBoundary } from "./Components/Pages/ErrorBoundary.jsx";
import rawgApi, { order, dates } from "./Components/Api/rawgConfig.js";
import { useParams, useLocation } from "react-router-dom";


function App() {


  const [allGames, setAllGames] = useState([]);


  useEffect(() => {
    const fetchGamesData = async () => {
      const resAllGames = await rawgApi.getGames(dates.today, order.added);
      const allGamesData = await resAllGames.json();
      setAllGames(allGamesData);
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
        <Route
          path="/releases"
          index
          element={<Content title={"Trending"} />}
        />
        <Route path="/games" index element={<Content title={"Trending"} />} />
        <Route
          path="/genre/:name"
          index
          element={<Content />}
        />
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
