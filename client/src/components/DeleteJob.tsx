import axios from "axios";
import { Job } from "../common/types";

interface Props{
    job: Job | undefined,
    toggleDeleteModal: () => void
}


const DeleteJob = ({job, toggleDeleteModal} : Props) => {

    const handleDelete = () => {

        axios.delete(`https://localhost:7001/job/${job && job.id}`)
        .then(res => {
            console.log(res);
            toggleDeleteModal();
            
        })
        .catch(err => {
            console.log(err);
            toggleDeleteModal();
        })

}

    return (
        <div className="bg-modalBg w-screen h-screen z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100">

            <div className="w-fit max-h-screen z-10 rounded-md shadow-md bg-white opacity-100 flex flex-col text-slate-700 p-3 overflow-y-auto">

                <div className="flex p-6 justify-center items-center border-b">
                    <h5>Are you sure you want to delete this job?</h5>
                </div>
                <div className="flex items-center p-6 justify-center space-x-6">
                <button onClick={() => toggleDeleteModal()} className="p-1 px-2 text-slate-500 font-bold text-sm border border-slate-300 rounded hover:shadow-md">Cancel</button>
                <button onClick={() => handleDelete()} className="p-1 px-2 text-white font-bold text-sm bg-slate-500 rounded hover:shadow-md">Delete Job</button>
                </div>
            
                

            </div>
        </div>

    </div>

    )
   

}


export default DeleteJob;