import "../styles/Nav.css";
import SearchBar from "./SearchBar";

const Nav = (props) => {
    const { userInfo } = props;

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
                <a href="/">Add Customer</a>
                
                
            </div>
            <div id="container">
                <a href="/">Logout</a>
                <SearchBar userInfo={userInfo} className="unit"/>
            </div>
        </div>
    );
};

export default Nav;
