import React from "react"
import "../styles/Login.css"

const Login = () => {
    return ( 
        <div className="loginContainer">
            <h3>Login</h3>
            <div>
                <input type="email" name="email" placeholder="email"/>
            </div>
            <div>
                <input type="password" name="password" placeholder="password"/>
            </div>
            <button>
                Login
            </button>
            <button className="link"> Register</button>
        </div>
    )
}

export default Login