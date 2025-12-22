
export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[]; // array of genre ids
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string; // ISO date string
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface GetMoviesResponse {
  results: Movie[];
  page: number;
  total_results: number;
  total_pages: number;
}