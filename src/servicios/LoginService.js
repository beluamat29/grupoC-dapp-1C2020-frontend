import axios from 'axios';
const SERVICE_URL = 'http://localhost:8080/';

const LoginService = () => {

    const validateUser = (user) => {
        return axios.post(`${SERVICE_URL}validateUser`, user)
    }

    const registerUser = (user) => {
        return axios.post(`${SERVICE_URL}users`, user)
    }

    const registerStoreUser = (storeAdmin) => {
        const body = {
            username: storeAdmin.username,
            password: storeAdmin.password,
            store: storeAdmin.store
        }

        return axios.post(`${SERVICE_URL}storeAdmin`, body)
    }

    const getUserById = (id) => {
        return axios.get(`${SERVICE_URL}users/${id}`)
    }

    const updateUser = (user) => {
        return axios.put(`${SERVICE_URL}users/${user.id}`, user)
    }

    return {
        validateUser: validateUser,
        registerUser: registerUser,
        registerStoreUser: registerStoreUser,
        getUserById: getUserById,
        updateUser: updateUser
    }
}

export default LoginService;