import React from 'react'
import Card from './UI/Card'
import {Link} from 'react-router-dom'


function CocktailList({cocktail}) {

  return (
    <Card>
    <div className=' bg-white'> 
      <img src={cocktail.strDrinkThumb} alt="glass" className='h-64 w-full object-cover' />
      <div className="p-5">
          <p className='font-[700] text-xl text-gray-800'>{cocktail.strDrink} </p>
          <p  className='font-500] text-xl text-gray-800'>{cocktail.strAlcoholic}</p>
          <p className='font-[300] text-xl text-gray-800 '> {cocktail.strGlass} </p>
         
        <Link to={`/detail/${cocktail.idDrink}`} className='block bg-blue-400 py-2 px-5 text-center mt-3 text-white hover:bg-pink-500'>Details</Link>
      </div>
    
     </div>
    </Card>
  )
}

export default CocktailList