import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Products = () => {
  const products = useContext(ProductDataContext)

  return (
    <>
      <div className='p-5'>
        <div className="Products-container flex flex-wrap gap-5">
          {products.map((product) => (

            <Link to={`/products/${product.id}`} className="Product-card bg-amber-200 p-5 w-70 h-100 rounded-2xl" key={product.id}>
              <img className='w-60 h-60 object-contain mb-2' src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>💲{product.price}</p>

            </Link>
          ))}
        </div>
      </div>
    </>

  )
}

export default Products
