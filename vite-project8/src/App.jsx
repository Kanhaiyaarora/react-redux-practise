import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [productData, setProductData] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])

  const getData = async () => {
    const res = await axios.get('https://dummyjson.com/products')
    setProductData(res.data.products)
    console.log(res.data.products)
  }
  useEffect(() => {
    getData()
  }, [])

  const handleCategoryChange = (e) => {
    const category = e.target.value
    if (e.target.checked) {
      setSelectedCategories(prev => [...prev, category])
    } else {
      setSelectedCategories((prev) => prev.filter((item) => item !== category))
    }
  }

  const filteredData = selectedCategories.length === 0 ? productData : productData.filter(product => selectedCategories.includes(product.category))

  return (
    <div className='flex gap-10'>
      <div className='sidebar my-10 ml-4 flex flex-col gap-5'>
        <h2 className='text-2xl font-bold'>Filters</h2>
        <h3 className='border-b-1 ml-5'>Categories</h3>
        <div> <input className='mr-2' type="checkbox" name="beauty" id="beauty" value="beauty" onChange={handleCategoryChange} />
          <label htmlFor="beauty">Beauty</label>
        </div>
        <div> <input className='mr-2' type="checkbox" name="fragrances" id="fragrances" value="fragrances" onChange={handleCategoryChange} />
          <label htmlFor="fragrances">Fragrances</label>
        </div>
        <div> <input className='mr-2' type="checkbox" name="furniture" id="furniture" value="furniture" onChange={handleCategoryChange} />
          <label htmlFor="furniture">Furniture</label>
        </div>
        <div> <input className='mr-2' type="checkbox" name="groceries" id="groceries" value="groceries" onChange={handleCategoryChange} />
          <label htmlFor="groceries">Groceries</label>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-6 p-6'>
        {
          filteredData.map((product, index) => (
            <div key={index} className='border flex flex-col items-center'>
              <img src={product.thumbnail} alt="" />
              <h2 className=''>{product.title}</h2>
              <div className='flex gap-10 mb-4'><p>{product.category}</p>
                <p>${product.price}</p></div>
            </div>
          )
          )
        }
      </div>
    </div>
  )
}

export default App
