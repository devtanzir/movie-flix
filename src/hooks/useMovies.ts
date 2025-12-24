import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../services/movie-services";
import { useDebounce } from "./useDebounce";
import type { Movie } from "../services/types";

export const useMovies = (searchTerm: string) => {

    const debouncedSearch = useDebounce(searchTerm, 500);

  return useQuery<Movie[], Error>({
    queryKey: ["movies", debouncedSearch],
    queryFn: () => getMovies(debouncedSearch),
    enabled: debouncedSearch !== undefined,
    staleTime: 1000 * 60 * 5, // 5 min cache
    retry: 1, // retry once on failure
  });
};
