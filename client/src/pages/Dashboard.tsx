import { useEffect, useState } from "react";
import ControlPanel from "../components/ControlPanel";
import CreateJob from "../components/CreateJob";

import { Job } from "../common/types";
import JobList from "../components/JobList";
import axios from "axios";
import EditJob from "../components/EditJob";
import DeleteJob from "../components/DeleteJob";
import Loading from "../components/Loading";

const Dashboard = () => {

    const [createMode, setCreateMode] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [deleteMode, setDeleteMode] = useState<boolean>(false);
    const [currentJob, setCurrentJob] = useState<Job>();

    const [jobs, setJobs] = useState<Job[]>([]);

    const [loading, setLoading] = useState(false);


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

            setLoading(true);

            axios.get("https://localhost:7001/job/")
            .then(res => {
                setJobs(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
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
                {loading ?
                <Loading/>
                :
                <JobList jobs={jobs} toggleEditModal={toggleEditModal} toggleDeleteModal={toggleDeleteModal} setCurrentJob={setCurrentJob}/>
                }
              
            </div>
        </div>
    )
}

export default Dashboard;