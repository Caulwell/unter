import ListJob from "./ListJob";

import { Job } from "../common/types";

interface Props{
    jobs: Job[],
    toggleEditModal: (id:number) => void,
    toggleDeleteModal: (id:number) => void
}
const JobList = ({jobs,toggleEditModal, toggleDeleteModal} : Props) => {

    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-50">
        <thead className="text-xs  uppercase text-slate-700 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Job Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Company
                </th>
                <th scope="col" className="px-6 py-3">
                    Location
                </th>
                <th scope="col" className="px-6 py-3">
                    Salary
                </th>
                <th scope="col" className="px-6 py-3">
                   Added
                </th>
                <th scope="col" className="px-6 py-3">
                    Deadline
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
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
                    <ListJob job={job} toggleEditModal={toggleEditModal} toggleDeleteModal={toggleDeleteModal}/>
                )
            })}
            
        </tbody>
    </table>
</div>
    )

}

export default JobList;