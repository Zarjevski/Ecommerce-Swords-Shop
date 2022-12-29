import React from 'react'
import Card from '../blocks/Card'
import Section from '../blocks/Section'

const HomeCatagories = () => {
  const exmArr = [1,2,3] 
  return (
    <Section className='flex-col'>
      <>
        <h1 className='text-center text-4xl mt-7'>CATEGORIES</h1>
        <div className='grid grid-cols-3 h-5/6 w-full'>
          {exmArr.map((card, index)=> {
            return (
              <Card key={index}>
                <img src="http://cdn.shopify.com/s/files/1/0606/7260/6439/products/product-image-1875541946.jpg?v=1639732736" alt="" />
              </Card>
            )
          })}
        </div>
        </>
    </Section>
  )
}

export default HomeCatagories