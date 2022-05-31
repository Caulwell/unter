



const Sidebar = () => {


    return (

        <aside className=" h-full w-48 pt-8 px-2 flex flex-col space-y-2 border-r-2 justify-start align-center">

            <div className="hover:bg-slate-100 px-4 p-1 w-full cursor-pointer flex flex-start rounded text-md">
                Openings
            </div>
            <div className="hover:bg-slate-100 px-4 p-1 w-full cursor-pointer flex flex-start rounded text-md">
                Documents
            </div>
            <div className="hover:bg-slate-100 px-4 p-1 w-full cursor-pointer flex flex-start rounded text-md">
                Contacts
            </div>
        </aside> 
    );

}

export default Sidebar;