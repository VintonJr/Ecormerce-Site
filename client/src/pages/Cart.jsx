import React from 'react'
import '../css/cart.css'
import { useSelector,useDispatch } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { addToCart, getTotals,decreaseCart,removeFromCart,clearCart,cartItem } from '../features/slices/cartReducer'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';





export const Cart = () => {

    const cart = useSelector(state=>state.cart)
    console.log(cart);
    const dispatch=useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getTotals());
      }, [cart, dispatch])

    const user =JSON.parse(localStorage.getItem("currentUser")) ;
    const token = JSON.parse(localStorage.getItem("currentToken"));

 const handleAddToCart = (product)=>{

  dispatch(addToCart(product))
 }
 const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
    
  const url = 'http://localhost:8000/order/createOrder'
  const [message,setMessage]=useState('')

  const handlePlaceOrder= () => {
    setMessage ('Adding...');

    axios.post(url, {
        "product_id":"",
        "user_id":"user_id",
        "items":JSON.stringify(cart),
        "items_count":cart.cartTotalQuantity,
        "total":cart.cartTotalAmount

    }, {headers: {
        "Authorisation":token
    }}).then((res) => {
        console.log(res)
        setMessage('Order created successfully!');
    })
    .catch(
        (err) => {
            console.log(err);
            if(err.response.status === 403){
                localStorage.clear();
                alert("Please log in again to continue")
                navigate('/login')
            }
            setMessage('An error occured, Try again!')
        }
    )
  }
  return (
    <>
    <Header />
    
    <div className="container-fluid py-3">
        <div className="row justify-content-center">
            <div>
                <h2>ShoppingCart</h2>
                <hr></hr>
                {cart.cartItems.length === 0 ? (
                    <div className='cart-empty'>
                        <p>Your Cart is empty.</p>
                        <div className='start-shopping'>
                            <Link to={"/home"}>
                            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
                            </Link>
                        </div>
                    </div>
                ):(
                    <>
                    <div>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {cart.cartItems.map((product) => {
                                
                            return(
                            <tr key={product.product_id} className="align-middle">
                                <td>
                                    <Link to={`/product/${product.product_name}`}>
                                    <img src={product.product_image} alt="" />
                                    </Link>
                                </td>
                                <td>
                                    <p>{product.product_name}</p>
                                </td>
                                <td>
                                    <p>ksh.{product.price}</p>
                                </td> 
                                <td>
                                    <div className='cart-product-quantity'>
                                        <button className='plus-minus-btn' onClick={() => handleDecreaseCart(product)}>
                                        -
                                        </button>
                                        <p className='count'>{product.cartQuantity}</p>
                                        <button className='plus-minus-btn' onClick={() => handleAddToCart(product)}>
                                        +
                                        </button>
                                    </div>
                                    
                                </td>  
                                <td><p>Ksh. {product.price * product.cartQuantity}</p></td>          
                               <td>
                                <button 
                                    className='btn btn-outline-danger'
                                    onClick={()=>handleRemoveFromCart(product)}
                                >Remove</button>
                               </td>
                            </tr>
                            )})}
                        </tbody>
                        </table>
                </div>
                <div className='d-flex justify-content-end py-3'>
                    <button 
                        className='btn btn-outline-danger'
                        onClick={() => handleClearCart()}
                    >Remove All</button>
    
                </div>
                <div className="total">
                    <span>Total: </span>
                    <span className="amount">Ksh.{cart.cartTotalAmount}</span>
                </div>
                <div className='d-flex justify-content-end'>
                <button 
                    className='btn btn-primary'
                    onClick={()=> {handlePlaceOrder()}} 
                >CheckOut</button>
            </div>
            <div>
            <Link to={"/home"}>
                                <span>Continue Shopping.</span>
                            </Link>
            </div>
                </>
                )}
                
            </div>
            
                
        </div>
    </div>
    </>
       
     
  )
}
export default Cart;