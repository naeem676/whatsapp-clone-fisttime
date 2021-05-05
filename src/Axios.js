import axios from 'axios';

const instance = axios.create({
    baseURL:"http://localhost:1996",
})

export default instance;