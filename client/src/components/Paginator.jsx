// import React,{useEffect,useState} from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
// import axios from 'axios'
// import { addproducts } from '../features/slices/productsReducer'
// import { useDispatch, useSelector } from 'react-redux';
// import Pagination from 'react-bootstrap/Pagination';
// import { Link, useParams } from 'react-router-dom';
// export const Paginator= () => {
// const {row_count}=useParams
// const{page_number}=useParams
// const dispatch = useDispatch()
// const products = useSelector(state=>state.products)

//   useEffect(  () => {
//         axios.post(`http://localhost:8000/product/productPagination?row_count=${row_count}&page_number=${page_number}`).then(res=>dispatch(addproducts(res.data))) 
              
//    }, [])

//   return (
//     <div>
      
//      <Pagination>
//         <Pagination.Prev />
//         <Pagination.Ellipsis />
//         <Pagination.Item>{3}</Pagination.Item>
//         <Pagination.Item>{4}</Pagination.Item>
//         <Pagination.Item>{5}</Pagination.Item>
//         <Pagination.Ellipsis />
//         <Pagination.Next />
//       </Pagination>
            
//     {products?products.map((product=>(<div key={product.product_id}>
//       <span>{product.product_image}</span>
//       <span>{product.product_name}</span>
//       <span>{product.price}</span></div>))):"Loading"}
     
//     </div>
//   )
// }
// export default Paginator
