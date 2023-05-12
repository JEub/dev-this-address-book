import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import API from "../utils/API";
const Nav = (props) => {
    const { userInfo } = props;
    const wrap = {
        border: "3px solid black",
        padding:"10px"
    }
    const container = {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
		marginBottom:"5px",
    };
    const unit = {
        width: "50%",
        display: "flex",
        alignItems:"left",
        marginTop: "10px"
    };
    const button = {
        width: "200px",
        border: "3px solid limegreen",
        borderRadius: "50px",
        color: "black"
    };

    return (
        <div style={wrap}>
            <div style={container}>
                <h3 style={unit}>Pawnee: Parks and Rec Dept.</h3>
                {/* paths needed for to */}
                {/* <Link to="/api/newCustomer">
                Add Customer
            </Link>
            <Link to="/api/logout">
                Logout
            </Link> */}
                <button style={button}>
                    <a href="/">Add Customer</a>
                </button>
            </div>
            <div style={container}>
                <button style={button}>
                    <a href="/">Logout</a>
                </button>
                <SearchBar
                    
                    userInfo={userInfo}
                    style={unit}
                />
            </div>
        </div>
    );
};

export default Nav;
