import '../styles/Nav.css';
import SearchBar from './SearchBar';

// required for logout we need to clear cookie
// axios.post('http://localhost:8000/api/logout', {}, {withCredentials: true})
const Nav = (props) => {
    const { userInfo, showModal, setShowModal } = props;

    return (
        <div id = "wrap">
            <div id = "container">
                <h3 className = "unit">Pawnee: Parks and Rec Dept.</h3>
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
