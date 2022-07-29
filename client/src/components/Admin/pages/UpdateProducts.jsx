import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Admin from '../Admin';
import Sidebar from '../Sidebar';

export const UpdateProducts = () => {
  const[product_name, setName]=useState('');
  const[price,setPrice]=useState('');
  const[description,setDescription]=useState('');
  const[category,setCategory]=useState('');
  const[product_image,setImage]=useState('')

  const handleSubmit = (event) =>{
    event.preventDefault();

    const data = JSON.stringify({product_name,price,description,category,product_image});

    axios.put('http://localhost:8000/product/updateProduct',data,{
      headers: {'Content-Type': 'application/json'},
    })
    .then(() =>{
      console.log(' Product Updated successful!')
    });
  };




  return (
    
    <div className='create-product'>
        <Admin/>
          <section className="product-card">
        <h1> UPDATEPRODUCT</h1>
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
          type="text"
          value={product_image}
                onChange={(e) => setImage(e.target.value)}

          />
          
          <button id='register-btn' className='btn btn-primary'>Create</button>
            
        </form>
      </section>
      </div>
  )
}
export default UpdateProducts;