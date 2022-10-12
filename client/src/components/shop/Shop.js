import React from 'react'
import FilterBar from './FilterBar'
import ProductGrid from './ProductGrid'


const Shop = () => {
  return (
    <section className='shop'>
    <FilterBar/>
    <ProductGrid/>
    </section>
   )
}

export default Shop