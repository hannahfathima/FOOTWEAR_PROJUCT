import React, { useEffect, useState } from 'react'
import './frontn.scss'
import { Link } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import axios from 'axios'
const Frontn = () => {

  const [getProducts,setProducts]=useState([])
  
  // http://localhost:7000/sportstrack/getAllProducts
  const getAllProducts=async()=>{
    const res=await axios.get("http://localhost:2000/footwear/getAllProducts") 
    // console.log(res.data);
    setProducts(res.data)
    console.log(getProducts);
  }
  useEffect(()=>{
    getAllProducts()
  },[])


  
  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };
  return (
    <div className='mainpage'>
       <Navbar/>
      <div className="submainpage">
        <div className="right1">
     <div className="content">
     <h2>
   MAKE WAY FOR CONFIDENT
 
    </h2>
    <div className="h5">
     <h1>    50% OFF</h1>
    </div>
    <div className="usecode1">
       <h2>USE CODE : B50F</h2>
    </div>
    <div className="Exploren1">
      <Link className="explore">Explore Now</Link>
    </div>
     </div>
        </div>
        <div className="left1">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/public/studio-image-smiling-brunette-lovely-woman-wearing-stylish-sporty-outfit-jeans-jacket-sitting-floor.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/public/pexels-anna-shvets-5325588.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/public/spring-wardrobe-switch-still-life.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="none" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </div>


      {/* c........................choose your style......... */}

         <div className='chooseyourstyle'>
              <h1>
              Bringing the vibrant Indian culture to the modern world
              </h1>
              <h6>
              Zouk effortlessly defines a modern Indian classic. Bringing together the contemporary and the traditional, Zouk weaves subtle elegance into your lifestyle.
              </h6>


  </div>
  <div className="stylesdiv">
  <h1>Stylishly Comfortable.</h1>

  <h6>
  Zouk effortlessly defines a modern Indian classic. Bringing together the contemporary and the traditional, Zouk weaves subtle elegance into your lifestyle
  </h6>
</div>
<div className="categorylist">
  <div className="firstrow">
   <div className="h1s">
   <h1>CHOOSE YOUR STYLES</h1>
   </div>
<div className="catts">
<div className="cats">
<a href='#mencat' className='move1' > <div className='catleft'> <img src="/public/retro-man-dressed-shirt-lies-floor-posing_171337-9906.avif" alt="" /></div></a>   

<a href='#womencat' className='move2'><div className="classright"><img src="/public/woman-posing-with-stylish-footwear-summer-fashion-bag_285396-505.avif" alt="" /></div></a>
   </div>
   <div className="cats2">
<a className='move3'> <div className='catleft'> <img src="/public/little-girl-posing-school-s-uniform-white-studio-wall_155003-38311.jpg" alt="" /></div>
</a>   
<a className='move4'><div className="classright"><img src="/public/portrait-cute-little-kid-boy-stylish-jeans-clothes-looking-camera-against-white-studio-wall_155003-13445.avif" alt="" /></div></a>
</div>
   </div>
  </div>
</div>
<div className="productts">
  <div className="menss" id='mencat'>


    <h1>MEN</h1>
    <div className="cccarrrd">

      {
        getProducts.filter((data)=>data.category=== 'MEN')
        .map((data,index)=>
    <Link to={`/prodetailscustomer/${data._id}`} className='cardpath'>
        <div className="mens" key={index}>
        <div className="cardimage">
          <img src={data.banner} alt="" />
        </div>
        <div className="detailcard">
          <h2>{data.price}</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div>
    </Link>
)
      }
   
      

      {/* <div className="mens">
        <div className="cardimage">
          <img src="/public/shopping (1).webp" alt="" />
        </div>
        <div className="detailcard">
          <h2>1999/-</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div> */}


      {/* <div className="mens">
        <div className="cardimage">
          <img src="/public/shopping.webp" alt="" />
        </div>
        <div className="detailcard">
          <h2>1999/-</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div>
    </div>




    <div className="cccarrrd1">
      <div className="mens">
        <div className="cardimage">
          <img src="/public/shopping (4).webp" alt="" />
        </div>
        <div className="detailcard">
          <h2>1999/-</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div>





      <div className="mens">
        <div className="cardimage">
          <img src="/public/shopping (2).webp" alt="" />
        </div>
        <div className="detailcard">
          <h2>1999/-</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div>


      <div className="mens">
        <div className="cardimage">
          <img src="/public/shopping (1).webp" alt="" />
        </div>
        <div className="detailcard">
          <h2>1999/-</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div> */}


    </div>


  </div>

















  {/* .....women............. */}


  <div className="menss" id='womencat'>


    <h1>WOMEN</h1>
    <div className="cccarrrd">
      {/* <div className="mens">
        <div className="cardimage">
          <img src="/public/shopping (4).webp" alt="" />
        </div>
        <div className="detailcard">
          <h2>1999/-</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div> */}    {
        getProducts.filter((data)=>data.category=== 'WOMEN')
        .map((data,index)=>
     <Link to='/prodetailscustomer' className='cardpath'>
        <div className="mens" key={index}>
        <div className="cardimage">
          <img src={data.banner} alt="" />
        </div>
        <div className="detailcard">
          <h2>{data.price}</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div></Link>
)
      }
   




{/* 
      <div className="mens">
        <div className="cardimage">
          <img src="/public/shopping (2).webp" alt="" />
        </div>
        <div className="detailcard">
          <h2>1999/-</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div> */}


      {/* <div className="mens">
        <div className="cardimage">
          <img src="/public/shopping (1).webp" alt="" />
        </div>
        <div className="detailcard">
          <h2>1999/-</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div> */}


      {/* <div className="mens">
        <div className="cardimage">
          <img src="/public/shopping.webp" alt="" />
        </div>
        <div className="detailcard">
          <h2>1999/-</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div> */}
    </div>




    {/* <div className="cccarrrd1">
      <div className="mens">
        <div className="cardimage">
          <img src="/public/shopping (4).webp" alt="" />
        </div>
        <div className="detailcard">
          <h2>1999/-</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div>





      <div className="mens">
        <div className="cardimage">
          <img src="/public/shopping (2).webp" alt="" />
        </div>
        <div className="detailcard">
          <h2>1999/-</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div>


      <div className="mens">
        <div className="cardimage">
          <img src="/public/shopping (1).webp" alt="" />
        </div>
        <div className="detailcard">
          <h2>1999/-</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div>


    </div>

 */}








  </div>















  {/* ...................kids............... */}

  <div className="menss">


    <h1>KIDS</h1>
    <div className="cccarrrd">
      {/* <div className="mens">
        <div className="cardimage">
          <img src="/public/shopping (4).webp" alt="" />
        </div>
        <div className="detailcard">
          <h2>1999/-</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div> */}

{
        getProducts.filter((data)=>data.category=== 'KIDS')
        .map((data,index)=>
      <Link to='/prodetailscustomer' className='cardpath'>
        <div className="mens" key={index}>
        <div className="cardimage">
          <img src={data.banner} alt="" />
        </div>
        <div className="detailcard">
          <h2>{data.price}</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div></Link>
)
      }



      {/* <div className="mens">
        <div className="cardimage">
          <img src="/public/shopping (2).webp" alt="" />
        </div>
        <div className="detailcard">
          <h2>1999/-</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div> */}


      {/* <div className="mens">
        <div className="cardimage">
          <img src="/public/shopping (1).webp" alt="" />
        </div>
        <div className="detailcard">
          <h2>1999/-</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div> */}


      {/* <div className="mens">
        <div className="cardimage">
          <img src="/public/shopping.webp" alt="" />
        </div>
        <div className="detailcard">
          <h2>1999/-</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div> */}
    </div>



{/* 
    <div className="cccarrrd1">
      <div className="mens">
        <div className="cardimage">
          <img src="/public/shopping (4).webp" alt="" />
        </div>
        <div className="detailcard">
          <h2>1999/-</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div>





      <div className="mens">
        <div className="cardimage">
          <img src="/public/shopping (2).webp" alt="" />
        </div>
        <div className="detailcard">
          <h2>1999/-</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div>


      <div className="mens">
        <div className="cardimage">
          <img src="/public/shopping (1).webp" alt="" />
        </div>
        <div className="detailcard">
          <h2>1999/-</h2>
          <h6>	
{data.description}</h6>
        </div>
      </div>


    </div> */}
{/* .........Footer......... */}



  </div>
</div>


    </div>
  )
}

export default Frontn
