import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import Title from './Title'
const LatestCollection = () => {

    const {products} = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(()=>{
      setLatestProducts(products.slice(0,10))
    })

    
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Recusandae sed pariatur rerum,
            vitae quibusdam cum nesciunt quas cumque voluptas sint
            tempore laudantium veniam fuga.
        </p>
        </div>  

        {/*Rendiring Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
          {
            latestProducts.map((item,index)=>(
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }

        </div>
    </div>
  )
}

export default LatestCollection