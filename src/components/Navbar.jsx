import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TfiClose, TfiAlignRight } from "react-icons/tfi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  // Tailwind classes for neon underline + glowing text
  const linkClass = "relative inline-block px-3 py-2 transition-all duration-500 group text-white";

  return (
    <div className='flex justify-between items-center h-12 max-w-[1240px] mx-auto bg-[#1c1c1c] bg-opacity-10'>
      <h1 className='text-3xl font-bold text-[#1E90FF]'></h1>

      {/* Desktop menu */}
      <ul className='hidden md:flex'>
        {[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: "About", path: "/about" },
          { name: "Writtern", path: "/writtern" },
        ].map((item) => (
          <li key={item.name} className='p-4'>
            <Link to={item.path} className={linkClass}>
              <span className="relative z-10 group-hover:text-[#1E90FF] group-hover:drop-shadow-[0_0_6px_#1E90FF]">
                {item.name}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#1E90FF] shadow-[0_0_8px_#1E90FF] transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu button */}
      <div onClick={handleNav} className='block md:hidden z-20 cursor-pointer'>
        {!nav ? <TfiClose size={24} /> : <TfiAlignRight size={24} />}
      </div>

      {/* Mobile menu */}
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#1c1c1c] ease-in-out duration-500 z-10' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#1E90FF] m-4'>React.</h1>
        <ul className='uppercase'>
          {[
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "About", path: "/about" },
            { name: "Writtern", path: "/writtern" },
          ].map((item) => (
            <li key={item.name} className='p-4 border-b border-gray-700'>
              <Link to={item.path} className={linkClass} onClick={handleNav}>
                <span className="relative z-10 group-hover:text-[#1E90FF] group-hover:drop-shadow-[0_0_6px_#1E90FF]">
                  {item.name}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1E90FF] shadow-[0_0_8px_#1E90FF] transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
