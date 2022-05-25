
import logo from "../img/logo.png"

const Nav = () => {

    return (
        <nav className="flex p-3 px-8 justify-between w-full align-center">
            {/* Logo */}
            <div className="">
                    <img
                      className="mx-auto h-8 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
            </div>
            {/* Nav Items */}
            <div className="flex space-x-3 align-center">
                <a href="#" className=" p-1 px-4 rounded text-white bg-uiElementBg">Login</a>
            </div>
        </nav>
    )

}

export default Nav;