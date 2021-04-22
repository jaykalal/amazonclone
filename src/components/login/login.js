import React, { useState } from 'react'
import "./login.css"
import { Link } from "react-router-dom"
import { postRequest } from '../../apis/API';
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (event) => {
        event.preventDefault();
        const data = {
            email, password
        }
        postRequest("/auth", data).then((data) => {
            console.log('data', data);
            if (data) {
                localStorage.setItem('token', data);
                window.location.href = '/';
            }
        }).catch((e) => {
            console.log('Error in user login', e);
            alert("User credentials are invalid!");
        })
    }

    return (
        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login__logo" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email:</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />

                    <h5>Password:</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />

                    <button type="submit" onClick={signIn} className="login__signInBtn">sign in</button>
                    <p>
                        by signing in you agree to amazon condition of use and sale.Please see our privacy notice, our cookies notice and our interest based ad notice.
                    </p>
                    <Link to={'/register'}>
                        <button className="login__registerBtn">create your amazon account</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login
