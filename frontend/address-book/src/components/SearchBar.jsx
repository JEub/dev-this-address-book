import { useRecoilState } from "recoil";
import { searchInputState, currentSearchTerm } from "../reactstates";
const SearchBar = () => {
  const [searchInput, setSearchInput] = useRecoilState(searchInputState);
  const [currentSearchValue, setCurrentSearchValue] = useRecoilState(currentSearchTerm);
  // connect to database for search results?
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentSearchValue(searchInput);
    setSearchInput("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="searchForm">
        <label htmlFor="sinput" className="sr-only">
          What are you looking for?
        </label>
        <input
          type="text"
          placeholder="What are you looking for?"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          value={searchInput}
          id="sinput"
        ></input>
        <button type="submit" id="searchb">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
