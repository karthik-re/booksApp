import axios from "axios";
import { MAL_CLIENT_ID } from "../secrets";

const API_CLIENT_ID = MAL_CLIENT_ID;

const headers = {
  "X-MAL-CLIENT-ID": API_CLIENT_ID,
};

export const getTop5Anime = async () => {
  try {
    const response = await axios.get(
      "https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=10",
      {
        headers: headers,
      }
    );

    const list = response.data.data.map((entry) => ({
      id: entry.node.id,
      title: entry.node.title,
      img_large: entry.node.main_picture.large,
      img_medium: entry.node.main_picture.medium,
      rank: entry.ranking.rank,
    }));
    // console.log(list);
    return list;
  } catch (error) {
    console.error("Error fetching top 5 anime:", error);
  }
};
