import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import './ProductDetailsCustomer.scss'
import { PiShoppingCartFill } from "react-icons/pi";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHeartCircleCheck } from "react-icons/fa6";

const ProductDetailsCustomer = () => {
  let Size;
  // let iiiiid
  const [loading, setLoading] = useState(true);



  let product_id
  const { id } = useParams()
  // console.log(id);
  const [msg, setMsg] = useState("")
  const [cartItems, setCartItems] = useState([])
  const [wishlistItems, setWishlistItems] = useState([])
  const value = JSON.parse(localStorage.getItem('customer_token'));
  const [getProducts, setProduct] = useState({
    cust_id: "",
    prod_id: "",
    product_name: "",
    category: "",
    description: "",
    price: "",
    size: "",
    quantity: "",
    banner: "",
    images: []
  })
  useEffect(() => {
    if (msg) {
      getPrdctDetails();
      getWishListDetails();
    }
  }, [msg]);


  // const [products_id, setProductId] = useState(null);

  const getPrdctDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:2000/footwear/getCartProduct/${msg.id}`);
      setCartItems(res.data);
      // console.log(res.data);
      // console.log("All prod_id in cartItems:", cartItems.map(item => item.prod_id));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setLoading(false);
    }

  };
  // const isInCart = cartItems.some((data) => data.prod_id === getProducts._id);

  useEffect(() => {
    getPrdctDetails();
  }, []);


  const getWishListDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:2000/footwear/getWishlistProduct/${msg.id}`);
      // console.log("widh list",res.data[0]);
      setWishlistItems(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getWishListDetails();
  }, []);


  const getProduct = async () => {
    const res = await axios.get(`http://localhost:2000/footwear/getProduct/${id}`)
    setProduct(res.data)
    product_id = res.data._id
    console.log("prooooood", product_id);
  }

  useEffect(() => {
    getProduct()
  }, [])

  const getName = async () => {
    const res = await axios.get("http://localhost:2000/footwear/CustHome", {
      headers: { Authorization: `Bearer ${value}` },
    })
    setMsg(res.data)
    console.log(msg);
  }
  useEffect(() => {
    getName()
  }, [])



  const selectSize = (e) => {
    Size = e.target.value;
    // console.log(Size);
  }


  const addToCart = async () => {
    try {
      if (!Size) {
        alert("Please select the size");
        return;
      }
      const res = await axios.post("http://localhost:2000/footwear/addToCart", { ...getProducts, size: Size, cust_id: msg.id, quantity: 1, prod_id: getProducts._id });
      console.log(res.data);
      if (res) {
        alert("Added To Cart")
        window.location.reload();
      } else {
        alert("Error adding product to cart. Please try again.")
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Error adding product to cart. Please try again.");
    }
  };

  const addToWishList = async () => {
    try {
      const res = await axios.post("http://localhost:2000/footwear/addToWhishList", { ...getProducts, size: Size, cust_id: msg.id, prod_id: getProducts._id });
      console.log(res.data);
      if (res) {
        alert("Added To Wishlist")
        window.location.reload();
      } else {
        alert("Error adding product to Wishlist. Please try again.")
      }
    } catch (error) {
      console.error("Error adding product to Wishlist:", error);
      alert("Error adding product to Wishlist. Please try again.");
    }
  };
  return (
    <div className='ProductDetailsCustomerMain'>
      {/* <Navbar /> */}
      <div className="ProductDetailsMain">
        <div className="ProductDetailsLeft">
          <div className="images-main">
            <div className="image">
              {getProducts.images && getProducts.images[0] && (<img src={getProducts.images[0]} alt="" />)}
            </div>
            <div className="image">
              {getProducts.images && getProducts.images[0] && (<img src={getProducts.images[1]} alt="" />)}
            </div>
          </div>
          <div className="images-main">
            <div className="image">
              {getProducts.images && getProducts.images[0] && (<img src={getProducts.images[2]} alt="" />)}
            </div>
            <div className="image">
              {getProducts.images && getProducts.images[0] && (<img src={getProducts.images[3]} alt="" />)}
            </div>
          </div>

        </div>
        <div className="ProductDetailsRight">
          <p className="prod_name">{getProducts.product_name}</p>
          <h3 className="prod_discription">{getProducts.description}</h3>
          {/* <p className="og_price"><strike>₹ 899</strike></p> */}
          <span className="price">₹ {getProducts.price}</span>
          <div className='select_size'>
            {/* <p>Select Size</p> */}
            <select name="size" id="" onChange={selectSize}>
              <option className='option'>Select Size</option>
              <option className='option' name='size2'   value="size2">4</option>
              <option className='option' name='size4' value="size4">5</option>
              <option className='option' name='size5' value="size5">6</option>
              <option className='option' name='size6' value="size6">7</option>
              <option className='option' name='size7' value="size7">8</option>
              <option className='option' name='size8' value="size8">9</option>
              <option className='option' name='size9' value="size9">10</option>
              <option className='option' name='size10' value="size10">11</option>
              <option className='option' name='size11' value="size11">12</option>
            </select>
          </div>
          <div className="btns">
            {/* ////////////////ADDTO CART BTN///////////// */}
            {cartItems.map(item => item.prod_id).includes(getProducts._id) ? (
              <button className='addToCartBtn'>
                <Link className='gotocart' to={`/cart/${msg.id}`}>
                  GOTO CART <PiShoppingCartFill className='add-icon' />
                </Link>
              </button>
            ) : (
              <button className='addToCartBtn' onClick={addToCart}>
                ADD TO CART <PiShoppingCartFill className='add-icon' />
              </button>
            )}
            {/* //////////////////END////////////////// */}
            {/* /////////////////ADD TO WISHLIST BTN/////////////// */}
            {wishlistItems.map(item => item.prod_id).includes(getProducts._id) ? (
              <button className='AddedWhishListBtn'> ADDED TO WHISHLIST <FaHeartCircleCheck className='add-icon' />
              </button>
            ) : (
              <button className='WhishListBtn' onClick={addToWishList}>
                ADD TO WHISHLIST <FaHeartCirclePlus className='add-icon' />
              </button>
            )}
            {/* ///////////////////END////////////////// */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductDetailsCustomer