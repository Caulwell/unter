import { useEffect, useState } from "react";
import ControlPanel from "../components/ControlPanel";
import CreateJob from "../components/CreateJob";

import { Job } from "../common/types";
import JobList from "../components/JobList";
import axios from "axios";

const Dashboard = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [jobs, setJobs] = useState<Job[]>([]);


    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }


    useEffect(() => {

        axios.get("https://localhost:7001/job/")
        .then(res => {
            setJobs(res.data);
            console.log(new Date(res.data[0].date_Added).toLocaleDateString());
        })
        .catch(err => {
            console.log(err);
        });
    },[])

    return (
        <div className="flex flex-col overflow-hidden  w-screen h-full ">
            {modalOpen &&
            <CreateJob toggleModal={toggleModal} setJobs={setJobs} jobs={jobs}/>}
            <ControlPanel toggleModal={toggleModal}/>
            <div className="flex flex-col w-full h-full p-6">
                <JobList jobs={jobs}/>
            </div>
        </div>
    )
}

export default Dashboard;