import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../FirebaseAuth/AuthProvider";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'https://knowledge-hub-server-jkskb25-gmailcom-jamanul-sakibs-projects.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const {logoutUser}=useContext(AuthContext)
    const navigate =useNavigate()
    useEffect(()=>{
        axiosSecure.interceptors.response.use((res)=>{
            return res
        },(error)=>{
            if(error.response.status ===401 ||error.response.status ===403){
                logoutUser()
                .then(()=>{  
                    navigate('/login')
                })
            }
        })
    },[logoutUser, navigate])



    return axiosSecure
};

export default useAxiosSecure;