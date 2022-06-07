import { useEffect, useState } from "react";
import { Job } from "../common/types";

interface Props{
    job: Job,
    toggleEditModal: (id:number) => void,
    toggleDeleteModal: (id:number) => void,
}

const ListJob = ({job, toggleEditModal, toggleDeleteModal} : Props) => {


    return (
        <tr className="border-b border-gray-200 odd:bg-gray-100 even:bg-white">

       
                <th scope="row" className="px-6 py-4 font-medium text-gray-700  whitespace-nowrap">
                    {job.title}
                </th>
                <td className="px-6 py-4 text-gray-700">
                    {job.company}
                </td>
                <td className="px-6 py-4 text-gray-700">
                    {job.location}
                </td>
                <td className="px-6 py-4 text-gray-700">
                    {job.salary}
                </td>
                <td className="px-6 py-4 text-gray-700">
                    {job.date_Added && new Date(job.date_Added).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-gray-700">
                    {job.deadline && new Date(job.deadline).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-gray-700">
                    {job.status}
                </td>
                <td className="px-3 py-4 text-right space-x-6">
                    <a href="#" className="font-medium text-gray-700  hover:underline" onClick={() => toggleEditModal(job.id)}>Edit</a>
                    <a href="#" className="font-medium text-gray-700  hover:underline" onClick={() => toggleDeleteModal(job.id)}>Delete</a>
                </td>

    </tr>
        
    )
}


export default ListJob;