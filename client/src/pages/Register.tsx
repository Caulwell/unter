import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import {useNavigate} from "react-router-dom";
import Swal from 'sweetalert2'

const Register = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);

    let navigate = useNavigate();

    useEffect(() => {
        if(errors.length)
        {
            Swal.fire({
                title: 'Error!',
                text: errors[0],
                icon: 'error',
                confirmButtonText: 'Okay'
              });
        }
    },[errors])


    const handleRegister = () => {
        setLoading(true);
        axios.post("https://localhost:7001/api/v1/auth/register", {
            Email: email,
            Password: password
        })
        .then(res => {
            console.log(res);
            localStorage.setItem("token", res.data.token);
            setLoading(false);
            Swal.fire({
                title: 'Success!',
                text: "You have successfully registered!",
                icon: 'success',
                confirmButtonText: 'Go To Dashboard'
              }).then(() => {
                navigate("/dashboard");
              });
            
        })
        .catch(err => {
            setErrors(err.response.data.errors);
            setLoading(false);
        })
    };

    return (
        <div className="bg-modalBg w-screen h-screen z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100">

            <div className=" z-10 rounded-md shadow-md bg-white opacity-100 flex flex-col text-slate-700">

            {loading ?
                    <Loading/>
                    :
                    <>
                    <div className="flex justify-center border-b-2 p-2 font-bold">
                    Register
            </div>

            <div className="flex flex-col space-y-4 py-6 px-4">

            <div className="flex flex-col space-y-2">
                    <div className="flex justify-between text-sm px-1">
                        <label htmlFor="email" className="font-bold">Email</label>
                        <span className="font-light text-slate-400">Required</span>
                    </div>
                    <input 
                    className=" w-96 p-2 rounded-md border border-violet-500 text-sm hover:border-violet-800 focus:outline-violet-800" 
                    name="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    type="text" 
                    placeholder="email"/>
                </div>

                <div className="flex flex-col space-y-2">
                    <div className="flex justify-between text-sm px-1">
                        <label htmlFor="password" className="font-bold">Password</label>
                        <span className="font-light text-slate-400">Required</span>
                    </div>
                    <input 
                    className=" w-96 p-2 rounded-md border border-violet-500 text-sm hover:border-violet-800 focus:outline-violet-800" 
                    name="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    type="text" 
                    placeholder="Password"/>
                </div>

                <div className="flex flex-col space-y-2">
                    <div className="flex justify-between text-sm px-1">
                        <label htmlFor="password2" className="font-bold">Repeat Password</label>
                        <span className="font-light text-slate-400">Required</span>
                    </div>
                    <input 
                    className=" w-96 p-2 rounded-md border border-violet-500 text-sm hover:border-violet-800 focus:outline-violet-800" 
                    name="password2" 
                    value={password2} 
                    onChange={e => setPassword2(e.target.value)} 
                    type="text" 
                    placeholder="Repeat Password"/>
                </div>

                <button onClick={() => handleRegister()} className="p-1 px-2 text-white font-bold text-sm bg-violet-800 rounded hover:shadow-md">Register</button>
               

            </div>
            </>

            }
               

            </div>
        </div>

    </div>
    )
}

export default Register;