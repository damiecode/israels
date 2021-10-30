import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import { ReactComponent as CloseMenu } from "./assets/svg/Cancel.svg";
import { ReactComponent as MenuIcon } from "./assets/svg/Menu.svg";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <div className="block m-7 text-sm lg:text-lg">
        <ul className={click ? "nav-options active" : "nav-options flex justify-between"}>
          <li className="list-none uppercase font-bold tracking-widest options" onClick={closeMobileMenu}>
            <Link to="/">Israel</Link>
          </li>
          {click ? (
            <>
              <li className="list-none uppercase font-bold tracking-widest options" onClick={closeMobileMenu}>
                <Link to="/project"> Project </Link>
              </li>
              <li className="list-none uppercase font-bold tracking-widest options" onClick={closeMobileMenu}>
                <Link to="/others"> Others</Link>
              </li>
            </>
          ): 
            <div className="-mt-2 lg:-mt-1 xl:mt-0">
              <li className="list-none uppercase font-bold tracking-widest options" onClick={closeMobileMenu}>
                <span>Project</span>
                <span className="text-3xl mx-2">/</span>
                <span className="text-gray-600">others</span>
              </li>
            </div>
          }
          <li className="list-none uppercase font-bold text-gray-600 tracking-widest options" onClick={closeMobileMenu}>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="mobile-menu block md:hidden" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    </>
  )
}

export default Nav;