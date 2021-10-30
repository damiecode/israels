import React from "react"; 

const Nav = () => {
  return (
    <div className="flex justify-between p-10 text-2xl">
      <li className="list-none uppercase font-bold tracking-widest">Israel</li>
      <li className="list-none uppercase font-bold tracking-widest">Project
        <span className="text-3xl mx-2">/</span>
        <span className="text-gray-600">others</span>
      </li>
      <li className="list-none uppercase font-bold text-gray-600 tracking-widest">About</li>
    </div>
  )
}

export default Nav;