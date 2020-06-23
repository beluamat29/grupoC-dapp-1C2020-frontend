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
            name: state.name,
            brand: state.brand,
            price: state.price,
            stock: state.stock || 0,
            category: state.category,
            productImageURL: state.productImageURL,
            storeId: state.storeId
        }
    }

    return {
        buildClientUser: buildClientUser,
        buildStoreAdmin: buildStoreAdmin,
        buildProduct: buildProduct
    }
}

export default EntitiesBuilder;