import { apiConfig } from "./apiConfig";
import { datesConfig } from "./datesConfig";

export const dates = {
  today: datesConfig.today,
  thisWeek: datesConfig.thisWeek,
  monthAgo: datesConfig.monthAgo,
};

export const order = {
  added: "-added",
  rating: "-rating",
};


const rawgApi = {
  getGames: (dates, order, page) => {
    const url = `${apiConfig.baseUrl}games?dates=${dates[dates]}&ordering=${order[order]}&key=${apiConfig.apiKey}`;
    return fetch(url);
  },
  getGenres: () => {
    const url = `${apiConfig.baseUrl}genres?key=${apiConfig.apiKey}`;
    return fetch(url);
  },
};
export default rawgApi;
