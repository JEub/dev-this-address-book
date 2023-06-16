import "../styles/Nav.css";
import SearchBar from "./SearchBar";

// required for logout we need to clear cookie
// axios.post('http://localhost:8000/api/logout', {}, {withCredentials: true})
const Nav = (props) => {
  const { userInfo, setShowModal } = props;

  return (
    <nav>
      <div className="container">
        <h1>Pawnee: Parks and Rec Dept.</h1>
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="button"
        >
          Add Customer
        </button>
      </div>
      <div className="container">
        <a href="/">Logout</a>
        <SearchBar userInfo={userInfo} className="unit" />
      </div>
    </nav>
  );
};

export default Nav;
