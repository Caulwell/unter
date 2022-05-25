
import { Link } from "react-router-dom";
import logo from "../img/logo.png"

const Nav = () => {

    return (
        <nav className="bg-white border-b border-gray-200 fixed z-30 w-full flex justify-between align-center p-2">
            <div className="flex space-x-4">
                <svg id="toggleSidebarMobileHamburger" className="w-10 h-10 text-slate-400 hover:bg-slate-100 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd">
                    </path>
                </svg>
                <Link to="/">
                <img
                    className="mx-auto h-10 w-auto"
                    src={logo}
                    alt="Workflow"
                />
                </Link>
               
            </div>
            <div className="flex space-x-3 align-center">
                <Link to="/login" className=" p-2 px-4 rounded text-white bg-uiElementBg">Login</Link>
            </div>
        </nav>
    )

}

export default Nav;