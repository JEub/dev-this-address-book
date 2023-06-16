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
        <div id = "wrap">
            <div id = "container">
                <h3 className = "unit">Pawnee: Parks and Rec Dept.</h3>
                <button onClick={()=>{
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
                    }} id="button">Add Customer</button>
            </div>
            <div id = "container">
                <a href = "/">Logout</a>
                <SearchBar userInfo = {userInfo} className = "unit"/>
            </div>
        </div>
    );
};

export default Nav;
