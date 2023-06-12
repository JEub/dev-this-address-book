import { useState } from "react";
import axios from 'axios';

import '../styles/UserModal.css';

const UserModal = ({showModal, setShowModal}) => {
    const [errors,setErrors] = useState([])

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

    // User Modal needs a submit handler to handle post and put routes on form submission
    const onSubmitHandler = (e)=> {
        e.preventDefault();
        axios.post(`http://localhost:5173/api/customers/createCustomer`, {userInfo})
            .then(res =>{
                console.log(userInfo);
                setUserInfo({
                    firstName: "",
                    lastName: "",
                    street1: "",
                    street2: "",
                    city: "",
                    state: ""
                });
                setShowModal(false);
            })
            .catch(err => {
                console.log({msg:'Posting Error',err:err});
                console.log(err.request);
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
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="firstName" className="sr-only">First Name</label>
                    <input type="text" name="firstName" id="firstName" placeholder="First Name" value={userInfo.firstName} onChange={handleChange} required/>
                    {errors.firstName ?
                    <p >{errors.firstName.message}</p>
                    :null
                    }

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