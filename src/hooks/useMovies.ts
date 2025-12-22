import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../services/movie-services";

export const useMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
    staleTime: 1000 * 60 * 5, // 5 min cache
    retry: 1, // retry once on failure
  });
};
