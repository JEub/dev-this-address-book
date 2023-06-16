import { useState } from "react";
import {useRecoilState, useSetRecoilState} from 'recoil'
import { currentModalEditState, currentModalData } from "../reactstates";
import usStatesData from "../modalData/usStateData.json";
import axios from 'axios';

import '../styles/UserModal.css';

const UserModal = ({showModal, setShowModal}) => {
    const [errors,setErrors] = useState([])
    const [modalEditableState, setModalEditableState] = useRecoilState(currentModalEditState);
    const [userInfo, setUserInfo] = useRecoilState(currentModalData);
    
    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }
    const deleteUser = () => {
        axios.delete(`http://localhost:5172/api/customers/deleteCustomer/${userInfo._id}`)
        .then(() => {
            console.log({msg:`User ${userInfo.firstName} has been deleted`})
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
            console.log({msg:`Error deleting User ${userInfo.firstName} ${userInfo.lastName}`, err: err})
        })
    }
    // User Modal needs a submit handler to handle post and put routes on form submission
    const onSubmitHandler = (e)=> {
        e.preventDefault();
        if(!userInfo._id)
        {
            axios.post(`http://localhost:5172/api/customers/createCustomer`, {userInfo})
                .then(() => {
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
        } else {
            axios.get(`http://localhost:5172/api/customers/findCustomer/${userInfo._id}`)
            .then(() => {
                axios.put(`http://localhost:5172/api/customers/editCustomer/${userInfo._id}`, {userInfo})
                .then(res => {
                    console.log({msg: "User Updated"});
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
                    console.log({msg: "Error Updating User", err: err});
                })
            })
            .catch(err => {
                console.log({msg: "Error Updating User", err: err});
            })
        }
    }

    if (!showModal) {
        return (
            null
        )
    }

  return (
    <div
      className="modal"
      role="alertdialog"
      aria-modal={true}
      aria-labelledby="dialog_label"
      onClick={() => setShowModal(false)}
    >
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <h2 id="dialog_label">User Information</h2>
          <button
            onClick={() => {
              setShowModal(false);
              setModalEditableState(true);
            }}
            className="modalButton"
          >
            Close
          </button>
        </div>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="firstName" className="sr-only">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={userInfo.firstName}
            onChange={handleChange}
            disabled={modalEditableState}
            required
          />
          {errors.firstName ? <p>{errors.firstName.message}</p> : null}

          <label htmlFor="lastName" className="sr-only">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={userInfo.lastName}
            onChange={handleChange}
            disabled={modalEditableState}
            required
          />

          <label htmlFor="street1" className="sr-only">
            Street Address
          </label>
          <input
            type="text"
            name="street1"
            id="street1"
            placeholder="Street Address"
            value={userInfo.street1}
            onChange={handleChange}
            disabled={modalEditableState}
            required
          />

          <label htmlFor="street2" className="sr-only">
            Street Address 2
          </label>
          <input
            type="text"
            name="street2"
            id="street2"
            placeholder="Street Address 2"
            value={userInfo.street2}
            onChange={handleChange}
            disabled={modalEditableState}
          />

          <label htmlFor="city" className="sr-only">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="City"
            value={userInfo.city}
            onChange={handleChange}
            disabled={modalEditableState}
            required
          />

          <label htmlFor="state" className="sr-only">
            State
          </label>
          <select
            name="state"
            id="state"
            value={userInfo.state}
            onChange={handleChange}
            disabled={modalEditableState}
            required
          >
            <option value="" disabled>
              State
            </option>
            {usStatesData.map((singleState) => {
              return (
                <option key={singleState} value={singleState}>
                  {singleState}
                </option>
              );
            })}
          </select>
          {userInfo._id ? (
                        <button className={`${modalEditableState ? "modalButtonDisabled" : "modalButton"} `} onClick={deleteUser} disabled={modalEditableState}>Delete</button>
                    ):null}
          <button className={`${modalEditableState ? "modalButtonDisabled" : "modalButton"} `} disabled={modalEditableState}>Edit/Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UserModal;
