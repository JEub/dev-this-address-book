import { useRecoilState } from "recoil";
import { searchInputState, currentSearchTerm } from "../reactstates";
const SearchBar = ({ userInfo }) => {
  const [searchInput, setSearchInput] = useRecoilState(searchInputState);
  const [setCurrentSearchValue] = useRecoilState(currentSearchTerm);
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
      {/* <div>
                need to lift userInfo state from UserModal via props
                {userInfo.map((firstName, index) => {
                    <ul>
                        <li>{userInfo.firstName}</li>
                        <li>{userInfo.lastName}</li>
                        <li>{userInfo.street1}</li>
                        <li>{userInfo.street2}</li>
                        <li>{userInfo.city}</li>
                        <li>{userInfo.state}</li>
                    </ul>;
                })}
            </div> */}
    </>
  );
};

export default SearchBar;
