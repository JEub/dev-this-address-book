import { useState } from "react";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { currentUser, currentPassword } from '../states';
import '../styles/Login.css';


const UserLogin =({showLogin, setShowLogin}) => {

    const [loggedInUser,setLoggedInUser] = useRecoilState(currentUser);
    const [password, setPassword] = useRecoilState(currentPassword);

    // const handleChange = (e) => {
    //     setLoggedInUser({
    //         ...currentUser,
    //         [e.target.name]: e.target.value
    //     })
    //     setPassword({
    //         ...currentPassword,
    //         [e.target.name]: e.target.value
    //     })
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowLogin((current) => !current);
    }

    if (!showLogin) {
        return (
            null
        )
    }

    return (
        <div className="login" onClick={() => setShowLogin(false)}>
        <div className="loginContent" onClick={e => e.stopPropagation()}>
            <div className="loginHeader">
                <h3>User Login</h3>
            </div>
            <form action="submit" onSubmit={handleSubmit}>
                <label htmlFor="username" className="sr-only">Username</label>
                <input type="text" name="username" id="username" placeholder="Username" value={currentUser.username} onChange={(e) => {setLoggedInUser(e.target.value)}} required/>
                <label htmlFor="password" className="sr-only">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" value={currentPassword.password} onChange={(e) => {setPassword(e.target.value)}} required/>
                <button className="submitButton">Submit</button>
            </form>
        </div>
    </div>
    )
}

export default UserLogin;