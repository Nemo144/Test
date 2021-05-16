import React from 'react'
import headers from "../pic/nemo.jpg"

const About = () => {
    return (
        <>
        <section className="px-5 pb-10">
        <div className="relative bg-white">
            <div className="lg:absolute lg:inset-0">
                <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                    <img
                        className="h-60 w-full object-cover lg:absolute lg:h-full"
                        src={headers}
                        alt=""
                    />
                </div>
            </div>
            <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                <div className="lg:col-start-2 lg:pl-8 bg-blue-200">
                    <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                        <p className="mt-8 text-lg text-gray-900 bg-transparent">
                        My high school education was at an all boys boarding school. I dare to say it will be a good thing to experience again.
                        Whenever i recall the bonds formed admist toil and laughter, I can only look back and cast a deep wide smile on my face.I currently reside in abuja, Nigeria with my family.
                        </p>
                        <div className="mt-5 prose prose-indigo text-gray-900">
                        <h3>Hobbies</h3>
                            <ul>
                                <li>
                                    The newest acquired one; coding.
                                </li>
                                <li>
                                    Going to the gym.
                                </li>
                                <li>
                                    Playing Fifa.
                                </li>
                            </ul>
                            <p>
                                and so on.
                            </p>

                            <div className="mt-8 text-gray-900">
                            <q className="text-4xl text-center block mt-5 md:mt-0">One day, in retrospect, the years of struggle will strike you as the most beautiful.</q>
                            <q className="text-4xl text-center block mt-5 md:mt-0">The first step to make a change in your life, to get what you want from life, to make your life better is to first specifically decide what it is you want. Unless you know what you want you will never arrive because you have no final destination.</q>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
            
        </>
    )
}

export default About
