
import { Link } from "react-router-dom";
import logo from "../img/logo.png"

const Nav = () => {

    return (
        <nav className="bg-white border-b border-gray-200 fixed z-30 w-full flex justify-between align-center p-2 px-12">
            <div className="flex space-x-4">
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