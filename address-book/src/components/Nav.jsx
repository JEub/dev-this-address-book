// import { Link } from "react-router-dom";
import "./Nav.css";
import SearchBar from "./SearchBar";
// import API from "../utils/API";
const Nav = (props) => {
    const { userInfo } = props;
    return (
        <div id="wrap">
            <div id="container">
                <h3 id="unit">Pawnee: Parks and Rec Dept.</h3>
                {/* paths needed for to */}
                {/* <Link to="/api/newCustomer">
                Add Customer
                </Link>
                <Link to="/api/logout">
                Logout
                </Link> */}
                <button id="button">
                    <a href="/">Add Customer</a>
                </button>
            </div>
            <div id="container">
                <button id="button">
                    <a href="/">Logout</a>
                </button>
                <SearchBar userInfo={userInfo} id="unit"/>
            </div>
        </div>
    );
};

export default Nav;
