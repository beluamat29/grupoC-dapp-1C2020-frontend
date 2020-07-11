import axios from "axios";
const SERVICE_URL = 'http://localhost:8080/';

const PurchaseService = () => {
    const confirmPurchase = (body) => {
        return axios.post(`${SERVICE_URL}purchase`, body)
    }

    const getUserPurchases = (userId) => {
        return axios.get(`${SERVICE_URL}purchase/${userId}`)
    }

    return {
        confirmPurchase: confirmPurchase,
        getUserPurchases: getUserPurchases
    }
}

export default PurchaseService;