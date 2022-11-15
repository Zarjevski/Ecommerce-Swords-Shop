import React from 'react'
import Search from './filters/Search'

const Filters = () => {
  return (
    <aside className='w-1/6 flex lg:block xs:justify-center xs:hidden sm:hidden border-r-2 border-r-red-500'><Search/></aside>
  )
}

export default Filters