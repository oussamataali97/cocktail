import React ,{useContext,useEffect} from 'react'
import Search from './Search'
import { CocktailContext } from '../context/ContextApi'
import ClipLoader from "react-spinners/ClipLoader";
import CocktailList from './CocktailList';

function Home() {
    const {loading,search,cocktails}=useContext(CocktailContext)
    const {drinks} =cocktails

    if(loading){
        return   <div className="load h-screen w-screen flex justify-center items-center">
        <ClipLoader />
</div>
    }
    if(drinks === null){
       
        return <div className="nav">
                  <Search/>

   <p className='text-center py-10 font-[500]'> There's No cocktail ... </p>
        </div>  
      
    }
if(cocktails ){
  return (
    <div>
        <Search/>
        <h1 className='text-center py-10 font-[500]'>Cocktails</h1>
      
                    <div className="max-w-6xl mx-auto grid md:grid-cols-3">
                    {
        drinks.map((cocktail,index)=>(
         <CocktailList  key={cocktail.idDrink} cocktail={cocktail}/>
        
 
        ))
      }
        </div>  
        
    </div>
  )
} 
  
}

export default Home