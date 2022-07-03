import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { editJobAsync } from "../common/api";
import { Job } from "../common/types";
import Loading from "./Loading";

interface Props{
    job: Job | undefined,
    toggleEditModal: () => void,
    jobs: Job[],
    setJobs: Dispatch<SetStateAction<Job[]>>,
}



const EditJob = ({job, toggleEditModal, jobs, setJobs} : Props) => {

    const [title, setTitle] = useState(job?.title || "");
    const [company, setCompany] = useState(job?.company || "");
    const [location, setLocation] = useState(job?.location || "");
    const [salary, setSalary] = useState(job?.salary || "");
    const [deadline, setDeadline] = useState(job?.deadline ? new Date(job?.deadline).toLocaleDateString() : "");
    const [status, setStatus] = useState(job?.status || "");
    const [description, setDescription] = useState(job?.description || "");
    const [url, setUrl] = useState(job?.url || "");

    const [loading, setLoading] = useState(false);

    const handleEdit = async () => {

        setLoading(true);

            const data = await editJobAsync(title,company,location,salary,deadline,status,description,url,job?.id);
            setTitle("");
            setCompany("");
            setLocation("");
            setSalary("");
            setDeadline("");
            setStatus("");
            setDescription("");
            setUrl("");
            setLoading(false);

            setJobs(jobs.map(el => job?.id == el.id ? data : el));
            toggleEditModal();

            Swal.fire({
                title: "Success",
                text: `Job successfully edited`,
                icon: "success",
                confirmButtonText: 'Okay'
            });
                


    }





    return (

        <div className="bg-modalBg w-screen h-screen z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100">

                <div className="w-fit max-h-screen z-10 rounded-md shadow-md bg-white opacity-100 flex flex-col text-slate-700 p-3 overflow-y-auto">

                    {loading ?
                    <Loading/>
                    :
                    <>
                    <div className="flex justify-between items-center border-b-2 px-8">
                    <div className=" p-6 flex flex-col align-start font-bold">
                        <h1 className="text-2xl">{title}</h1>
                        <h3 className="font-light text-lg">{company}</h3>
                    </div>
                    <div className="flex justify-end m space-x-4 pt-6">
                            <button onClick={() => toggleEditModal()} className="p-1 px-2 text-violet-800 font-bold text-sm border border-violet-400 rounded hover:shadow-md">Discard</button>
                            <button onClick={() => handleEdit()} className="p-1 px-2 text-white font-bold text-sm bg-violet-800 rounded hover:shadow-md">Save Job</button>
                    </div>
                    </div>
                   

                    <div className="flex py-3 px-14 space-x-6">

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="title" className="font-bold text-sm">Job Title</label>
                            <input 
                            className=" w-36 p-2 rounded-md border border-violet-500 text-sm hover:border-slate-500 focus:outline-slate-500" 
                            name="title" 
                            value={title} 
                            onChange={e => setTitle(e.target.value)} 
                            type="text" 
                            placeholder="Job Title"/>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="company" className="font-bold text-sm">Company</label>
                            <input 
                            className=" w-36 p-2 rounded-md border border-violet-500 text-sm hover:border-slate-500 focus:outline-slate-500" 
                            name="company" 
                            value={company} 
                            onChange={e => setCompany(e.target.value)} 
                            type="text" 
                            placeholder="Company"/>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="location" className="font-bold text-sm">Location</label>
                            <input 
                            className=" w-36 p-2 rounded-md border border-violet-500 text-sm hover:border-violet-800 focus:outline-slate-500" 
                            name="location" 
                            value={location} 
                            onChange={e => setLocation(e.target.value)} 
                            type="text" 
                            placeholder="Location"/>
                        </div>
        
                    </div>
                    <div className="flex py-3 px-14 space-x-6">

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="salary" className="font-bold text-sm">Salary</label>
                            <input 
                            className=" w-36 p-2 rounded-md border border-violet-500 text-sm hover:border-violet-800 focus:outline-slate-500" 
                            name="salary" 
                            value={salary} 
                            onChange={e => setSalary(e.target.value)} 
                            type="text" 
                            placeholder="Salary"/>
                        </div>
                        <div className="flex flex-col grow space-y-2">
                            <label htmlFor="url" className="font-bold text-sm">URL</label>
                            <input 
                            className=" grow p-2 rounded-md border border-violet-500 text-sm hover:border-violet-800 focus:outline-slate-500" 
                            name="url" 
                            value={url} 
                            onChange={e => setUrl(e.target.value)} 
                            type="text" 
                            placeholder="URL"/>
                        </div>
        
                    </div>

                    <div className="flex py-3 px-14 space-x-6">

                        <div className="flex grow flex-col space-y-2">
                            <label htmlFor="description" className="font-bold text-sm">Description</label>
                            <textarea 
                            className=" grow p-2 rounded-md border border-violet-500 text-sm hover:border-violet-800 focus:outline-slate-500" 
                            name="description" 
                            value={description} 
                            onChange={e => setDescription(e.target.value)} 
                            placeholder="Description"/>
                        </div>
        
                    </div>

                    <div className="flex py-3 px-14 space-x-6">

                        <div className="flex grow flex-col space-y-2">
                            <label htmlFor="deadline" className="font-bold text-sm">Deadline</label>
                            <input 
                            className=" grow p-2 rounded-md border border-violet-500 text-sm hover:border-violet-800 focus:outline-slate-500" 
                            name="deadline" 
                            value={deadline} 
                            type="date"
                            onChange={e => setDeadline(e.target.value)} />
                        </div>

                        <div className="flex grow flex-col space-y-2">
                            <label htmlFor="status" className="font-bold text-sm">Status</label>
                            <select 
                            className=" grow p-2 rounded-md border border-violet-500 text-sm hover:border-violet-800 focus:outline-slate-500" 
                            name="status" 
                            value={status} 
                            onChange={e => setStatus(e.target.value)}>
                                <option>New</option>
                                <option>Applied</option>
                                <option>Interview</option>
                                <option>Offer</option>
                                <option>Rejected</option>
                            </select>
                        </div>


        
                    </div>

                    </>

                    }
                    

                
                    

                </div>
            </div>

        </div>

    )
}


export default EditJob;
