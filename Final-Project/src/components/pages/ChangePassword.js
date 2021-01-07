import axios from 'axios';
import React, {useContext, useState} from 'react';
import {UserContext} from '../Context/UserProvider';
import {useHistory} from 'react-router-dom';
import {Alert} from 'antd';

const ChangePassword = () => {
    const [user, setUser] = useContext(UserContext);
    const [input, setInput] = useState({currentPassword: "", newPassword: "", confirmPassword: ""});
    const history = useHistory();

    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name
        switch (name){
        case "currentPassword":{
            setInput({...input, currentPassword: value})
            break;
        }
        case "newPassword":{
            setInput({...input, newPassword: value})
            break;
        }
        case "confirmPassword":{
            setInput({...input, confirmPassword: value})
            break;
        }
        default:{break;}
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`https://backendexample.sanbersy.com/api/change-password`,
        {
            current_password: input.currentPassword,
            new_password: input.newPassword,
            new_confirm_password: input.confirmPassword
        },
        {headers: {"Authorization" : `Bearer ${user.token}`}}
        ).then((res) => {
            setInput({
                currentPassword: "",
                newPassword: "",
                confirmPassword: ""
            });
            alert("Success");
            
        }).catch((err) => {
            setInput({
                currentPassword: "",
                newPassword: "",
                confirmPassword: ""
            });
            alert("Wrong Input");
        })
    }
    return (
        <div className="changePassword">
            <form onSubmit={handleSubmit}>
                <h1>ChangePassword</h1>
                <input type="password" name="currentPassword" placeholder="Current Password" className="input-auth" value={input.currentPassword} onChange={handleChange}/>
                <input type="password" name="newPassword" placeholder="New Password" className="input-auth" value={input.newPassword} onChange={handleChange}/>
                <input type="password" name="confirmPassword" placeholder="Confirm New Password" className="input-auth" value={input.confirmPassword} onChange={handleChange} />
                <input type="submit" value="Change Password" className="button-changePassword"/>
            </form>
        </div>
    )
}

export default ChangePassword;