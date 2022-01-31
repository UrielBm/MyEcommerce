import axios from "axios";
const base = axios.create({
    baseURL: `https://fakestoreapi.com`
})
export default base;