import axios from "axios";
import setConfig from "./axios.utils";


const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_MAINURL
})

axiosInstance.interceptors.request.use((config:any)=>{
    return setConfig(config)
})



export default axiosInstance;



