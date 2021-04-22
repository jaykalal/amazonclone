import React, { useState } from 'react'
import "./register.css"
import { Link } from "react-router-dom"
import { postRequest } from '../../apis/API';

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = (event) => {
        event.preventDefault();
        const data = {
            name, email, password
        }
        postRequest("/users/register", data).then((data) => {
            console.log('data', data);
            if (data) {
                window.location.href = '/login';
            }
        }).catch((e) => {
            console.log('Error in user login', e);
            alert("Failed to register user!");
        })
    }
    return (
        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login__logo" />
            </Link>
            <div className="login__container">
                <h1>Sign up</h1>
                <form>
                    <h5>Name:</h5>
                    <input value={name} onChange={event => setName(event.target.value)} type="text" />

                    <h5>Email:</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />

                    <h5>Password:</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />

                    <button type="submit" onClick={register} className="login__signInBtn">sign up</button>
                    <p>
                        by signing in you agree to amazon condition of use and sale.Please see our privacy notice, our cookies notice and our interest based ad notice.
                    </p>
                    <Link to={'/login'}>
                        <button className="login__registerBtn">sign in to your amazon account</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Register;
