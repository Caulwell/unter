import { useEffect, useState } from "react";
import ControlPanel from "../components/ControlPanel";
import CreateJob from "../components/CreateJob";

import { Job } from "../common/types";
import JobList from "../components/JobList";
import axios from "axios";
import EditJob from "../components/EditJob";
import DeleteJob from "../components/DeleteJob";

const Dashboard = () => {

    const [createMode, setCreateMode] = useState<boolean>(false);

    const [currentJob, setCurrentJob] = useState<Job>();

    const [editMode, setEditMode] = useState<boolean>(false);
    const [deleteMode, setDeleteMode] = useState<boolean>(false);

    const [jobs, setJobs] = useState<Job[]>([]);


    const toggleCreateModal = () => {
        setCreateMode(!createMode);
    }

    const toggleEditModal = () => {
        setEditMode(!editMode);
    }

    const toggleDeleteModal = () => {
        setDeleteMode(!deleteMode);
    }


    useEffect(() => {

        if(!editMode && !deleteMode){
            axios.get("https://localhost:7001/job/")
            .then(res => {
                setJobs(res.data);
                console.log(res.data[0].deadline);
                console.log(typeof res.data[0].deadline);
            })
            .catch(err => {
                console.log(err);
            });
        }
    },[editMode, deleteMode])

    return (
        <div className="flex flex-col overflow-hidden  w-screen h-full ">
            {createMode &&
            <CreateJob toggleCreateModal={toggleCreateModal} setJobs={setJobs} jobs={jobs}/>}
            {editMode && 
            <EditJob job={currentJob} toggleEditModal={toggleEditModal}/>
            }
            {deleteMode &&
            <DeleteJob job={currentJob} toggleDeleteModal={toggleDeleteModal}/>
            }
            <ControlPanel toggleCreateModal={toggleCreateModal}/>
            <div className="flex flex-col w-full h-full p-6">
                <JobList jobs={jobs} toggleEditModal={toggleEditModal} toggleDeleteModal={toggleDeleteModal} setCurrentJob={setCurrentJob}/>
            </div>
        </div>
    )
}

export default Dashboard;