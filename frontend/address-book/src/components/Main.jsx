import {currentSearchTerm} from "../reactstates";
import {useRecoilValue} from "recoil";


const Main = (props)=>{
    // will need to add keys here for firstName, lastName, address
    const currentState = useRecoilValue(currentSearchTerm);
    return (
        <>
            <p>The current search is: {currentState}</p>
        </>
    );

}
export default Main;