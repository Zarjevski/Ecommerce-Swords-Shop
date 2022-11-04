import React from 'react'
import ProductTable from './products/ProductTable'

const Dashboard = () => {
  return (
    <section className='w-full h-ful'>
      <aside>Dashboard</aside>
    <div className="actions">
      <ProductTable/>
    </div>
    </section>
  )
}

export default Dashboard