import {createContext,useState,useEffect} from 'react'

const CocktailContext =createContext();

const CocktailProvider =({children})=>{
    const [search,setSearch]=useState('')
    const [loading,setLoading]=useState(true)
    const [cocktails,setCoctails]=useState([])
    
 
    const fetchCoc = async ()=>{
            const response= await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
            const data=await response.json()            
            setCoctails(data)
            setLoading(false)
}
useEffect(()=>{
    fetchCoc()
},[search])


// cocktail page detail data 

/* const fetchDet = async (id)=>{
    const response= await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data2=await response.json() 
    setDetails(data2)
}

useEffect(()=>{
    fetchDet(id)
    },[])

 */
    return <CocktailContext.Provider value={{search,setSearch,cocktails,loading}}>
        {children}
    </CocktailContext.Provider>
}

export {CocktailContext,CocktailProvider} 