import React from 'react'
import profile from "../pic/tribb.jpg"

const About = () => {
    return (
        <>
        <section className="px-5 pb-10 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:max-w-7xl lg:mx-auto">
        <div className="flex items-center justify-center md:items-start">
            <div className="mr-1">
              <h4 className="font-bold">Nnamdi Okeke</h4>
              <p className="text-gray-500 text-sm">may his days be long</p>
            </div>
             <img src={profile} alt="" className="w-10 md:h-10 rounded-full"/>    
             </div>

             <div>
              <q className="text-4xl text-center block mt-5 md:mt-0">One day, in retrospect, the years of struggle will strike you as the most beautiful.</q>   
             </div>

             <div className="grid grid-cols-1 gap-5 mt-5 text-center md:text-left md:mt-0">
               <p>My high school education was at an all boys boarding school. I dare to say it will be a good thing to experience again.
                   Whenever i recall the bonds formed admist toil and laughter, I can only look back and cast a deep wide smile on my face. </p>
                <p>I currently reside in abuja, Nigeria with my family.</p>
               <p>Life truly is beautiful</p>  
             </div>
        </section>
            
        </>
    )
}

export default About
