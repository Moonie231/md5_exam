import axios from "axios";
console.log();
const customAxios = axios.create({
    baseURL: 'http://localhost:3001/',
})
export default customAxios;