import React, { useEffect, useState } from 'react'
import './Adminshome.scss'
import { Link } from 'react-router-dom'
import { MdEditCalendar } from "react-icons/md";
import { MdAutoDelete } from "react-icons/md";
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
const Adminshome = () => {
  const [ctgry,setCtgry]=useState([])

const Getcat=async()=>{
   const res=await axios.get("http://localhost:2000/footwear/getcategory")
   console.log(res.data);
  //  const data=res.data
  setCtgry(res.data)
}
useEffect(()=>{
Getcat()
},[])

 const deletecategory=async(id)=>{
  const res=await axios.delete(`http://localhost:2000/footwear/delcategory/${id}`)
  if(res.status!=404){
    alert("Deleted")
  }else{
    alert(error)
  }
  Getcat()
  console.log(res.data);
}


  return (
   
    <div className='adminmainhomepage'>
      <button class="button">
  <div class="button-box">
    <span class="button-elem">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 40">
        <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
      </svg>
    </span>
    <span class="button-elem">
      <svg viewBox="0 0 46 40">
        <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
      </svg>
    </span>
  </div>
</button>
   
<div className='admincatogery'>

<div className="admcat">
<Link className='category' to='addcetegory' >
    CATEGORY
</Link>
<Link className='addcat' to='/addcat' >
   Add New Category
</Link>
<Link className='addcat' to='/addproduct' >
   Add Products
</Link>
<Link className='sales' to='addcetegory' >
   sales    
</Link>

<div className="table">
  <table >
   {
    ctgry.map((data,index)=> <tr key={index}>
    <td>
     <Link to={`/Productview/${data.category}`}> {data.category}</Link>
    </td>
    <td>
    <MdEditCalendar/>
    </td>
    <td>
   <Link className='del' to={`#${data._id}`} onClick={()=>deletecategory(data._id)}> <MdAutoDelete /></Link>
    </td>
  </tr>)
   }
    
  </table>
</div>

</div>

    </div>
    </div>
  )
}

export default Adminshome
