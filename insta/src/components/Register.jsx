import React from "react"
import "../styles/register.css"

const Register = () => {
    return (
        <div className="registerContainer">
            <h3>Register</h3>
            <div>
                <input type="email" name="email"/>
            </div>
            <div>
                <input type="password" name="password" />
            </div>
            <button>
               Ragister
            </button>
            <button className="link"> Register</button>
        </div>
    )
}

export default Register