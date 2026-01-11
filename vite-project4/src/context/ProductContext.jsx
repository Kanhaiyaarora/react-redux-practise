import React, { createContext } from 'react'
import { productData } from '../api/ProductApi'

export const ProductDataContext = createContext()

const products = await productData()

const ProductContext = (props) => {
  return (


    <ProductDataContext.Provider value={products}>

      {props.children}
    </ProductDataContext.Provider>





  )
}

export default ProductContext
