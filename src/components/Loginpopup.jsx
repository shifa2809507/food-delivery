import React, { useState } from 'react'
import './Loginpopup.css'
import crossicon from "../assets/cross_icon.png";


const Loginpopup = ({ setShowLogin }) => {
    const[currentstate,setCurrentState]=useState("Login")
  return (
    <div className='login-popup'>
        <form  className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentstate}</h2>
              
                    <img src={crossicon} alt="" onClick={()=>setShowLogin(false)} />
              
                
            </div>
            <div className="login-popup-input">
                {currentstate==="Login"?<></>:<input type="text" placeholder="your name " required/>}
                <input type="email" placeholder="your email" required />
                <input type="password" placeholder="password" required />
            </div>
            <button>{currentstate === "Sign up" ? "Create account" : "Login"}</button>
            <div className="login-popup-condtion">
                <input type="checkbox" required/>
                <p>By continuing,i agree to the terms of use & privacy ploicy</p>
            </div>
            {currentstate==="Login"
            ?<p>Create a new Account? <span onClick={()=>setCurrentState("Sign up")}>Click here</span></p>
            : <p>Already have an acconut?<span onClick={()=>setCurrentState("Login")}>Login here</span></p>
        }
          



        </form>



    </div>
  )
}

export default Loginpopup