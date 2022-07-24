import React from 'react'
import '../css/cart.css'

export const Cart = () => {
  return (
    <div className='cart'>
      <section>
        <h2>Shopping Cart</h2>
        <hr></hr>
      </section>
      <section id='cart-container' >
        <table width="100%">
          <thead>
            <tr>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total</td>
              <td>Delete</td>
            </tr>

          </thead>
          <tbody>
            <tr>
            <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td><a href='#'><i className='fas fa-trash-alt'></i></a></td>
            </tr>
          </tbody>
        </table>
      </section>
    
    
  




    </div>
  )
}
export default Cart;