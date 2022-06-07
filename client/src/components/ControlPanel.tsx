
interface ControlPanelProps{
    toggleCreateModal: () => void;
}


const ControlPanel = ({toggleCreateModal} : ControlPanelProps) => {



    return (
        <div className="flex justify-end align-center w-full px-6 border-b-2 space-x-8 items-center h-12">
            <button className=" text-slate-400  transition-all hover:border-b-2 flex align-center  box-border">
                Job Map
            </button>
            <button className=" text-slate-400 transition-all hover:border-b-2 flex align-center ">
                Documents
            </button>
            <button className=" text-slate-400 transition-all hover:border-b-2 flex align-center ">
                Contacts
            </button>
            <button className=" text-slate-400 transition-all hover:border-b-2 flex align-center ">
                Metrics
            </button>
            <button onClick={toggleCreateModal} className=" rounded text-white bg-emerald-700  px-2">
                + Add Job
            </button>
            
        </div>
    )


}


export default ControlPanel;