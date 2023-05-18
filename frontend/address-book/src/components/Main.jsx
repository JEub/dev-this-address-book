import {currentSearchTerm} from "../reactstates";
import {useRecoilValue} from "recoil";


const Main = (props)=>{
    {/* When displaying the state do we want to lift state through props or create an atom through recoil */}
    const currentState = useRecoilValue(currentSearchTerm);
    return (
        <>
            <p>The current search is: {currentState}</p>
        </>
    );

}
export default Main;