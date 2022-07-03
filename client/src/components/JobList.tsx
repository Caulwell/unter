import ListJob from "./ListJob";

import { Job } from "../common/types";
import { Dispatch, SetStateAction, useState } from "react";

import {FaChevronDown, FaChevronUp} from "react-icons/fa";

interface Props{
    jobs: Job[],
    toggleEditModal: (id:number) => void,
    setCurrentJob: Dispatch<SetStateAction<Job | undefined>>,
    deleteJob: (job:Job) => void,
    handleSortColumn: (column:string) => void,
    sortConfig: {column:string, direction: "ascending" | "descending"},
}
const JobList = ({jobs,toggleEditModal, deleteJob, setCurrentJob, handleSortColumn, sortConfig} : Props) => {


    const getArrow = () => sortConfig.direction === "ascending" ? <FaChevronUp/> : <FaChevronDown/>

    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-50">
        <thead className="text-xs  uppercase text-slate-700 ">
            <tr >
                <th scope="col" className="px-6 py-3 hover:bg-slate-300 cursor-pointer max-w-8" onClick={() => handleSortColumn("title")}>
                    <span className="flex space-x-6 items-center"><span>title</span> {sortConfig.column === "title" && getArrow()}</span>
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-slate-300 cursor-pointer " onClick={() => handleSortColumn("company")}>
                    <span className="flex space-x-6 items-center"><span>company</span> {sortConfig.column === "company" && getArrow()}</span>
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-slate-300 cursor-pointer " onClick={() => handleSortColumn("location")}>
                    <span className="flex space-x-6 items-center"><span>location</span> {sortConfig.column === "location" && getArrow()}</span>
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-slate-300 cursor-pointer " onClick={() => handleSortColumn("salary")}>
                    <span className="flex space-x-6 items-center"><span>salary</span> {sortConfig.column === "salary" && getArrow()}</span>
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-slate-300 cursor-pointer " onClick={() => handleSortColumn("added")}>
                    <span className="flex space-x-6 items-center"><span>added</span> {sortConfig.column === "added" && getArrow()}</span>
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-slate-300 cursor-pointer " onClick={() => handleSortColumn("deadline")}>
                    <span className="flex space-x-6 items-center"><span>deadline</span> {sortConfig.column === "deadline" && getArrow()}</span>
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-slate-300 cursor-pointer " onClick={() => handleSortColumn("status")}>
                    <span className="flex space-x-6 items-center"><span>status</span> {sortConfig.column === "status" && getArrow()}</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                    <span className="sr-only">Delete</span>
                </th>
            </tr>
        </thead>
        <tbody>
            {jobs.map(job => {
                return (
                    <ListJob key={`job${job.id}`} job={job} toggleEditModal={toggleEditModal} deleteJob={deleteJob} setCurrentJob={setCurrentJob}/>
                )
            })}
            
        </tbody>
    </table>
</div>
    )

}

export default JobList;