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

    const validateProduct = (product) => {
        return !!product.name && !!product.brand && !!product.price && !!product.stock && !!product.productImageURL
            && !!product.category;
    }

    return {
        validateClientUser: validateClientUser,
        validateStoreAdmin: validateStoreAdmin,
        validateEmail: validateEmail,
        validateProduct: validateProduct
    }
}

export default EntitiesValidator;