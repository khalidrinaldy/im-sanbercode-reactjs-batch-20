import axios from 'axios';
import React, {useContext, useState} from 'react';
import {UserContext} from '../Context/UserProvider';
import {useHistory} from 'react-router-dom';

const Register = () => {
    const [user, setUser] = useContext(UserContext);
    const [input, setInput] = useState({name: "", email: "", password: ""});
    const history = useHistory();

    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name
        switch (name){
        case "name":{
            setInput({...input, name: value})
            break;
        }
        case "email":{
            setInput({...input, email: value})
            break;
        }
        case "password":{
            setInput({...input, password: value})
            break;
        }
        default:{break;}
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`https://backendexample.sanbersy.com/api/register`,
        {
            name: input.name,
            email: input.email,
            password: input.password
        }).then((res) => {
            let user = res.data.user;
            let token = res.data.token;
            let currentUser = {name: user.name, email: user.email, token};
            setUser(currentUser);
            localStorage.setItem("user", JSON.stringify(currentUser));
            history.push("/");
        }).catch((err) => {alert(err)})
    }
    return (
        <div className="register">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <input type="text" name="name" placeholder="Name" className="input-auth" value={input.name} onChange={handleChange}/>
                <input type="text" name="email" placeholder="Email" className="input-auth" value={input.email} onChange={handleChange}/>
                <input type="password" name="password" placeholder="Password" className="input-auth" value={input.password} onChange={handleChange} />
                <input type="submit" value="Sign Up" className="button-register"/>
            </form>
        </div>
    )
}

export default Register;