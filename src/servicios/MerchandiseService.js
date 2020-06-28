import axios from 'axios';

const SERVICE_URL = 'http://localhost:8080/';

const MerchandiseService = () => {
    const updateProduct = (product) => {
        return axios.put(`${SERVICE_URL}merchandise/${product.id}`, product)
    }
    return {
        updateProduct: updateProduct
    }
}

export default MerchandiseService;