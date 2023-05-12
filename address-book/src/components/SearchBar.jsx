// import { useState } from "react";
import "./Nav.css";
import {useRecoilState, useSetRecoilState} from "recoil";
import { searchInputState,currentSearchTerm } from '../states';
const SearchBar = () => {
    const [searchInput, setSearchInput]= useRecoilState(searchInputState);
    const [currentSearchValue,setCurrentSearchValue]= useRecoilState(currentSearchTerm );
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
                    className='sinput'
                    type="text"
                    placeholder="What are you looking for?"
                    onChange={(e)=>{setSearchInput(e.target.value)}}
                    value={searchInput}>
                </input>
                <button className="searchbutton" type="submit" >Search</button>
            </form>
            <div>
                {/* need to lift userInfo state from UserModal via props */}
                {/* {props.userInfo.map((firstName, index) => {
                    <ul>
                        <li>{props.userInfo.firstName}</li>
                    </ul>;
                })} */}
            </div>
        </div>
    );
};

export default SearchBar;
