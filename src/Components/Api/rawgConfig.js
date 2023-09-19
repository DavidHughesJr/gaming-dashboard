import { apiConfig } from "./apiConfig";
import { datesConfig } from "./datesConfig";


export const order = {
  added: "-added",
  rating: "-rating",
};

export const dates = {
  today: datesConfig.today,
  thisWeek: datesConfig.thisWeek,
  monthAgo: datesConfig.monthAgo,
};



const rawgApi = {
  getGames: (order, dates, page) => {
    const url = `${apiConfig.baseUrl}games?ordering=${order[order]}&dates=${dates[dates]}&key=${apiConfig.apiKey}`;
    return fetch(url);
  },
  getGamesByGenre: (genre, order, dates = '', page) => {
    const url = `${apiConfig.baseUrl}games?genres=${genre}&ordering=${order[order]}&dates=${dates[dates]}&key=${apiConfig.apiKey}`;
    return fetch(url);
  },
  getGenres: () => {
    const url = `${apiConfig.baseUrl}genres?key=${apiConfig.apiKey}`;
    return fetch(url);
  },
};
export default rawgApi;
