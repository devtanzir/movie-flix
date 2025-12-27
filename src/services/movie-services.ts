import { UpdateSearchCount } from './../../appwrite';
import api from "./api"
import type { GetMoviesResponse, Movie } from "./types";

export const getMovies = async (search?: string): Promise<Movie[]> => {
    try {

        const endpoint = search
    ? `/search/movie?query=${encodeURIComponent(search)}`
    : `/discover/movie?sort_by=popularity.desc`;

        const response = await api.get<GetMoviesResponse>(endpoint)
        if (search && response.data.results.length > 0) {
           await UpdateSearchCount(search, response.data.results[0])
        }
        return response.data.results
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
          throw new Error(error.response?.data?.message || "Failed to fetch movies");
    }
}