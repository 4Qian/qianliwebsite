import React, { useState, useEffect } from 'react';
import { fetchLogin } from '../../../fake-services/fake-services';
import '../../../css/pages/blog/Login.css'

function Login({ setLoggedInUser, loggedInUser }) {
    const [data, setData] = useState({
        username: ""
    })

    const [inputUserName, setInputUserName] = useState("");
    const [loginResponse, setLoginResponse] = useState("")
    const { username } = data;
    const [isLoading, setIsLoading] = useState(false);

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: [e.target.value] });
    }

    const submitHandler = e => {
        e.preventDefault();
        setIsLoading(true);
        setInputUserName(data.username[0]);
    }

    useEffect(
        () => {
            fetchLogin(inputUserName)
                .then(result => {
                    setLoggedInUser(inputUserName);
                    setLoginResponse("Login Successful");
                    setIsLoading(false);
                })
                .catch(error => {
                    if (inputUserName !== "") {
                        setLoginResponse("Login Failed: " + error.error + '. Please try another user name!')
                    }
                    setIsLoading(false);
                });
        },
        [inputUserName, setLoggedInUser]);

    return (
        <div className='login-box'>
            <span className='login-title' id='main-content'>Please log in to see my blog. Thank you!</span>
            <form
                className='login-form'
                onSubmit={submitHandler}>
                < div className='login-content-box'>
                    <span className='login-text'>User Name:</span>
                    <input
                        className='login-input'
                        type="text"
                        name="username"
                        value={username}
                        required={true}
                        onChange={changeHandler} />
                    <input
                        className='login-sub'
                        type="submit"
                        name="submit"
                        onClick={(e) => {
                            submitHandler(e);
                        }} />
                </div>
            </form>
            {isLoading && <div className='gg-spinner'></div>}
            <div>
                {loginResponse}
            </div>
        </div>
    );
}

export default Login;