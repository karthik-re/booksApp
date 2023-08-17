import { secondsToMinutesAndSeconds } from "./date";

export const extractAnimeData = (data) => {
  const {
    id,
    title,
    main_picture,
    alternative_titles,
    start_date,
    end_date,
    synopsis,
    mean,
    rank,
    popularity,
    num_list_users,
    num_scoring_users,
    nsfw,
    media_type,
    status,
    genres,
    num_episodes,
    start_season,
    broadcast,
    source,
    average_episode_duration,
    rating,
    pictures,
    background,
    related_anime,
    related_manga,
    recommendations,
    studios,
    statistics,
  } = data;

  let startDate = new Date(start_date).toDateString();
  let endDate = new Date(end_date).toDateString();

  if (startDate === `Invalid Date`) {
    startDate = "TBD";
    endDate = "TBD";
  } else if (endDate === `Invalid Date` && startDate !== "Invalid Date") {
    endDate = "TBD";
  }

  const reData = {
    id,
    title,
    main_img: main_picture?.large || null,
    rank,
    en_title: alternative_titles?.en || null,
    jp_title: alternative_titles?.ja || null,
    alt_titles: alternative_titles?.synonyms || null,
    start_date: startDate,
    end_date: endDate,
    synopsis,
    mean,
    popularity,
    num_list_users,
    num_scoring_users,
    nsfw,
    media_type,
    status,
    genres,
    num_episodes,
    start_season,
    broadcast,
    source,
    ep_duration: secondsToMinutesAndSeconds(average_episode_duration),
    rating,
    largeImgURLs: pictures.map((picture) => picture.large),
    background,
    related_anime,
    related_manga,
    recommendations,
    studios,
    statistics,
  };

  return reData;
};
