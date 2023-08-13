import axios from "axios";
import { MAL_CLIENT_ID } from "../secrets";
import { formatDateRange } from "./date";

const DEFAULT_URL = "https://api.myanimelist.net/v2/";
//"anime/ranking?ranking_type=airing&limit=10&fields=id,title,main_picture,mean,rank,popularity,num_episodes,start_date,end_date"
//"anime?q=boobs&limit=10&fields=id,title,main_picture,mean,rank,popularity,num_episodes,start_date,end_date"
const headers = {
  "X-MAL-CLIENT-ID": MAL_CLIENT_ID,
};

export const getTop5Anime = async () => {
  try {
    const response = await axios.get(
      DEFAULT_URL +
        "anime/ranking?ranking_type=airing&limit=10&fields=id,title,main_picture,mean,rank,popularity,num_episodes,start_date,end_date,num_scoring_users",
      {
        headers: headers,
      }
    );
    // console.log(response.data.data[0])
    const list = response.data.data.map((entry) => ({
      id: entry.node.id,
      title: entry.node.title,
      img_medium: entry.node.main_picture.medium,
      rank: entry.node.rank,
      mean: entry.node.mean,
      num_of_mean: entry.node.num_scoring_users.toLocaleString(),
      popularity: entry.node.popularity,
      num_episodes: entry.node.num_episodes,
      period: formatDateRange(entry.node.start_date, entry.node.end_date),
    }));
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
    console.log(response.data);
    // const list = response.data.data.map((entry) => ({
    //   id: entry.node.id,
    //   title: entry.node.title,
    //   img_large: entry.node.main_picture.large,
    //   img_medium: entry.node.main_picture.medium,
    //   rank: entry.ranking.rank,
    // }));
    // console.log(list);
    // return list;
  } catch (error) {
    console.error("Error fetching anime:", error);
  }
};
