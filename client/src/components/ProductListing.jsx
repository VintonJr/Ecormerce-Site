import React from 'react'
import ProductCard from '../components/ProductCard';
export const ProductListing = ({products}) => {
  return (
    <div className='product-listing'>
         {products? products.map(product=>(<ProductCard product={product} key={product.id}/>)): "Loading..."}
  
    </div>
  )
}
export default ProductListing;
