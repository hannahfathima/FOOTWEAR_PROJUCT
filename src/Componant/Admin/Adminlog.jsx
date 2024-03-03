import React, { useState } from 'react'
import './Adminlog.scss'
import { useNavigate,  } from 'react-router-dom'
import axios from 'axios'
const Adminlog = () => {

	const navigate=useNavigate()
  const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

const Login=async(e)=>{
  e.preventDefault()
try {
  const res=await axios.post("http://localhost:2000/footwear/adminlogin",{
    email:email,
    password:password
})
const data=res.data;
console.log(res.data);
if(res.status!==404){
  const admin_token=data.token
  localStorage.setItem("admin_token",JSON.stringify(admin_token))
  navigate("/adminhome")
}
} catch (error) {
  console.log(error);
}
}
  return (
    <div className='adminlog'>
      <div className="forms">
	<p className="title">Login</p>
	<form className="form">
		<div className="input-group">
			<label for="email">email</label>
			<input type="text" name="email" id="email" placeholder="" onChange={(e)=>setEmail(e.target.value)}/>
		</div>

      


        
		<div className="input-group">
			<label for="password">Password</label>
			<input type="password" name="password" id="password" placeholder="" onChange={(e)=>setPassword(e.target.value)}/>
			<div className="forgot">
				<a rel="noopener noreferrer" href="#">Forgot Password ?</a>
			</div>
		</div>
		<button className="sign" onClick={Login}>Sign in</button>
	</form>
	<div className="social-message">
		<div className="line"></div>
		
		<div className="line"></div>
	</div>
	
	<p className="signup">do you have an account?
		<a rel="noopener noreferrer" href="#" className="">Sign up</a>
	</p>
</div>
    </div>
  )
}

export default Adminlog
