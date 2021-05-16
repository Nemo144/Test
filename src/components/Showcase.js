/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'


const Showcase = () => {
    return (
        <>
          <section id="home" className="pb-20">
          <div className="bg-transparent shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Personal Information
                </h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                            Full name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                            Nnamdi Okeke
                        </dd>
                    </div>
                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                            High School
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                            Saints Simon and Jude Seminary, Kuje Abuja
                        </dd>
                    </div>
                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                            Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                            onnamdialex@gmail.com
                        </dd>
                    </div>
                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                            Tertiary Institution 
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          University Of Lagos, Akoka, Lagos
                        </dd>
                    </div>
                    <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">
                            About
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                        Welcome to my website, I am Nnamdi, a graduate of physics from the university of Lagos, Nigeria.
                 I am currently on the path of sotware engineering and i must admit how fascinating and sometimes frustrating it can all get.
                 But granted the pros outweigh the cons, i just have to push forward and try to enjoy every moment of it.
                 I would say my experience so far has been quite interesting, from tutorials to building this project, which is by the way the very first for me...the first of many to come.
                 I can only get better from here.
                 I very much appreciate the tech community as i draw inspiration from the bottomless knowledge of this great community.
                 
                 
                 Code and lets code!
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
          </section>  
        </>
    )
}

export default Showcase
