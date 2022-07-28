import React from 'react'
import ProductCard from '../components/ProductCard';
export const ProductListing = ({products}) => {
  return (
    <div className='product-listing'>
      
      {products.map(product=>(<ProductCard key={product.product_id} product={product} />)) }

    </div>
  )
}
export default ProductListing;
