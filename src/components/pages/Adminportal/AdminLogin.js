import React, { useState } from 'react'
import './AdminLogin.css'
import {useNavigate} from "react-router-dom";

import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
// import login_image from './assets/loginimage.jpg'

const LoginSignup = () => {
    const navigate=useNavigate()

    // const [action,setAction] = useState("Sign Up");
    const AdminRedirect=()=>{
      navigate("/admin-options",{})
    }
  return (
        <div className='container-right'>
          <div className="header">
            {/* <div className="text">{action}</div> */}
            <div className="text">Admin Login</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Admin Username" />
            </div>
         
            <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
            </div>
            </div>
            {/* {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click here!</span></div>} */}
            
            <div className="submit-container">
                {/* <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div> */}
                <div className='login-button' onClick={AdminRedirect}>Login</div>
            </div>
            {/* <div className='Admin'>Are you an Admin? <span onClick={handleAdmin}>Log in</span></div> */}
        </div>
  )
}

export default LoginSignup