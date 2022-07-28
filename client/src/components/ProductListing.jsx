import React, { useState } from 'react'
import ProductCard from '../components/ProductCard';
export const ProductListing = ({products}) => {

  
  return (
    <div className='product-listing'>
<<<<<<< HEAD

        {products.map((product)=>
            (<ProductCard key={product.product_id} product={product}  />
            )) 
        }
=======
      
      {products.map(product=>(<ProductCard key={product.product_id} product={product} />)) }
>>>>>>> origin/search

    </div>
  )
}
export default ProductListing;
