import { useEffect, useMemo, useState } from "react";
import ControlPanel from "../components/ControlPanel";
import CreateJob from "../components/CreateJob";

import { Job } from "../common/types";
import JobList from "../components/JobList";
import axios from "axios";
import EditJob from "../components/EditJob";
import DeleteJob from "../components/DeleteJob";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const [createMode, setCreateMode] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [deleteMode, setDeleteMode] = useState<boolean>(false);
    const [currentJob, setCurrentJob] = useState<Job>();

    const [jobs, setJobs] = useState<Job[]>([]);

    const [loading, setLoading] = useState(false);

    const [sortConfig, setSortConfig] = useState<{column:string; direction: "ascending"|"descending";}>({column: "title", direction: "descending"});
    const [userToken, setUserToken] = useState<string | null>("");
    const navigate = useNavigate();

    const toggleCreateModal = () => {
        setCreateMode(!createMode);
    }

    const toggleEditModal = () => {
        setEditMode(!editMode);
    }

    const toggleDeleteModal = () => {
        setDeleteMode(!deleteMode);
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

        const token = localStorage.getItem("token");

        if(!token){
            navigate("/login");
            return;
        }

        setUserToken(token);

        const config = {
            headers: {Authorization: `Bearer ${userToken}`}
        }

        if(!editMode && !deleteMode){

            setLoading(true);

            axios.get("https://localhost:7001/api/v1/jobs", 
               config
            )
            .then(res => {
                console.log(res.data[0].date_Added);
                setJobs(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
        }

    },[editMode, deleteMode])

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
                <JobList jobs={jobs} toggleEditModal={toggleEditModal} toggleDeleteModal={toggleDeleteModal} setCurrentJob={setCurrentJob} handleSortColumn={handleSortColumn} sortConfig={sortConfig}/>
                }
              
            </div>
        </div>
    )
}

export default Dashboard;