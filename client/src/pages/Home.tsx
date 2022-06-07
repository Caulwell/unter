import { Link } from "react-router-dom";



const Home = () => {

    return (
        <div className="flex flex-col px-6 mx-auto min-h-full">
            {/* Hero section */}
            <div className=" flex flex-col container justify-center min-h-full text-left md:text-center ">
                <h1 className="text-3xl font-bold text-textDark">Manage Your Job Hunt</h1>
                <h2 className="text-3xl font-bold text-textLighter mb-3">With Job'unt</h2>
                <p className="text-slate-500 mb-12">Collate, organise, and analyse your way into a new role</p>
                <Link 
                    to="/dashboard"
                    className="p-3  pt-2 text-white bg-primaryBg rounded-full baseline hover:bg-primaryBg text-center">
                    Get Started
                </Link>
            </div>
        </div>
    )

}

export default Home;