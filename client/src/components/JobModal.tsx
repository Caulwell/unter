import { useEffect, useState } from "react";


interface Props{
    toggleModal: () => void
}

interface ButtonProps{
    name: "Job Info" | "Notes" | "Contacts" | "Documents"
}




const JobModal = ({toggleModal}: Props) => {

    const [tabSelected, setTabSelected] = useState("Job Info");

    const TabButton = ({name} :ButtonProps) => {

        return (
            <button className={tabSelected == name ? "-mb-px border-b-blue-700 border-b-2" : "-mb-px"} onClick={() => setTabSelected(name)}>
                {name}
            </button>
        )
    }

    useEffect(() => {
        console.log("re render");
    },[])

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
                        <button  className="rounded px-2 shadow-md bg-teal-300 text-white">
                            Save
                        </button>
                        <button onClick={() => toggleModal()} className="rounded px-2 shadow-md bg-teal-900 text-white">
                            Close
                        </button>
                        </div>
                        
                    </div>

                    <form className="grid grid-cols-2 row-auto py-6 gap-y-6 gap-x-2">
                        <input className="w-72 text-sm" type="text" placeholder="Job Title"></input>
                        <input className="w-72 text-sm" type="text" placeholder="Company"></input>
                        <input className="w-72 text-sm" type="text" placeholder="Location"></input>
                        <input className="w-72 text-sm" type="text" placeholder="Salary"></input>
                        <input className="col-span-2 text-sm" type="text" placeholder="URL"></input>
                        <textarea className="col-span-2 h-36 text-sm" placeholder="Description"></textarea>
                    </form>

                </div>
            </div>

        </div>
    )

}


export default JobModal;