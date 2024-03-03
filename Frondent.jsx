import React from 'react'
import './Frontent.scss'
import { Link } from 'react-router-dom'
const Frondent = () => {
  return (
    <div className='mainpage'>
      <div className="naav">
         <div className="nh3">
           <h3>HOME</h3>
         </div>
         <div className="nh3">
         <h3>ABOUT</h3>
         </div>
         <div className="nh3">
         <h3> CART</h3>
         </div>
         <div className="nh3">
         <h3> HELP</h3>
         </div>
         <div className="nh3">
         <h3>CONTACT</h3>
         </div>
        </div>







        {/* next div  */}

<div className="fashion">
<div className="left">
    <h2>
   MAKE WAY FOR CONFIDENT
 
    </h2>
    <div className="h1">
     <h1>   UP TO 50% OFF</h1>
    </div>
    <div className="usecode">
       <h2>USE CODE : B50F</h2>
    </div>
    <div className="Exploren">
      <Link className="explore">Explore Now</Link>
    </div>



  </div>
  <div className="right">
  
  </div>
</div>
    
    </div>
  )
}

export default Frondent


