// import { Link } from "react-router-dom";
// import API from "../utils/API";
import "./Nav.css";
import SearchBar from "./SearchBar";

const Nav = (props) => {
    const { userInfo } = props;
    // const wrap = {
    //     border: "3px solid black",
    //     padding:"10px"
    // }
    // const container = {
    //     width: "100%",
    //     display: "flex",
    //     flexDirection: "row",
    //     flexWrap: "wrap",
    //     justifyContent: "space-between",
	// 	marginBottom:"5px",
    // };
    // const unit = {
    //     width: "50%",
    //     display: "flex",
    //     alignItems:"left",
    //     marginTop: "10px"
    // };
    // const button = {
    //     width: "200px",
    //     border: "3px solid limegreen",
    //     borderRadius: "50px",
    //     color: "black"
    // };

    return (
        <div id="wrap">
            <div id="container">
                <h3 className="unit">Pawnee: Parks and Rec Dept.</h3>
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
                <SearchBar userInfo={userInfo} className="unit"/>
            </div>
        </div>
    );
};

export default Nav;
