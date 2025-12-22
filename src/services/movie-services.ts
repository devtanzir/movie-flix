import api from "./api"
import type { GetMoviesResponse, Movie } from "./types";

export const getMovies = async (): Promise<Movie[]> => {
    try {
        const response = await api.get<GetMoviesResponse>("/discover/movie?sort_by=popularity.desc")
        return response.data.results
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
          throw new Error(error.response?.data?.message || "Failed to fetch movies");
    }
}