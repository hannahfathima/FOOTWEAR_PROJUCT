import React from 'react'
import './Navbar.scss'

import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';

import { FaRegUser } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa6";


const Navbar = () => {

    const [id,setId]=useState("")
    const naviagate=useNavigate()
    const navigateItself=useNavigate()
    const [msg,setMsg]=useState("")
    const value=JSON.parse(localStorage.getItem('customer_token'));

    const logout=()=>{
      const isConfirmed = window.confirm("Are you sure you want to log out?");
  
  if (isConfirmed) {
    localStorage.clear();
    window.location.reload()
  }
    }

    const getName=async()=>{
        const res=await axios.get("http://localhost:2000/footwear/CustHome",{
            headers:{Authorization: `Bearer ${value}`},
        })
        // console.log(res.data);
        setMsg(res.data.msg)
        setId(res.data.id)
      }
      useEffect(()=>{
        getName()
      },[])
      // console.log(id);

     const gotoLogin=()=>{
      naviagate("/customerlogin")
     }




  return (
    <div className='nav-main'>
      <div className="nav-bar">
        <div className="left">
            <div><Link className="navLinks">PRODUCT</Link></div>
            <div><Link className="navLinks">ABOUT</Link></div>
            <div><Link className="navLinks">CATEGORY</Link></div>
        </div>
        <div className="middle">
            <h2>KANNAPPI</h2>
        </div>
        <div className="right">
        <div><Link className="navLinks">MY ORDERS</Link></div>
        <div><Link className='wishlist' to={`/whishList/${id}`}><FaRegHeart className='nav-icons' /></Link></div>
        <div><HiOutlineShoppingBag className='nav-icons' id='bag' /></div>
        <div>{msg === "" ? (
      <span onClick={gotoLogin}>Sign in</span>) : (
      <>
        <FaRegUser className='nav-icons' />
        <span className='name'> {msg} </span>
        <button onClick={logout} className='logoutbtn'>Logout</button>
      </>
    )}</div>
        {/* <div></div> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
