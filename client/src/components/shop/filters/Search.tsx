import React, { useState } from 'react'

const Search = () => {
  const [search,setSearch] = useState("")
  return (
    <form><input className='caret-red-500' type="text" onChange={(e)=>{setSearch(e.target.value)}}/></form>
  )
}

export default Search