import {currentSearchTerm, currentUser} from "../states";
import {useRecoilValue} from "recoil";


const Main = (props)=>{
    // will need to add keys here for firstName, lastName, address
    const currentState = useRecoilValue(currentSearchTerm);
    const loggedInUser = useRecoilValue(currentUser)
    return (
        <>
            <p>The current search is: {currentState}</p>
            <p>Current logged in user is: {loggedInUser}</p>
        </>
    );

}
export default Main;