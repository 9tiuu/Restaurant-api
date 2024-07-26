import axios from "axios";

export const api = axios.create({
    baseURL: 'https://rvalencia.pythonanywhere.com/api/'
});