import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Searching = () => {
    const [searchParams,setSearchParams] = useSearchParams()
    const [search,setSearch] = useState('')
    const handleSubmit = async(e)=>{
        e.preventDefault()
        setSearch('')
    }
  return (
    <div className='search'>
        <form onSubmit={handleSubmit}>
          <div className='input-container'>
             <input className='search-input' onChange={(e)=> setSearch(e.target.value)} name="search" value={search}/>
          </div>
          <button type='submit'>search</button>
        </form>
    </div>
  )
}

export default Searching