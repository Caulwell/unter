import { useState } from "react";
import ControlPanel from "../components/ControlPanel";
import JobModal from "../components/JobModal";



const Dashboard = () => {

    const [modalOpen, setModalOpen] = useState(false);


    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    return (
        <div className="flex flex-col overflow-hidden  w-screen h-full ">
            {modalOpen &&
            <JobModal toggleModal={toggleModal}/>}
            <ControlPanel toggleModal={toggleModal}/>
        </div>
    )
}

export default Dashboard;