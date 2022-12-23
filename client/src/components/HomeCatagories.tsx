import React from 'react'

const HomeCatagories = () => {
  const exmArr = [1,2,3] 
  return (
    <section className='h-screen'>
        <h1 className='text-center text-4xl mt-7'>CATEGORIES</h1>
        <div className='grid grid-cols-3 grid-rows-1 h-5/6 gap-6 p-10 center w-screen'>
          {exmArr.map((card, index)=> {
            return (
              <article key={index} className='mt-8 w-5/6 rounded-xl' style={{backgroundColor: "#14181a"}}>

              </article>
            )
          })}
        </div>
    </section>
  )
}

export default HomeCatagories