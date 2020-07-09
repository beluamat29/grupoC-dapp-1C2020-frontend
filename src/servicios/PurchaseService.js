import axios from "axios";
const SERVICE_URL = 'http://localhost:8080/';

const PurchaseService = () => {
    const confirmPurchase = (body) => {
        return axios.post(`${SERVICE_URL}purchase`, body)
    }

    return {
        confirmPurchase: confirmPurchase
    }
}

export default PurchaseService;