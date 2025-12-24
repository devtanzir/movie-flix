import api from "./api"
import type { GetMoviesResponse, Movie } from "./types";

export const getMovies = async (search?: string): Promise<Movie[]> => {
    try {

        const endpoint = search
    ? `/search/movie?query=${encodeURIComponent(search)}`
    : `/discover/movie?sort_by=popularity.desc`;

        const response = await api.get<GetMoviesResponse>(endpoint)
        return response.data.results
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
          throw new Error(error.response?.data?.message || "Failed to fetch movies");
    }
}