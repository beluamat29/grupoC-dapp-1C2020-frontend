const EntitiesValidator = () => {
    const validateClientUser = (state) => {
        return !!state.username && !!state.password && !!state.address;
    }

    const validateStoreAdmin = (state) => {
        return !!state.storeName && !!state.address && !!state.username && !!state.password
            && !!state.rubros && !!state.openingDays && !!state.openingTime && !!state.closingTime && !!state.paymentMethods && !!state.deliveryDistance;
    }

    const validateEmail = (state) => {
        return /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(state.username);
    }

    const validateProduct = (state) => {
        return !!state.name && !!state.brand && !!state.price && !!state.stock && !!state.productImageURL
            && !!state.category;
    }

    return {
        validateClientUser: validateClientUser,
        validateStoreAdmin: validateStoreAdmin,
        validateEmail: validateEmail,
        validateProduct: validateProduct
    }
}

export default EntitiesValidator;