import Axios from "axios";

export const Api= Axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0",
    withCredentials:true,
    headers:{"API-KEY":"bc684272-e9ca-4985-99cf-11891156c594"}
})