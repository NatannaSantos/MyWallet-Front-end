import axios from 'axios';

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
}

function login(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
}

function register(body) {
    const promise = axios.post(`${BASE_URL}/auth/register`, body);
    return promise;
}
function getUser(token) {
    const config = createConfig(token);

    const promise = axios.get(`${BASE_URL}/users`, config);

    return promise;
}
function getTransaction(token) {
    const config = createConfig(token);

    const promise = axios.get(`${BASE_URL}/transaction`, config);

    return promise;
}
function transaction(body) {
    const promise = axios.post(`${BASE_URL}/transaction`,body);
    return promise;
}
const api = {
    login,
    register,
    getUser,
    getTransaction,
    transaction
}

export default api;