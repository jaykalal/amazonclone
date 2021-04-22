import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:8080/',
    // timeout: 1000,
    headers: { "Content-Type": "application/json" },
});

API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = "Bearer " + token;
    return config;
});

export function postRequest(url, data) {
    return API.post(url, data)
        .then((response) => response?.data)
        .catch((error) => error?.response?.data);
}

export function getRequest(url) {
    return API.get(url)
        .then((response) => response?.data)
        .catch((error) => error?.response?.data);
}

export function deleteRequest(url) {
    return API.delete(url)
        .then((response) => response?.data)
        .catch((error) => error?.response?.data);
}

export function putRequest(url, data) {
    return API.put(url, data)
        .then((response) => response?.data)
        .catch((error) => error?.response?.data);
}

export default API;
