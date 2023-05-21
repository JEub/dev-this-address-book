import { useState } from "react";

import '../styles/Login.css';


const UserLogin =({showLogin, setShowLogin}) => {

    const [LoginState, setLoginState] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginState({
            ...LoginState,
            [e.target.name]: e.target.value
        })
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
            <form action="submit">
                <label htmlFor="username" className="sr-only">Username</label>
                <input type="text" name="username" id="username" placeholder="Username" value={LoginState.username} onChange={handleChange} required/>
                <label htmlFor="password" className="sr-only"></label>
                <input type="password" name="password" id="password" placeholder="Password" value={LoginState.password} onChange={handleChange} required/>
                <button className="submitButton">Submit</button>
            </form>
        </div>
    </div>
    )
}

export default UserLogin;