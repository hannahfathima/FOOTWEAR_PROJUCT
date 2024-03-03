import React, { useState } from 'react'
import './CustomerLogin.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const CustomerLogin = () => {
    const navigate=useNavigate()
    const [val,setVal]=useState({
        email:"",
        password:""
    })
    const GetData=(e)=>{
        setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
        console.log(val);
    }

    const Login=async(e)=>{
        e.preventDefault()
        const res=await axios.post("http://localhost:2000/footwear/customerLogin",{...val})
        console.log(res.data);
        const data=res.data
        if(res){
            alert("Seccessfully Logined")
            const customer_token=data.token
            localStorage.setItem("customer_token",JSON.stringify(customer_token))
            navigate("/")
        }
    }
    
  return (
    <div className='CustomerReg-main'>
        {/* <div className="CustRegMain">
        <div className="CustRegLeft">
          <Link className='backBtn' to='/'>Back</Link>
          <div className="CusRegLeftContent">
            <h1>Sports Track.</h1>
            <div className="ul"></div>
            <h2>Let's go!</h2>
            <p>Create an account once and log all SportsTrack sites and partners in one click!</p>
          </div>
        </div>
        <div className="CustRegRight">
          <h2>Sign In</h2>
          <div className="formMainDiv">
            <form action="" onSubmit={Login}>
            
                 <div><input type="text"  placeholder='Email' name='email' onChange={GetData}/></div>
                 <div><input type="password"  placeholder='password' name='password' onChange={GetData}/></div>
             
             <div> <button className='resgiter-btn'>Login</button></div>
            <Link className='iHaveAccount' to='/cutomerreg'>New Customer ?</Link>
              
            </form>
          </div>
        </div>
      </div> */}
<div className="main-reg">
    <div className="main10">
<img src="/public/curly-haired-man-with-brown-blouse-posing.jpg" alt="" />
     </div>
<form action="" className="form_main" onSubmit={Login}>
    <p className="heading">Login</p>
    <div className="inputContainer">
        <svg className="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
        <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
        </svg>
    <input type="text" className="inputField" name='email' placeholder="Email" onChange={GetData}/>
    </div>
    
<div className="inputContainer">
    <svg className="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
    </svg>
    <input type="password" className="inputField" id="password" placeholder="Password"  name='password' onChange={GetData}/>
</div>
              
           
<button id="button">Submit</button>
    <a className="forgotLink" href="#">Forgot your password?</a>
    <Link className="forgotLink" to='/cutomerreg'>Create Account</Link>
</form>
</div>
    </div>
  )
}

export default CustomerLogin
