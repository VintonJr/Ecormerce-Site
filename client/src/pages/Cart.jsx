import React from 'react'
import '../css/cart.css'
import { useSelector,useDispatch } from 'react-redux';



export const Cart = () => {

    const cart = useSelector(state=>state)
    console.log(cart.cart);
    const dispatch = useDispatch()
    const addition = (acc, currentvalue) => {
        return acc + currentvalue.price * currentvalue.quantity;
      };
    const total = cart.cart.reduce(addition, 0);

  return (
    
    <div className="container-fluid py-3">
        <div className="row justify-content-center">
            <div>
                <h2>ShoppingCart</h2>
                <hr></hr>
            </div>
            <div>
                <table className='table table-light table-hover m-0'>
                    <tbody>
                        {cart.cart.map((product) => {
                            
                        return(
                        <tr key={product.product_id} className="align-middle">
                            <td>
                                <img src={product.product_image} alt="" />
                            </td>
                            <td>
                                <p>{product.product_name}</p>
                            </td>
                            <td>
                                <p>ksh.{product.price}</p>
                            </td> 
                            <td>
                                <p>Ksh.{product.price * product.quantity}</p>
                            </td>            
                            <td>
                                
                                
                                <button 
                                    className='btn btn-outline-dark mx-1'
                                    onClick={() => dispatch({type: "INCREASE", payload:product})}
                                >+</button>
                                
                                <button 
                                    className='btn btn-outline-dark mx-1'
                                    onClick={() => {
                                        if(product.quantity > 1){
                                        dispatch({type: "DECREASE", payload:product});}
                                        else{
                                            dispatch({type: "REMOVE", payload:product});
                                        }}}
                                >-</button>

                                <button 
                                    className='btn btn-outline-danger mx-1'
                                    onClick={() => dispatch({type: "REMOVE", payload:product})}
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
                    //onClick={() => dispatch({type: "REMOVE-ALL", payload:product})}
                >Remove All</button>

            </div>
            <div>
            {total > 0 && <h2>total:{total}</h2>}
            </div>
            <div className='d-flex justify-content-end'>
                <button className='btn btn-primary'>CheckOut</button>
            </div>
                
        </div>
    </div>
       
     
  )
}
export default Cart;