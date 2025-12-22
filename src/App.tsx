import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import { useMovies } from "./hooks/useMovies";
import type { Movie } from "./services/types";
import MovieCard from "./components/MovieCard";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data: movies, isLoading, isError, error } = useMovies();

  const handleSearchTerm = (inputValue: string) => {
    setSearchTerm(inputValue);
  };

  console.log(movies);

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
