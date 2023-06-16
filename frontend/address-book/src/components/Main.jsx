import { currentModalData, currentModalState, currentModalEditState, currentSearchTerm } from "../reactstates";
import { useRecoilValue, useRecoilState } from "recoil";
import { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/Main.css";

const Main = () => {
    const [userInfo, setUserInfo] = useState();
    const [modalContent, setModalContent] = useRecoilState(currentModalData);
    const [modalState, setModalState] = useRecoilState(currentModalState);
    const [modalEditableState, setModalEditableState] = useRecoilState(currentModalEditState);
    const currentSearchValue = useRecoilValue(currentSearchTerm);



    useEffect(() => {
        axios.get("http://localhost:5172/api/customers/findCustomers/all")
            .then(res => {
                setUserInfo(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [userInfo])
    return (
        <main>
            <div className="wrapper">
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
                        <tbody>
                            {userInfo.filter(user => {
                                if (!currentSearchValue) {
                                    return user
                                } else if (user.firstName.toLowerCase().includes(currentSearchValue.toLowerCase()) ||
                                    user.lastName.toLowerCase().includes(currentSearchValue.toLowerCase()) ||
                                    user.street1.toLowerCase().includes(currentSearchValue.toLowerCase()) ||
                                    user.street2.toLowerCase().includes(currentSearchValue.toLowerCase()) ||
                                    user.city.toLowerCase().includes(currentSearchValue.toLowerCase()) ||
                                    user.state.toLowerCase().includes(currentSearchValue.toLowerCase())) {
                                    return user
                                }
                            }).map(user => {
                                return (
                                    <tr key={user._id}>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.street1}</td>
                                        <td>{user.street2 ? user.street2 : null}</td>
                                        <td>{user.city}</td>
                                        <td>{user.state}</td>
                                        <td><button className="button" onClick={() => {
                                            setModalContent(user)
                                            setModalEditableState(true)
                                            setModalState(true)
                                        }}>View Customer</button></td>
                                        <td><button className="button" onClick={() => {
                                            setModalContent(user)
                                            setModalEditableState(false)
                                            setModalState(true)
                                        }}>Edit Customer</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    ) : (
                        <tbody>
                            <tr>
                                <td>There is nothing to display</td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
        </main>
    );
}
export default Main;
