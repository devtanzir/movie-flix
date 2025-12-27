import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import { useMovies } from "./hooks/useMovies";
import type { Movie } from "./services/types";
import MovieCard from "./components/MovieCard";
import useTrendingMovies from "./hooks/useTrendingMovies";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data: movies, isLoading, isError, error } = useMovies(searchTerm);
  const {data: TrendingMovies, isLoading: TrendingMovieIsLoading, isError: TrendingMovieIsError, error: TrendingMovieError} = useTrendingMovies()

  const handleSearchTerm = (inputValue: string) => {
    setSearchTerm(inputValue);
  };


  return (
    <>
      <main>
        <div className="pattern" />
        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="Hero Banner" />
            <h1>
              Find <span className="text-gradient">Movies</span> You'll Enjoy
              Without the Hassle
            </h1>
            <Search
              searchTerm={searchTerm}
              handleSearchTerm={handleSearchTerm}
            />
          </header>
          {
            TrendingMovies && TrendingMovies?.length > 0 && (
              <section className="trending">
                <h2>Trending Movies</h2>

                
                 {
                  TrendingMovieIsLoading ? (
                    <p>Loading</p>
                  ): TrendingMovieIsError ? (
                    <p className="text-red-500">{TrendingMovieError.message}</p>
                  ) : (
                  <ul>
                    {
                      TrendingMovies?.map((movies, index) => (
                        <li key={movies.$id}>
                          <p>{index + 1}</p>
                          <img src={movies.poster_url} alt={movies.title} />
                        </li>
                      ))
                    }
                  </ul>
                  )
                 }
                
          </section>
            )
          }
          

          <section className="all-movies">
            <h2 className="mt-10">All Movies</h2>
            {isLoading ? (
              <p>Loading...</p>
            ) : isError ? (
              <p className="text-red-500">{error.message}</p>
            ) : (
              <ul>
                {movies?.map((movie: Movie) => (
                  <MovieCard key={movie.id} movie={movie}/>
                ))}
              </ul>
            )}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
