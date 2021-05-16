/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { MailIcon, PhoneIcon } from "@heroicons/react/solid"
import headers from "../pic/nemo.jpg"


const Header = () => {
    return (
     <>
        <header className="sticky w-full flex items-center justify-between px-5 py-3">
        <div className="bg-gray-800 px-4 py-5 border-b border-gray-200 sm:px-6">
            <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                <div className="ml-4 mt-4">
                    <div className="flex items-center">
                        <div className="flex w-full">
                            <img
                                className="h-12 w-12 rounded-full"
                                src={headers}
                                alt=""
                            />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg text-gray-400 leading-6 font-medium">
                                Nnamdi Okeke
                            </h3>
                            <p className="text-sm text-gray-500">
                                <a href="#">@Nemzz_</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ml-4 mt-4 flex-shrink-0 flex">
                    <button
                        type="button"
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <PhoneIcon
                            className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                        <span>Phone</span>
                    </button>
                    <button
                        type="button"
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <MailIcon
                            className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                        <span>Email</span>
                    </button>
                </div>
            </div>
        </div>
           </header>
     </>
    )
}

export default Header