import React from 'react'
import cocktailee from '../assets/cock.png'

function About() {
  return (
    <div className=' max-w-6xl mx-auto p-5 md:p-0 '>
      <p className='font-[700] text-3xl mt-5 text-center mb-10' >About</p>
      <div className="2-cols flex flex-col md:flex-row items-center py-0 shadow-lg px-2 ">
        <img src={cocktailee} alt="" className='md:w-1/2 mb-10 md:mb-0' />
        <div className="text">
        <p className=' font-[500] '>The idea of a cocktail has been around for centuries. From the first few Scots using malt and bitters to make whiskey up through recent years, cocktails are a widely appreciated take on consuming alcohol. 

But that doesn’t mean everyone knows what a cocktail is, or how to make one. </p>

<p className='py-10 font-[500]'> Or, perhaps you’ve made one before but are now looking for the best cocktail recipe books. Unless you enjoy visiting new bars or have worked for one, cocktails may be a brand new concept to you.</p>

<p className=' font-[500]'> Between fall cocktails, winter cocktails, and seasonal drinks of all kinds, there’s a lot to explore. Keep reading this post to learn the basics about cocktails, plus common recipes.</p>
        </div>
     
        </div>  
    
      </div>
  )
}

export default About