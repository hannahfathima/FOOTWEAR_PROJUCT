import React, { useState } from 'react'
import './Adminreg.scss'
import { useNavigate,  } from 'react-router-dom'
import axios from 'axios'


const Adminreg = () => {
 
    const navigate=useNavigate()
    const[val,setVal]=useState({
      username:"",
      email:"",
      phone:"",
      password:"",
      confirmpassword:""
     
    });
    
    const GetData=(e)=>{
      setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
      console.log(val);
    }
    
    const SignUp=async(e)=>{
        // alert("sghfs")
      e.preventDefault();
      const {password,confirmpassword}=val;
        if(password!==confirmpassword){
        alert('Password and Confirm Password do not match!');
      } else {
        const res=await axios.post("http://localhost:2000/footwear/addadmin",{...val})
        // setVal(res.data)
        console.log(res.data);
        if(res.status==201){
          alert("Successfully registered")
          navigate("/adminlog")
        }
      }
    
    };


  return (
    <div className='adminreg'>
      <div className="form-container">
	<p className="title">Register</p>
	<form className="form">
		<div className="input-group">
			<label for="username">Username</label>
			<input type="text" name="username" id="username" placeholder="" onChange={GetData} />
		</div>

        <div className="input-group">
			<label for="email">Email</label>
			<input type="text" name="email" id="email" placeholder="" onChange={GetData}/>
		</div>

        <div className="input-group">
			<label for="Phone">Phone</label>
			<input type="text" name="phone" id="phone" placeholder="" onChange={GetData}/>
		</div>



        
		<div className="input-group">
			<label for="password">Password</label>
			<input type="password" name="password" id="password" placeholder="" onChange={GetData}/>
			{/* <div className="forgot">
				<a rel="noopener noreferrer" href="#">Forgot Password ?</a>
			</div> */}
		</div>


        <div className="input-group">
			<label for="password">Confirm Password</label>
			<input type="password" name="confirmpassword" id="confirmpassword" placeholder="" onChange={GetData}/>
		
		</div>

		<button className="sign" onClick={SignUp}>Sign up</button>
	</form>
	<div className="social-message">
		<div className="line"></div>
		
		<div className="line"></div>
	</div>
	
	<p className="signup">do you have an account?
		<a rel="noopener noreferrer" href="#" className="">Sign in</a>
	</p>
</div>
    </div>
  )
}

export default Adminreg











