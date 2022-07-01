import { useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import {useNavigate} from "react-router-dom";



const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    let navigate = useNavigate()


    const handleLogin = () => {
        setLoading(true);
        axios.post("https://localhost:7001/api/v1/auth/login", {
            Email: email,
            Password: password
        })
        .then(res => {
            localStorage.setItem("token", res.data.token);
            setLoading(false);
            navigate("/dashboard");
        })
        .catch(err => {
            console.log(err);
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
                    Login
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
                    placeholder="Job password"/>
                </div>

                <button onClick={() => handleLogin()} className="p-1 px-2 text-white font-bold text-sm bg-violet-800 rounded hover:shadow-md">LOGIN</button>
               

            </div>
            </>

            }
               

            </div>
        </div>

    </div>
    )
}

export default Login;