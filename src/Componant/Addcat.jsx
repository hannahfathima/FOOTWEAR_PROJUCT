import React, { useState } from 'react'
import './Addcat.scss'
import axios from 'axios'

const Addcat = () => {
    const [val,setVal]=useState({
        category:"",
        aboutCategory:""
    })

    const Getdata=(e)=>{
        setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
        // console.log(val);
    }

    const Addcategory=async(e)=>{
        e.preventDefault()
        const res=await axios.post("http://localhost:2000/footwear/addCategory",{...val})
        console.log(res.data);
    }

    
  return (
    <div>
      <div className="login-box">
 
 <form>
   <div className="user-box">
     <input type="text" name="category" required="" onChange={Getdata}/>
     <label>Category Name</label>
   </div>
   <div className="user-box">
     <input type="address" name="aboutCategory" required="" onChange={Getdata}/>
     <label>Description</label>
   </div><center>
   <a href="#" onClick={Addcategory}>
          SEND
      <span></span>
   </a></center>
 </form>
</div>
    </div>
  )
}

export default Addcat
