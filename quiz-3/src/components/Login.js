import React, {useState, useEffect, useContext} from 'react';
import {AuthContext} from './Context/AuthProvider';
import {useHistory} from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggin, setIsLoggin] = useContext(AuthContext);
    const history = useHistory();

    const handleLogin = (event) => {
        if (username === "admin" && password === "admin") {
            event.preventDefault();
            setIsLoggin(true);
            history.push("/");
        } else {
            event.preventDefault();
            alert("Incorrect username and password combination");
        }
    }
    return (
        <div className="login-page">
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <label for="username"><b>Username</b></label>
                    <input type="text" className="login-input" value={username} onChange={(event)=>setUsername(event.target.value)}/>

                    <label for="password"><b>Password</b></label>
                    <input type="password" className="login-input" value={password} onChange={(event)=>setPassword(event.target.value)}/>

                    <input type="submit" value="Login" className="button button-login"/>
                </form>
            </div>
        </div>
    )
}

export default Login;