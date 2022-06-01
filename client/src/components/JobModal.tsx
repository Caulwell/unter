import axios from "axios";
import { useEffect, useState } from "react";


interface Props{
    toggleModal: () => void
}

interface ButtonProps{
    name: "Job Info" | "Notes" | "Contacts" | "Documents"
}




const JobModal = ({toggleModal}: Props) => {

    const [tabSelected, setTabSelected] = useState("Job Info");

    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [salary, setSalary] = useState("");
    const [url, setUrl] = useState("");
    const [colour, setColour] = useState("#ffffff");
    const [description, setDescription] = useState("");

    const TabButton = ({name} :ButtonProps) => {

        return (
            <button className={tabSelected == name ? "-mb-px border-b-blue-700 border-b-2" : "-mb-px"} onClick={() => setTabSelected(name)}>
                {name}
            </button>
        )
    }

    const handleForm = (e :any ) => {

        e.preventDefault();

        axios.post("https://localhost:7001/job/", {
            title,
            company,
            location,
            salary,
            url,
            colour,
            description
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })


    }



    return (

        <div className="bg-modalBackground w-screen h-screen z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute ">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100">

                <div className="h-96 z-10 rounded shadow-md bg-white w-128 opacity-100 p-6 flex flex-col overflow-y-scroll">
                    <div className="flex justify-between text-black">
                        <div className="flex space-x-4 border-b-2">
                           <TabButton name="Job Info"/>
                           <TabButton name="Notes"/>
                           <TabButton name="Contacts"/>
                           <TabButton name="Documents"/>
                        </div>
                        <div className="flex space-x-3">

                        <button onClick={() => toggleModal()} className="rounded px-2 shadow-md bg-teal-900 text-white">
                            Close
                        </button>
                        </div>
                        
                    </div>

                    <form className="grid grid-cols-2 row-auto py-6 gap-y-6 gap-x-2" onSubmit={handleForm}>

                        <button type="submit" className="col-span-2">Save</button>

                        <input value={title} onChange={e => setTitle(e.target.value)} className="w-72 text-sm" type="text" placeholder="Job Title"></input>
                        <input value={company}  onChange={e => setCompany(e.target.value)} className="w-72 text-sm" type="text" placeholder="Company"></input>
                        <input value={location}  onChange={e => setLocation(e.target.value)} className="w-72 text-sm" type="text" placeholder="Location"></input>
                        <input value={salary}  onChange={e => setSalary(e.target.value)} className="w-72 text-sm" type="number" placeholder="Salary"></input>
                        <input value={url}  onChange={e => setUrl(e.target.value)} className="w-72 text-sm" type="text" placeholder="URL"></input>
                        <input value={colour}  onChange={e => setColour(e.target.value)} className="text-sm" type="color"></input>
                        <textarea value={description}  onChange={e => setDescription(e.target.value)} className="col-span-2 h-36 text-sm" placeholder="Description"></textarea>

                    </form>

                </div>
            </div>

        </div>
    )

}


export default JobModal;