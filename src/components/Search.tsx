type SearchProps = {
    searchTerm: string
    handleSearchTerm: (inputValue: string) => void
}
const Search = ({searchTerm, handleSearchTerm}: SearchProps) => {
    return (
        <div className="search">
          <div>
            <img src="search.svg" alt="search" />

            <input type="text" placeholder="Search through thousands of movies" value={searchTerm} onChange={(e) => handleSearchTerm(e.target.value)} />
          </div>
        </div>
    );
};

export default Search;