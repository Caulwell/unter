import { useEffect, useMemo, useState } from "react";
import ControlPanel from "../components/ControlPanel";
import CreateJob from "../components/CreateJob";

import { Job } from "../common/types";
import JobList from "../components/JobList";
import EditJob from "../components/EditJob";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteJobAsync, getJobsAsync } from "../common/api";

const Dashboard = () => {

    const [createMode, setCreateMode] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [currentJob, setCurrentJob] = useState<Job>();

    const [jobs, setJobs] = useState<Job[]>([]);

    const [loading, setLoading] = useState(false);

    const [sortConfig, setSortConfig] = useState<{column:string; direction: "ascending"|"descending";}>({column: "title", direction: "descending"});
    const navigate = useNavigate();

    const toggleCreateModal = () => {
        setCreateMode(!createMode);
    }

    const toggleEditModal = () => {
        setEditMode(!editMode);
    }


    const deleteJob = (job:Job) => {

        Swal.fire({
            title: "Delete this job?",
            text: `${job.title} at ${job.company}`,
            icon: "warning",
            confirmButtonText: 'Delete'
        })
        .then((result) => {
            if(result.isConfirmed)
            {
                const removeJob = async () => {
                    const deleted = await deleteJobAsync(job.id);
                    if(deleted)
                    {
                        let newList = jobs.filter(el => el.id !== job.id);
                        setJobs(newList);
                    }
                    else
                    {
                        Swal.fire({
                            title: "Something went wrong",
                            text: `Could not delete this job`,
                            icon: "error",
                            confirmButtonText: 'Okay'
                        });
                    }
                }
                
                removeJob();
            }
            

            

        })
    }

    const sortFunction = (prop1:any, prop2:any) : number => {

        if(prop1){
            if(!prop2){
                return sortConfig.direction === "descending" ? -1 : 1;
            } else {
                if(prop1 < prop2) return sortConfig.direction === "descending" ? -1 : 1;
                if(prop1 > prop2) return sortConfig.direction === "descending" ? 1 : -1;
                return 0;
            }
        } else {
            if(!prop2){
                return 0;
            } else {
                return sortConfig.direction === "descending" ? 1 : -1;
            }
        }
    }

    const handleSortColumn = (column:string) => {
        if(sortConfig.column === column){
            if(sortConfig.direction === "ascending") setSortConfig({column: column, direction: "descending"});
            if(sortConfig.direction === "descending") setSortConfig({column: column, direction: "ascending"});
        } else {
            setSortConfig({column: column, direction: "descending"});
        }
    }

    useEffect(() => {

        setLoading(true);

        const token = localStorage.getItem("token");
        if(!token){
            navigate("/login");
            return;
        }

        const fetchData = async () => {
            const jobs = await getJobsAsync(token);
            setJobs(jobs.data);
        }
        fetchData();

        setLoading(false);

    },[])

    useEffect(() => {

        const sortedJobs = [...jobs];

        if(sortConfig.column === "title"){
            sortedJobs.sort((a,b) => sortFunction(a.title, b.title));
        }
        if(sortConfig.column === "company"){
            sortedJobs.sort((a,b) => sortFunction(a.company ,b.company));
        }
        if(sortConfig.column === "location"){
            sortedJobs.sort((a,b) => sortFunction(a.location ,b.location));
        }
        if(sortConfig.column === "salary"){
            sortedJobs.sort((a,b) => sortFunction(a.salary, b.salary));
        }
        if(sortConfig.column === "added"){
            sortedJobs.sort((a,b) => sortFunction(a.date_Added, b.date_Added));
        }
        if(sortConfig.column === "deadline"){
            sortedJobs.sort((a,b) => sortFunction(a.deadline, b.deadline));
        }
        if(sortConfig.column === "status"){
            sortedJobs.sort((a,b) => sortFunction(a.status, b.status));
        }

        setJobs(sortedJobs);

    }, [sortConfig])

    return (
        <div className="flex flex-col overflow-hidden  w-screen h-full p-6 ">
            {createMode &&
            <CreateJob toggleCreateModal={toggleCreateModal} setJobs={setJobs} jobs={jobs}/>}
            {editMode && 
            <EditJob job={currentJob} toggleEditModal={toggleEditModal} jobs={jobs} setJobs={setJobs}/>
            }
            <ControlPanel toggleCreateModal={toggleCreateModal}/>
            <div className="flex flex-col w-full h-full p-6">
                {loading ?
                <Loading/>
                :
                <JobList jobs={jobs} toggleEditModal={toggleEditModal} deleteJob={deleteJob} setCurrentJob={setCurrentJob} handleSortColumn={handleSortColumn} sortConfig={sortConfig}/>
                }
              
            </div>
        </div>
    )
}

export default Dashboard;