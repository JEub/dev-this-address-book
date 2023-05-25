import { useState } from "react";
import {useRecoilState, useSetRecoilState} from "recoil";

import '../styles/UserModal.css';

const UserModal = ({showModal, setShowModal, modalData}) => {

    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        street1: "",
        street2: "",
        city: "",
        state: ""
    });

    
    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    if (!showModal) {
        return (
            null
        )
    }

    return (
        <div className="modal" onClick={() => setShowModal(false)}>
            <div className="modalContent" onClick={e => e.stopPropagation()}>
                <div className="modalHeader">
                    <h3>Form!</h3>
                    <button onClick={() => {setShowModal(false)}}>Close</button>
                </div>
                <form action="submit">
                    <label htmlFor="firstName" className="sr-only">First Name</label>
                    <input type="text" name="firstName" id="firstName" placeholder="First Name" value={userInfo.firstName} onChange={handleChange} required/>

                    <label htmlFor="lastName" className="sr-only">Last Name</label>
                    <input type="text" name="lastName" id="lastName" placeholder="Last Name" value={userInfo.lastName} onChange={handleChange} required/>

                    <label htmlFor="street1" className="sr-only">Street Address</label>
                    <input type="text" name="street1" id="street1" placeholder="Street Address" value={userInfo.street1} onChange={handleChange} required/>

                    <label htmlFor="street2" className="sr-only">Street Address 2</label>
                    <input type="text" name="street2" id="street2" placeholder="Street Address 2" value={userInfo.street2} onChange={handleChange}/>

                    <label htmlFor="city" className="sr-only">City</label>
                    <input type="text" name="city" id="city" placeholder="City" value={userInfo.city} onChange={handleChange} required/>

                    <label htmlFor="state" className="sr-only">State</label>
                    <select name="state" id="state" value={userInfo.state} onChange={handleChange} required>
                        <option value="" disabled>State</option>
                        <option value="AL">AL</option>
                        <option value="AK">AK</option>
                        <option value="AZ">AZ</option>
                    </select>
                    
                    <button className="submitButton">Edit/Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UserModal;