const EntitiesBuilder = () => {
    const buildClientUser = (state) => {
        return {
            username: state.username,
            password: state.password,
            address: state.address
        }
    }

    const buildStoreAdmin = (state) => {
        return {
            username: state.username,
            password: state.password,
            store: {
                storeName: state.storeName,
                storeCategories: state.rubros,
                storeAddress: state.address,
                deliveryDistanceInKm: state.deliveryDistance || 1,
                availablePaymentMethods: state.paymentMethods,
                storeSchedule: {
                    openingDays: state.openingDays,
                    openingTime: state.openingTime,
                    closingTime: state.closingTime
                },
                storeImageURL: state.storeImageURL
            }

        }
    }

    const buildProduct = (state) => {
        return {
            name: state.product.name,
            brand: state.product.brand,
            price: state.product.price,
            stock: state.product.stock || 0,
            category: state.product.category,
            productImageURL: state.product.productImageURL,
            storeId: state.storeId
        }
    }

    const buildPurchase = (productsList, state) => {
        const products = formatProducts(productsList);
        const purchase = {
            productList: products,
            userId: JSON.parse(localStorage.getItem('userId')),
            paymentMethod: state.paymentMethod,
            deliveryType: state.deliveryType,
        }

        if(!!state.deliveryDateTime) {
            purchase['deliveryTime'] = state.deliveryDateTime
        }
        return purchase;
    }

    const formatProducts = (productsList) => {
        return productsList.map(product => {
            const formattedProduct = {
                storeId: product.storeId,
                name: product.name,
                brand: product.brand,
                price: product.price,
                stock: product.stock,
                isActiveMerchandise: true,
                category: product.category,
                productImageURL: product.productImageURL,
                quantity: product.quantity,
            }
            return formattedProduct;
        })
    }

    return {
        buildClientUser: buildClientUser,
        buildStoreAdmin: buildStoreAdmin,
        buildProduct: buildProduct,
        buildPurchase: buildPurchase
    }
}

export default EntitiesBuilder;