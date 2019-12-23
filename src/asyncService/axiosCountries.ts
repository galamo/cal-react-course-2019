import axios from "axios";
import setConfig from "./axios.utils";


const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_MAINURL
})

export const axiosAuth = axios.create({
    baseURL: "http://localhost:3200/auth"
})

axiosInstance.interceptors.request.use((config: any) => {
    return setConfig(config)
})



export default axiosInstance;



