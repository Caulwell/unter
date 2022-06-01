import axios from "axios";
import { useState } from "react";
import {Job} from "../common/types";


interface Props{

    toggleModal: () => void;
    setJobs: (jobs:Job[]) => void;
    jobs: Job[];
}



const CreateJob = ({toggleModal, setJobs, jobs} : Props) => {

    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");


    const handleForm = () => {
        axios.post("https://localhost:7001/job/", {
            title,
            company,
            location,
        })
        .then(res => {
            setTitle("");
            setCompany("");
            setLocation("");
            toggleModal();
            setJobs([...jobs, res.data]);
        })
        .catch(err => {
            console.log(err);
        })
    }

    
    return (
        <div className="bg-modalBackground w-screen h-screen z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100">

                <div className=" z-10 rounded-md shadow-md bg-white opacity-100 flex flex-col text-slate-700">
                    <div className="flex justify-center border-b-2 p-2 font-bold">
                            Add Job
                    </div>

                    <div className="flex flex-col space-y-4 py-6 px-4" onSubmit={handleForm}>

                    <div className="flex flex-col space-y-2">
                            <div className="flex justify-between text-sm px-1">
                                <label htmlFor="company" className="font-bold">Company</label>
                                <span className="font-light text-slate-400">Required</span>
                            </div>
                            <input 
                            className=" w-96 p-2 rounded-md border border-slate-200 text-sm hover:border-slate-500 focus:outline-slate-500" 
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
                            className=" w-96 p-2 rounded-md border border-slate-200 text-sm hover:border-slate-500 focus:outline-slate-500" 
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
                            className=" w-96 p-2 rounded-md border border-slate-200 text-sm hover:border-slate-500 focus:outline-slate-500" 
                            name="location" 
                            value={location} 
                            onChange={e => setLocation(e.target.value)} 
                            type="text" 
                            placeholder="Location"/>
                        </div>

                        <div className="border-t flex justify-end m space-x-4 pt-6">
                            <button onClick={() => toggleModal()} className="p-1 px-2 text-slate-500 font-bold text-sm border border-slate-300 rounded hover:shadow-md">Discard</button>
                            <button onClick={() => handleForm()} className="p-1 px-2 text-white font-bold text-sm bg-slate-500 rounded hover:shadow-md">Save Job</button>
                        </div>
                       
        
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CreateJob;