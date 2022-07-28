import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addproducts } from '../../features/slices/productsReducer'
import axios from 'axios'

export const Products = () => {
  const[product_name, setName]=useState('');
  const[price,setPrice]=useState('');
  const[description,setDescription]=useState('');
  const[category,setCategory]=useState('');
  const[product_image,setImage]=useState('')

  const handleSubmit = (event) =>{
    event.preventDefault();

    const data = JSON.stringify({product_name,price,description,category,product_image});

    axios.post('http://localhost:8000/product/createProduct',data,{
      headers: {'Content-Type': 'application/json'},
    })
    .then(() =>{
      console.log(' Product Created successful!')
    });
  };
  const handleChange=(event)=> {
    console.log(event.target.files)
    setImage(event.target.files[0])
  }



  return (
    <div className='create-product'>
          <section className="product-card">
        <h1>CREATE PRODUCT</h1>
        <form onSubmit={handleSubmit}>
          <label>Product Name:</label>
          <input 
          type="text"
          id="product_name"
          value={product_name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          required
          />
          <label>Price:</label>
          <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder='Enter Price'
          required
          />
          <label>Description:</label>
          <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter Description'
          required
          />
           <label>Category:</label>
          <input
          type="text"
          id="description"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder='Enter Description'
          required
          />
          <label>Image:</label>
          <input
          type="file"
          value={product_image}
        onChange={handleChange}
          />
          
          <button id='register-btn' className='btn btn-primary'>Create</button>
            
        </form>
      </section>
      </div>
  )
}
export default Products;