import axios from "axios";
import { Job } from "./types";

axios.defaults.baseURL = 'https://localhost:7001/api/v1/';
axios.defaults.headers.common = {'Authorization': `Bearer `}


export const  getJobsAsync = async (token:string) => {

    axios.defaults.headers.common.Authorization+=token;
    let jobs = await axios.get("jobs");
    return jobs;
        
};

export const  deleteJobAsync = async (jobId:number) => {

    let response = await axios.delete(`jobs/${jobId}`);
    if(response.status === 204)
    {
        return true;
    }

    return false;
        
};

export const createJobAsync = async (company:string, title:string, location:string) => {
    let response = await axios.post(`jobs`, {
        company,
        title,
        location
    });
    return response.data.job;
}

export const editJobAsync = async (title:any, company:any, location:any, salary:any, deadline:any, status:any, description:any, url:any, jobId:any) => {


        let response = await axios.put(`jobs/${jobId}`, {
            title,
            company,
            location,
            salary,
            deadline: new Date(deadline),
            status,
            description,
            url
        });

        return response.data;
    }

