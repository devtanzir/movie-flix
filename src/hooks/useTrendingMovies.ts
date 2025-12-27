import { useQuery } from "@tanstack/react-query";
import { GetTrendingMovies } from "../../appwrite";

const useTrendingMovies = () => {

    return useQuery({
        queryKey: ["trending-movies"],
        queryFn: GetTrendingMovies,
        staleTime: 1000 * 60 * 5, // 5 min cache
        retry: 1, // retry once on failure
    })
};

export default useTrendingMovies;