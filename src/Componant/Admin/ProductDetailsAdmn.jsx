import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './ProductDetailsAdmn.scss'

const ProductDetailsAdmn = () => {
    const {id}=useParams()
    const [getProducts,setProduct]=useState([])

    const getProduct=async()=>{
        const res=await axios.get(`http://localhost:2000/footwear/getProduct/${id}`)
        // console.log(res.data);
        setProduct(res.data)
        console.log(getProducts.images[0]);
    }
  
    useEffect(()=>{
        getProduct()
    },[])
  return (
    <div className='ProductDetailsAdmnMain'>
        <div className="backBtn">
            <Link className='back_btn' to={`/prooood/${getProducts.category}`}>Back</Link>
        </div>
      <div className="left_Right_main">
      <div className="ProductDetailsAdmnLeft">
        <div className="images-main">
        <div className="prod-image">
           {getProducts.images && getProducts.images[0] && (
           <img src={getProducts.images[0]} alt="" />
                )}
           </div>
            <div className="prod-image">
            {getProducts.images && getProducts.images[0] && (
           <img src={getProducts.images[1]} alt="" />
                )}
            </div>
        </div>
        <div className="images-main">
            <div className="prod-image">
            {getProducts.images && getProducts.images[0] && (
           <img src={getProducts.images[2]} alt="" />
                )}
            </div>
            <div className="prod-image">
            {getProducts.images && getProducts.images[0] && (
           <img src={getProducts.images[3]} alt="" />
                )}
            </div>
        </div>
      </div>
      <div className="ProductDetailsAdmnRight">
        <p className='prod-name'>{getProducts.product_name}</p>
        <h3 className='about-product'>{getProducts.description}</h3>
        <p className='original_price'><strike>₹ 859</strike></p>
        <p className="price">₹ {getProducts.price}</p>
        <p className="stock">Stock Availablity :</p>
        <table>
            <tr>
                <th>SIZE:4</th>
                <th>SIZE:5</th>
                <th>SIZE:6</th>
                <th>SIZE:7</th>
                <th>SIZE:8</th>
                <th>SIZE:9</th>
                <th>SIZE:10</th>
                <th>SIZE:11</th>
               

            </tr>
            <tr>
                <td>{getProducts?.stock?.size4} pcs</td>
                <td>{getProducts?.stock?.size5} pcs</td>
                <td>{getProducts?.stock?.size6} pcs</td>
                <td>{getProducts?.stock?.size7} pcs</td>
                <td>{getProducts?.stock?.size8} pcs</td>
                <td>{getProducts?.stock?.size9} pcs</td>
                <td>{getProducts?.stock?.size10} pcs</td>
                <td>{getProducts?.stock?.size11} pcs</td>
             
            </tr>
        </table>
       <div className='EditBtn'> <Link to={`/editProduct/${getProducts._id}`}><button>Edit Product</button></Link></div>
      </div>
      </div>
    </div>
  )
}

export default ProductDetailsAdmn

