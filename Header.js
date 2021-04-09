import React from 'react'
import {FaSearch} from "react-icons/fa"

const Header = () => {
    return (
     <>
        <header className="sticky w-full flex items-center justify-between px-5 py-3">
         <div className="logo">
             <h2>Portfolio</h2>
        </div>

          <nav>
              <ul className="flex items-center">
                  <li className="mx-2">
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <FaSearch />
                  </li>
                </ul>
             </nav>
           </header>
     </>
    )
}

export default Header