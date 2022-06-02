import { Job } from "../common/types";

interface Props{
    job: Job
}

const ListJob = ({job} : Props) => {


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
                    02/06/2022
                </td>
                <td className="px-6 py-4 text-gray-700">
                    07/06/2022
                </td>
                <td className="px-6 py-4 text-gray-700">
                    Applied
                </td>
                <td className="px-3 py-4 text-right space-x-6">
                    <a href="#" className="font-medium text-gray-700  hover:underline">Edit</a>
                    <a href="#" className="font-medium text-gray-700  hover:underline">Delete</a>
                </td>
            </tr>
    )
}


export default ListJob;