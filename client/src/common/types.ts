
export interface Job{
    id:number;
    title: string; 
    company:string;
    location?:string;
    salary?:string;
    url?:string;
    colour?:string;
    description?:string;
    date_Added?: Date;
    deadline?: Date;
    status?:string;
}