import { Link } from "react-router-dom";
import { TiThMenu, TiTimes } from "react-icons/ti";
import { useState } from "react";


function Header() {

    const [nav, setNav] =useState(false);

    const closeMenu = () => {
        setNav(false);
    }

  return (
    <header className="bg-[#141c27] text-white shadow-lg fixed w-full z-10">
        <div className="flex items-center justify-between p-4 w-4/5 mx-auto">
            <div className="text-2xl lg:text-3xl font-bold">
                <Link to="/" >
                   <h2 className="font-signature text-green">Mungai</h2>
                </Link>
            </div>
            <div className="hidden lg:flex">
                <ul className="flex items-center gap-5 font-semibold text-lg">
                    <Link to="/" >
                       <li className="hover:underline">Home</li>
                    </Link>
                    <Link to="/portfolio" >
                       <li className="hover:underline">Porfolio</li>
                    </Link>
                    <Link to="/services" >
                       <li className="hover:underline">Services</li>
                    </Link>
                    <Link to="/contacts" >
                       <li className="hover:underline">Contacts</li>
                    </Link>
                    <Link to="/contacts" >
                        <button className="bg-green text-black px-5 py-1 rounded-full hover:opacity-80">Hire Me</button>
                    </Link>
                </ul>
            </div>
            <div onClick={() => setNav(!nav)} className="lg:hidden cursor-pointer z-10">
                {nav ? <TiTimes size={30} className="text-green"/> : <TiThMenu size={30} className="text-green"/>}
                
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen font-semibold text-4xl cursor-pointer bg-gradient-to-b from-black to-gray-800">
                   <Link to="/" onClick={closeMenu}>
                      <li className="hover:underline px-4 py-6">Home</li>
                   </Link>
                   <Link to="/portfolio" onClick={closeMenu}>
                      <li className="hover: px-4 py-6">Porfolio</li>
                   </Link>
                   <Link to="/services" onClick={closeMenu}>
                      <li className="hover:underline px-4 py-6">Services</li>
                   </Link>
                   <Link to="/contacts" onClick={closeMenu}>
                      <li className="hover:underline px-4 py-6">Contacts</li>
                   </Link>
                   <Link to="/contacts" onClick={closeMenu}>
                       <button className="bg-green text-black px-5 py-1 rounded-full hover:opacity-80">Hire Me</button>
                   </Link>
                </ul>
            ) }

            
        </div>
    </header>
  )
}

export default Header

