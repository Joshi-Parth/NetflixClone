import axios from 'axios';

//base URL to make the request to the database
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});



export default instance;