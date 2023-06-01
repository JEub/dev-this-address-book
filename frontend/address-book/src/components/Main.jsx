import {currentSearchTerm} from "../reactstates";
import {useRecoilValue} from "recoil";
import {useEffect} from 'react';
import axios from 'axios';

const Main = (props) => {
    const {userInfo, setUserInfo} = props
    {/* When displaying the state do we want to lift state through props or create an atom through recoil */}
    const currentState = useRecoilValue(currentSearchTerm);

    useEffect(()=>{
        axios.get("http://localhost:5173/api/customers/findAllCustomers")
        .then((res)=>{
            // console.log(res.data);
            setUserInfo(res.data);
            console.log(userInfo);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [userInfo])
    return (
        <>
            <p>The current search is: {currentState}</p>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Street1</th>
                        <th>Street2</th>
                        <th>City</th>
                        <th>State</th>
                    </tr>
                </thead>
                {userInfo ? (
                    userInfo.map((userInfo, index) => (
                    <tbody>
                        <tr key={index}>
                            <td>{userInfo.firstName}</td>
                            <td>{userInfo.lastName}</td>
                            <td>{userInfo.street1}</td>
                            <td>{userInfo.street2}</td>
                            <td>{userInfo.city}</td>
                            <td>{userInfo.state}</td>
                        </tr>
                    </tbody>)))
                    :null
                }
                
            </table>
        </>
    );
}
export default Main;