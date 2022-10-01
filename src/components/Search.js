import React from 'react'
import {useState,useContext} from 'react'
import { CocktailContext } from '../context/ContextApi'

function Search() {
    const {search,setSearch}=useContext(CocktailContext)
    const handleChange =(e)=>{
        setSearch(e.target.value)
    }
  return (
    <div className='bg-gray-50 md:w-1/3  m-8 md:mx-auto mt-10 p-8 shadow-lg '>
        <p className='text-lg font-[700] text-gray-700 mb-2'>Search your favorite Cocktail :</p>
            <input type="text" placeholder='Panachi , Jack Daniel , Cocke ' value={search}  onChange={handleChange} className='w-full outline outline-1 p-1 outline-gray-200' />
    </div>
  )
}

export default Search