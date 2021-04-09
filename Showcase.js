import React from 'react'
import profile from "../pic/tribb.jpg"
import showcaseImage from "../pic/skye.jpg"

const Showcase = () => {
    return (
        <>
          <section id="home" className="pb-20">
          <div className="flex items-center justify-center py-10">
            <div className="mr-1">
              <h4 className="font-bold">Nnamdi Okeke</h4>
              <p className="text-gray-500 text-sm">may his days be long</p>
            </div>
             <img src={profile} alt="" className="w-10 rounded-full"/>    
             </div>

             <div className="px-5 text-center">
               <h1 className="text-4xl text-gray-900 mb-2">What a man thinks, he can achieve</h1>
               <p>Hi. 
                 Welcome to my website, I am Nnamdi, a graduate of physics from the university of Lagos, Nigeria.
                 I am currently on the path of sotware engineering and i must admit how fascinating and sometimes frustrating it can all get.
                 But granted the pros outweigh the cons, i just have to push forward and try to enjoy every moment of it.
                 I would say my experience so far has been quite interesting, from tutorials to building this project, which is by the way the very first for me...the first of many to come.
                 I can only get better from here.
                 I very much appreciate the tech community as i draw inspiration from the bottomless knowledge of this great community.
                 
                 
                 Code and lets code!</p>
             </div>

             <div className="showcase-image"></div>
               <img src={showcaseImage} alt=""
               className="lg:w-full lg:h-1/96" />
          </section>  
        </>
    )
}

export default Showcase
