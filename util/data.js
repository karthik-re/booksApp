import axios from "axios";
import { MAL_CLIENT_ID } from "../secrets";
import { extractAnimeData, extractAnimeListData } from "./extractor";

const DEFAULT_URL = "https://api.myanimelist.net/v2/";
//"anime/ranking?ranking_type=airing&limit=10&fields=id,title,main_picture,mean,rank,popularity,num_episodes,start_date,end_date"
//"anime?q=boobs&limit=10&fields=id,title,main_picture,mean,rank,popularity,num_episodes,start_date,end_date"
//`anime/${id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`
const headers = {
  "X-MAL-CLIENT-ID": MAL_CLIENT_ID,
};

export const searchAnime = async (queryString) => {
  try {
    const response = await axios.get(
      DEFAULT_URL +
        `anime?q=${queryString}&limit=10&nsfw=true&fields=id,title,main_picture,mean,rank,popularity,num_episodes,start_date,end_date,num_scoring_users`,
      {
        headers: headers,
      }
    );

    const list = extractAnimeListData(response.data.data);
    return list;
  } catch (error) {
    console.error("Error fetching top 5 anime:", error);
  }
};

export const getTop5Anime = async () => {
  try {
    const response = await axios.get(
      DEFAULT_URL +
        "anime?q=kaisen&limit=10&nsfw=true&fields=id,title,main_picture,mean,rank,popularity,num_episodes,start_date,end_date,num_scoring_users",
      {
        headers: headers,
      }
    );
    const list = extractAnimeListData(response.data.data);

    return list;
  } catch (error) {
    console.error("Error fetching top 5 anime:", error);
  }
};

export const getAnimeDetails = async (id) => {
  try {
    const response = await axios.get(
      DEFAULT_URL +
        `anime/${id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`,
      {
        headers: headers,
      }
    );

    const data = await response.data;

    const reData = extractAnimeData(data);

    return reData;
  } catch (error) {
    console.error("Error fetching anime:", error);
  }
};
