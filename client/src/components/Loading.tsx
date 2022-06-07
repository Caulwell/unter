
import {AiOutlineLoading} from "react-icons/ai";


const Loading = () => {


    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="animate-spin">
                <AiOutlineLoading />
            </div>
            
        </div>
    )

}


export default Loading;