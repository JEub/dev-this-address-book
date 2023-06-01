import {currentSearchTerm, modalData, modalState} from "../states";
import {useRecoilState, useRecoilValue} from "recoil";
import {useState} from 'react';


const Main = (props)=>{
    // will need to add keys here for firstName, lastName, address
    const currentSearchValue = useRecoilValue(currentSearchTerm);
    const [modalCustomerData, setModalData] = useRecoilState(modalData);
    const [modalVisibilityState, setModalState] = useRecoilState(modalState);
    const [customerState, setState] = useState([{
        _id: "C91G92CJ77YP8NW6T5VYG862",
        firstName: "Lawrence ",
        lastName: "Bennett",
        street1: "1826 Elk Street",
        city: "Irvine",
        state: "California"
    },{
        _id: "ECS7OSQY0APQX30KV8MZVOAG",
        firstName: "Ralph",
        lastName: "Horstman",
        street1: "3239 Lauren Drive",
        city: "Madison",
        state: "Wisconsin"
    },{
        _id: "HFJ949U32DGICT4ZOBDRBENV",
        firstName: "Christopher",
        lastName: "Thomas",
        street1: "3282 Ritter Street",
        city: "Lexington",
        state: "Alabama"
    },{
        _id: "9JA0JZYH4G79RAHDQO4J0UR0",
        firstName: "Connie",
        lastName: "Turk",
        street1: "3444 Upland Avenue",
        city: "Holland",
        state: "Ohio"
    }])
    //Customer state includes Name, Address, Hardcoded data for the time being until backend finishes API Routes
    
    return (
        <>
            {customerState ? (
                <div className="row" >
                    {customerState.filter(customer => {
                        if (!currentSearchValue){
                            return customer;
                        } else if (customer.firstName.toLowerCase().includes(currentSearchValue.toLowerCase())) {
                            return customer;
                        }
                    }).map(customer => (
                        <div className="customerCard" id={customer._id} key={customer._id}>
                            <div className="customerCardBody">
                                <div className="customerCardName">{customer.firstName} {customer.lastName}</div>

                                <div className="customerCardStreetAddress">{customer.street1}, {customer.city}, {customer.state}</div>
                                <div className="customerCardButtons">
                                    <button onClick={() => {
                                        setModalState(true);
                                        setModalData({firstName: customer.firstName,
                                        lastName: customer.lastName,
                                        street1: customer.street1,
                                        street2: "",
                                        city: customer.city,
                                        state: customer.state});
                                        }}>View Customer</button>
                                <button onClick={() => {
                                        setModalState(true);
                                        setModalData({firstName: customer.firstName,
                                        lastName: customer.lastName,
                                        street1: customer.street1,
                                        street2: "",
                                        city: customer.city,
                                        state: customer.state});
                                        }}>Edit Customer</button></div>
                            </div>
                            
                        </div>
                    ))}
                </div>
            ) : (
                <div><h3>There are no customers to display.</h3></div>
            )}
        </>
    );

}
export default Main;