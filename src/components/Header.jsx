import { Link } from "react-router-dom";
import { TiThMenu, TiTimes } from "react-icons/ti";


function Header() {
  return (
    <header className="bg-[#141c27] text-white shadow-lg">
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
            <div className="lg:hidden cursor-pointer">
                <TiThMenu size={30}/>
                <TiTimes size={30}/>
            </div>
        </div>
    </header>
  )
}

export default Header

