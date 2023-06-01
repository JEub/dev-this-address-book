import '../styles/Nav.css';
import SearchBar from './SearchBar';
// import {NavLink} from 'react-router-dom';

const Nav = (props) => {
    const { userInfo, showModal, setShowModal } = props;

    return (
        <div id = "wrap">
            <div id = "container">
                <h3 className = "unit">Pawnee: Parks and Rec Dept.</h3>
                {/* paths needed for to */}
                {/* <NavLink to="/customers/createCustomer"></NavLink> */}
            {/*<Link to="/api/logout">
                Logout
            </Link> */}
                <button onClick={()=>{setShowModal(true)}} id="button">Add Customer</button>
            </div>
            <div id = "container">
                <a href = "/">Logout</a>
                <SearchBar userInfo = {userInfo} className = "unit"/>
            </div>
        </div>
    );
};

export default Nav;
