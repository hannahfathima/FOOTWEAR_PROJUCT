import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Componant/Home'

import Adminreg from './Componant/Admin/Adminreg'
import Adminlog from './Componant/Admin/Adminlog'

import Adminshome from './Componant/Admin/Adminshome'
import Addcat from './Componant/Addcat'
import Frondent from '../Frondent'
import Frontn from './Componant/Frontn'
import Addproduct from './Componant/Addproduct'
import EditProdect from './Componant/Editproduct'
import EditProduct from './Componant/Editproduct'
import ProductViewCatVise from './Componant/ProductViewCatVise/ProductViewCatVise'
import ProductDetailsAdmn from './Componant/Admin/ProductDetailsAdmn'
import Editprodect from './Componant/Admin/Editproduct'
import Customerreg from './Componant/Customer/Customerreg'
import CustomerLogin from './Componant/Customer/CustomerLogin'
import ProductDetailsCustomer from './Componant/Customer/ProductDetailsCustomer'
import Cart from './Componant/Customer/Cart'
import WishList from './Componant/Customer/WishList'


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>

{/* <Route path='/' Component={Home}/> */}

<Route path='/adminreg' Component={Adminreg}/>
<Route path='/adminlog' Component={Adminlog}/>
<Route path='/adminhome' Component={Adminshome}/>
<Route path='/addcat' Component={Addcat}/>
{/* <Route path='/frondent' Component={Frondent}/> */}
<Route path='/' Component={Frontn}/>
<Route path='/addproduct' Component={Addproduct}/>
<Route path='/editpro/:id' Component={EditProduct}/>
<Route path='/productview/:category' Component={ProductViewCatVise}/>
<Route path='/productdescription/:id' Component={ProductDetailsAdmn}/>
<Route path='/editProduct/:id' Component={Editprodect}/>
<Route path='/cutomerreg' Component={Customerreg}/>
<Route path='/customerlogin' Component={CustomerLogin}/>
<Route path='/prodetailscustomer/:id' Component={ProductDetailsCustomer}/>
<Route path='/cart/:id' Component={Cart}/>
<Route path='/whishList/:id'Component={WishList}/>
    </Routes>
    </BrowserRouter>
      </>
  )
}

export default App
