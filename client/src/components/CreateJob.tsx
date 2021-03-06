import { useState } from "react";
import { createJobAsync } from "../common/api";
import {Job} from "../common/types";


interface Props{

    toggleCreateModal: () => void;
    setJobs: (jobs:Job[]) => void;
    jobs: Job[];
}



const CreateJob = ({toggleCreateModal, setJobs, jobs} : Props) => {

    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");


    const handleForm = async () => {
        const job = await createJobAsync(company, title, location);

        if(job){
            setTitle("");
            setCompany("");
            setLocation("");
            toggleCreateModal();
            setJobs([...jobs, job]);
        }
    }

    
    return (
        <div className="bg-modalBg w-screen h-screen z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100">

                <div className=" z-10 rounded-md shadow-md bg-white opacity-100 flex flex-col text-slate-700">
                    <div className="flex justify-center border-b-2 p-2 font-bold">
                            Add Job
                    </div>

                    <div className="flex flex-col space-y-4 py-6 px-4">

                    <div className="flex flex-col space-y-2">
                            <div className="flex justify-between text-sm px-1">
                                <label htmlFor="company" className="font-bold">Company</label>
                                <span className="font-light text-slate-400">Required</span>
                            </div>
                            <input 
                            className=" w-96 p-2 rounded-md border border-violet-500 text-sm hover:border-violet-800 focus:outline-violet-800" 
                            name="company" 
                            value={company} 
                            onChange={e => setCompany(e.target.value)} 
                            type="text" 
                            placeholder="Company"/>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <div className="flex justify-between text-sm px-1">
                                <label htmlFor="title" className="font-bold">Job Title</label>
                                <span className="font-light text-slate-400">Required</span>
                            </div>
                            <input 
                            className=" w-96 p-2 rounded-md border border-violet-500 text-sm hover:border-violet-800 focus:outline-violet-800" 
                            name="title" 
                            value={title} 
                            onChange={e => setTitle(e.target.value)} 
                            type="text" 
                            placeholder="Job Title"/>
                        </div>

                        <div className="flex flex-col space-y-2 pb-3">
                            <div className="flex justify-between text-sm px-1">
                                <label htmlFor="location" className="font-bold">Location</label>
                                <span className="font-light text-slate-400">Required</span>
                            </div>
                            <input 
                            className=" w-96 p-2 rounded-md border border-violet-500 text-sm hover:border-violet-800 focus:outline-violet-800" 
                            name="location" 
                            value={location} 
                            onChange={e => setLocation(e.target.value)} 
                            type="text" 
                            placeholder="Location"/>
                        </div>

                        <div className="border-t flex justify-end m space-x-4 pt-6">
                            <button onClick={() => toggleCreateModal()} className="p-1 px-2 text-violet-800 font-bold text-sm border border-slate-300 rounded hover:shadow-md">Discard</button>
                            <button onClick={() => handleForm()} className="p-1 px-2 text-white font-bold text-sm bg-violet-800 rounded hover:shadow-md">Save Job</button>
                        </div>
                       
        
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CreateJob;