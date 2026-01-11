import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link, useParams } from 'react-router-dom'



const ProductDetails = () => {

  const params = useParams();
  const products = useContext(ProductDataContext)


  return (
    <>
      <div className='p-5'>
        <div className="Products-container flex flex-wrap gap-5">


          <Link className="Product-card bg-purple-400 p-5 w-80 h-auto rounded-2xl" key={products[params.id - 1].id}>
            <img className='w-60 h-60 object-contain mb-2' src={products[params.id - 1].image} alt={products[params.id - 1].title} />
            <h3 className='font-bold mb-2'>{products[params.id - 1].title}</h3>
            <h3>{products[params.id - 1].description}</h3>
            <p className='text-2xl mt-2'>💲{products[params.id - 1].price}</p>

          </Link>

        </div>
      </div>
    </>
  )
}

export default ProductDetails
