import axios from "axios";
import { API_KEY, API_URI } from "../config";


const api = axios.create({
    baseURL: API_URI,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`
    }
})

export default api