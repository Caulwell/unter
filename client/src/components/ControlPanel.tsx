import {AiFillFilter} from "react-icons/ai";
import {MdCreate} from "react-icons/md";
import {FaMapMarkerAlt} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface ControlPanelProps{
    toggleCreateModal: () => void;
}


const ControlPanel = ({toggleCreateModal} : ControlPanelProps) => {

    const navigate = useNavigate();


    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };


    return (
        <div className="flex  justify-between w-full px-8 space-x-8 items-center h-12">
            <div className="flex space-x-6">
            <button className="p-1 px-2 text-white font-bold text-sm bg-violet-800 rounded hover:shadow-md flex items-center space-x-2">
                <AiFillFilter/> <span>Filter</span>
            </button>
            <div className="flex space-x-6">
                <button className="p-1 px-2 text-white font-bold text-sm bg-violet-800 rounded hover:shadow-md flex items-center space-x-2">
                <FaMapMarkerAlt/> <span>Map View</span>
                </button>
                
            </div>
            <button onClick={toggleCreateModal}  className="p-1 px-2 text-white font-bold text-sm bg-violet-800 rounded hover:shadow-md flex items-center space-x-2">
            <MdCreate/> <span>Add Job</span>
            </button>
            </div>
            <button onClick={handleLogout}  className="p-1 px-2 text-white font-bold text-sm bg-violet-800 rounded hover:shadow-md flex items-center space-x-2">
            <MdCreate/> <span>Logout</span>
            </button>
            
        </div>
    )


}


export default ControlPanel;