import '../styles/Nav.css';
import SearchBar from './SearchBar';
import { useRecoilState } from 'recoil';
import { currentModalEditState, currentModalData } from '../reactstates';

// required for logout we need to clear cookie
// axios.post('http://localhost:8000/api/logout', {}, {withCredentials: true})
const Nav = (props) => {
    const {showModal, setShowModal } = props;
    const [modalEditableState, setModalEditableState] = useRecoilState(currentModalEditState);
    const [userInfo,setUserInfo] = useRecoilState(currentModalData);

  return (
    <nav>
      <div className="container">
        <h1>Pawnee: Parks and Rec Dept.</h1>
        <button
          onClick={() => {
            
                    setModalEditableState(false);
                    setUserInfo({
                        firstName: "",
                        lastName: "",
                        street1: "",
                        street2: "",
                        city: "",
                        state: ""
                    })
                    setShowModal(true)
                    ;
          }}
          className="button"
        >
          Add Customer
        </button>
      </div>
      <div className="container">
        <a href="/">Logout</a>
        <SearchBar className="unit" />
      </div>
    </nav>
  );
};

export default Nav;
