import React ,{useEffect}from 'react'
import Admin from './Admin'
import Sidebar from './Sidebar'
import { useDispatch,useSelector } from 'react-redux'
import { addproducts } from '../../features/slices/productsReducer'
import axios from 'axios'
export const Products = () => {
  const dispatch=useDispatch();
  const products=useSelector(state=>state.products)
  useEffect(() => {
    
    axios.get(`http://localhost:8000/product/viewProduct`).then(res=>{
    
    dispatch (addproducts (res.data.results))})
    
  
  }, [])
  console.log(products)
  return (
    <div className="admin-products">
        <Admin/>
        <Sidebar/>
        
        {products.map(product=>(<div key={product.product_id} >
          <p>{product.product_image}</p>
          <p>{product.product_name}</p>

          </div>)) }

        </div>
  )
}
export default Products