export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  apiKey: string;
  genres: Genre[];
};

type Genre = {
  id: number;
  name: string;
};

export enum MOVIE_TYPES {
  NOW_PLAYING = "now_playing",
  TOP_RATED = "top_rated",
  POPULAR = "popular",
  UPCOMING = "upcoming",
}
