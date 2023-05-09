// import { useState } from "react";
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
    const button = {
        width: "80px",
        border: "3px solid limegreen",
        borderRadius: "50px",
        color: "black"
    };
    const box={
        border:"2px solid limegreen",
        color: "black"
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    onChange={(e)=>{setSearchInput(e.target.value)}}
                    value={searchInput}
                    style={box}
                ></input>
                <button type="submit" style={button}>Search</button>
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
