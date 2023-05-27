import {useRecoilState, useSetRecoilState} from "recoil";
import { searchInputState,currentSearchTerm } from '../reactstates';
const SearchBar = (props) => {
    const {userInfo} = props
    const [searchInput, setSearchInput] = useRecoilState(searchInputState);
    const [currentSearchValue, setCurrentSearchValue] = useRecoilState(currentSearchTerm );
    // connect to database for search results?
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchInput);
        setCurrentSearchValue(searchInput);
        setSearchInput("");
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type = "text"
                    placeholder = "What are you looking for?"
                    onChange = {(e) => {setSearchInput(e.target.value)}}
                    value = {searchInput}
                    id = "sinput"
                ></input>
                <button type = "submit" id = "searchb">Search</button>
            </form>
            <div>
                {/* need to lift userInfo state from UserModal via props */}
                {/* {props.userInfo.map((firstName, index) => {
                    <ul>
                        <li>{props.userInfo.firstName}</li>
                        <li>{props.userInfo.lastName}</li>
                        <li>{props.userInfo.street1}</li>
                        <li>{props.userInfo.street2}</li>
                        <li>{props.userInfo.city}</li>
                        <li>{props.userInfo.state}</li>
                    </ul>;
                })} */}
            </div>
        </div>
    );
};

export default SearchBar;
