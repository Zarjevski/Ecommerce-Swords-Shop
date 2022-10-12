import React from 'react'
import {useData} from '../../hooks/useData.js'

const ProductGrid = () => {
  const {products, loading} = useData()
  return (
    <div className='products-grid'></div>
  )
}

export default ProductGrid