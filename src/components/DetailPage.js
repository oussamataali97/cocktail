import React from 'react'
import {useParams} from 'react-router-dom'
import {  useState,useEffect} from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import {AiFillLike ,AiFillDislike} from 'react-icons/ai'
import {ImShare} from 'react-icons/im'

function DetailPage() {
    
    const {id}=useParams()
    const [loading,setLoading]=useState(true)
    const [cocktails,setCoctails]=useState([])
    const {strDrink,strDrinkThumb,strGlass,strCategory,strAlcoholic,strInstructions}=cocktails
    
    useEffect(()=>{

        async function fetchDet(){
            try {
                const response= await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                const data2=await response.json() 

                if(data2.drinks){
                    const {strDrink,strDrinkThumb,strGlass,strCategory,strAlcoholic,strInstructions} = data2.drinks[0]  
                        const newCocktail ={strDrink,strDrinkThumb,strGlass,strCategory,strAlcoholic,strInstructions};
                        setCoctails(newCocktail)  
                }
                else {
                    setCoctails(null)
                }
                setLoading(false)
             
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        fetchDet()
        },[])
      
        if(loading){
            return   <div className="load h-screen w-screen flex justify-center items-center">
            <ClipLoader />
            </div>
        }
    if(cocktails){
        
        return (
            <div className='md:max-w-4xl md:mx-auto mt-10 p-5 md:p-0'>
                <p className='text-center font-[700] text-2xl md:text-3xl text-gray-700  border-b-2 '> <span className='text-pink-400'>{strDrink}</span>  Cocktail detail</p>
                <div className="p-10 md:p-0 shadow-md rouded-md flex flex-col md:flex-row gap-5 mt-10 items-center my-10">
                    <img src={strDrinkThumb} alt="" className='w-full md:w-1/2 h-72 object-cover rounded-lg' />
                    <div className="infos space-y-5 self-start md:self-auto">
                        <p> <span className='font-[700]' >Poduct Name :</span> {strGlass}</p>
                        <p> <span className='font-[700]'>Category :</span> {strCategory}</p>
                        <p> <span className='font-[700]'>Info :</span> {strAlcoholic}</p>
                        <p> <span className='font-[700]'>Instructions :</span> {strInstructions}</p>

                        <div className="btns flex justify-between  gap-1 text-white ">
                            <button className='bg-blue-400 hover:bg-pink-400 rounded-full flex-1 p-2 flex justify-center items-center gap-1'> <AiFillLike size={20}/> Like</button>
                            <button className='bg-blue-400 hover:bg-pink-400 rounded-full flex-1 p-2 flex justify-center items-center gap-1'><ImShare size={20}/> Share</button>
                            <button className='bg-blue-400 hover:bg-pink-400 rounded-full flex-1 p-2 flex justify-center items-center gap-1'><AiFillDislike size={20}/> Dislike</button>
                        </div>


                    </div>
                </div>

       
            </div>
          )
    }

}

export default DetailPage