import axios from 'axios';

const SERVICE_URL = 'http://localhost:8080/';

const StoreService = () => {
    const getAllStores = (category = '') => {
        return axios.get(`${SERVICE_URL}stores`, {
                    params: {
                        category: category}
                    })
    }

    const getAllStoresWithACategory = (category) => {
        return axios.get(`${SERVICE_URL}stores?category=${category}`)
    }

    const getStoreProducts = (storeId, isStoreAdmin) => {
        return axios.get(`${SERVICE_URL}stores/${storeId}/products?activeProducts=${isStoreAdmin}`)
    }

    const getStoreById = (storeId) => {
        return axios.get(`${SERVICE_URL}stores/${storeId}`)
    }

    const addProductsInBatch = (body) => {
        return axios.post(`${SERVICE_URL}stores/addMerchandiseList`, body)
    }

    const addProductOnStore = (product) => {
        const body = {
            name: product.name,
            brand: product.brand,
            price: product.price,
            stock: product.stock,
            category: product.category,
            productImageURL: product.productImageURL,
            storeId: product.storeId
        }
        debugger
        return axios.post(`${SERVICE_URL}stores/addMerchandise`, body)
    }
    return {
        getAllStores: getAllStores,
        getAllStoresWithACategory: getAllStoresWithACategory,
        getStoreProducts: getStoreProducts,
        getStoreById: getStoreById,
        addProductOnStore: addProductOnStore,
        addProductsInBatch: addProductsInBatch
    }
}

export default StoreService;

