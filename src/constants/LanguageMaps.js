import * as React from "react";

export const LanguageMaps =
    {
        spanish: {
            sideBarStore: 'Comercios',
            categories: 'Rubros',
            addProducts: 'Ver mi comercio',
            discounts: 'Ofertas',
            seeMyCart: 'Ver mi carrito',
            emptyCart: 'Vaciar Carrito',
            logOut: 'Salir',
            quantity: 'Cantidad',
            sideBarTitle: 'Busca tu producto',
            saveProductSucceed: '¡Tu producto fue guardado con éxito!',
            noProducts: '¡Ups! Parece que no hay productos en este comercio',
            noOwnProducts: '¡Ups! Parece que aun no tienes productos para vender. YA AGREGA ALGUNO MALDITA SEA',
            noStores: '¡Ups! Parece que no hay comercios que pertenezcan a la categoría seleccionada',
            cartTitle: 'Mi Carrito',
            emptyCartText: 'Su carrito está vacío. Ya compre algo maldita sea',
            loading: 'Cargando...',
            pricePerUnit: 'Precio por unidad:',
            amountInCart: 'Llevas:',
            seeMyProfile: 'Ir a mi cuenta',
            welcomeToProfile: 'Bienvenidx a tu cuenta',
            userProfileSubtitle: 'Aquí podes actualizar tus datos de usuario y ademas ver las compras que realizaste',
            storeProfileSubtitle: 'Aqui podes actualizar tus datos de usuario y los de tu comercio',
            userProfileUsername: 'Usuario:',
            userProfileAddress: 'Dirección:',
            password: 'Contraseña:',
            userProfileSave: 'Guardar',
            confirmUserUpdateTitle: 'Confirmación de cambios en el perfil',
            confirmUserUpdateText: 'Por favor, ingresa tu contraseña actual para poder actualizar tu perfil',
            userUpdateSuccess: '¡Tus datos fueron actualizados con éxito!',
            userUpdateFailed: '¡Ups! Algo salió mal. Por favor, verifica que la contraseña ingresada es la correcta',
            storeName: 'Nombre del comercio',
            storeAddress: 'Direccion',
            storeSchedule: 'Horario de atención',
            toTime: 'a',
            storeDataOpeningDays: 'Días de atención:',
            storeDataCategories: 'Rubros:',
            deliveryDistanceInKm: 'Distancia de delivery (km):',
            storeDataPaymentMethods: 'Métodos de pago:',
            storeDataImageURL: 'URL de imágen de comercio:',
            addProductNameField: 'Nombre',
            addProductBrandField: 'Marca',
            addProductPriceField: 'Precio',
            addNewProductTitle: 'Nuevo producto',
            addNewProductButton: 'Agregar producto',
            editProductButton: 'Editar producto',
            gotItButton: '¡Entendido!',
            addProductAvailableStockField: 'Stock disponible',
            addProductCategoryField: 'Categoria del producto',
            addProductImageURLField: 'URL de imágen del producto',
            editProductDeleteProduct: 'Estado del producto',
            isActiveProduct: 'activo',
            isNonActiveProduct: 'inactivo',
            startPurchase: 'Comprar',
            confirmPurchaseModalTitle: 'Confirmación de compra',
            purchaseConfirmationPaymentMethod: 'Método de pago',
            purchasePaymentMethodCash: 'Efectivo',
            purchasePaymentMethodCreditCard: 'Tarjeta de cŕedito',
            purchasePaymentMethodDebitCard: 'Tarjeta de débito',
            purchaseDeliveryType: 'Tipo de envio',
            homeDelivery: 'Envío a domicilio',
            pickupDelivery: 'Retiro por local',
            invalidAddress: 'Parece que no tienes una direccion resgistrada. Por favor actualiza tu direccion en tu perfil de usuario para poder continuar.',
            confirmPurchaseButton: 'Confirmar compra',
            purchaseTotalPrice: 'Total de tu compra:',
            deliveryTimeSelection: 'Horario de entrega',
            deliveryTimeSelectionText: 'Por favor, selecciona un día y un horario en el que podamos dejar tu pedido',
            deliveryTimeError: 'Por favor, selecciona una fecha posterior a hoy con al menos un día de diferencia y un horario aproximado entre las 09:00 AM y las 06:00 PM en el que podamos dejar tu pedido',
            purchaseSucceed: '¡Iuju! Tu compra fue exitosa! Revisa tu email para más detalles',
            numberOfPurchase: 'Compra N°',
            showMoreProducts: 'Ver más productos',
            showLessProducts: 'Ver menos productos',
            showLessTickets: 'Ver menos tickets',
            showMoreTickets: 'Ver más tickets',
            storeCategories: {
                'CLEANING_SUPPLIES': 'Limpieza',
                'BUTCHER': 'Carniceria',
                'GREENGROCES': 'Verduleria',
                'HYGIENE_PRODUCTS': 'Perfumeria',
                'GROCERY': 'Almacen',
                'BAKERY': 'Panaderia'
            },
            openingDays: {
                'MONDAY': 'LUN',
                'TUESDAY': 'MAR',
                'WEDNESDAY': 'MIE',
                'THURSDAY': 'JUE',
                'FRIDAY': 'VIE',
                'SATURDAY': 'SAT',
                'SUNDAY': 'DOM'
            },
            paymentMethods: {
                'CASH': 'Efectivo',
                'CREDIT_CARD': 'Tarjeta de crédito',
                'DEBIT_CARD': 'Tarjeta de débito'
            },
            massiveUploadButtonText: 'Carga por CSV',
            massiveUploadModalTitle: 'Carga de productos por CSV',
            massiveUploadConfirmationButton: 'Cargar',
            massiveUploadDescriptionText: 'Aqui podras cargar productos de manera masiva mediante la subida de un archivo CSV. Cada fila del archivo debe respetar el formato nombre de producto, marca del producto, precio, stock y URL de la imagen del mismo.'
        },
        english: {
            sideBarStore: 'Stores',
            categories: 'Categories',
            addProducts: 'My store',
            discounts: 'Discount',
            seeMyCart: 'My shopping cart',
            empryCart: 'Empty Cart',
            logOut: 'Log out',
            sideBarTitle: 'Find your products',
            saveProductSucceed: 'Your product has been saved successfully',
            noProducts: 'Ups! Seems like there are no products in this store',
            noOwnProducts: 'Ups! Seems like there are no products on sale yet. Put something god damn it!',
            noStores: 'Ups! Seems like there are no stores for the selected category',
            cartTitle: 'My Cart',
            emptyCartText: 'Your cart is empty. Buy something god damn it!',
            loading: 'Loading...',
            pricePerUnit: 'Price per unit:',
            amountInCart: 'You are taking:',
            seeMyProfile: 'Go to account',
            quantity: 'Quantity:',
            welcomeToProfile: 'Welcome to your profile',
            userProfileSubtitle: 'Check out and update you profile details and watch your purchases here',
            storeProfileSubtitle: 'You can update you user and store settings here',
            userProfileUsername: 'Username:',
            userProfileAddress: 'Address:',
            password: 'Password:',
            userProfileSave: 'Save',
            confirmUserUpdateTitle: 'Profile update confirmation',
            confirmUserUpdateText: 'Please, enter your current password to update your profile data',
            userUpdateSuccess: 'Your user profile has been updated!',
            userUpdateFailed: 'Updating user profile failed. Please check that your password is correct',
            storeName: 'Store name',
            storeAddress: 'Address',
            storeSchedule: 'Store schedule',
            toTime: 'to',
            storeDataOpeningDays: 'Opening days:',
            storeDataCategories: 'Categories:',
            deliveryDistanceInKm: 'Delivery distance (km):',
            storeDataPaymentMethods: 'Payment methods:',
            storeDataImageURL: 'Store image URL:',
            addProductNameField: 'Name',
            addProductBrandField: 'Brand',
            addProductPriceField: 'Price',
            addProductAvailableStockField: 'Available stock',
            addProductCategoryField: 'Product category',
            addProductImageURLField: 'Product image URL',
            editProductDeleteProduct: 'Product state',
            isActiveProduct: 'active',
            isNonActiveProduct: 'non active',
            addNewProductButton: 'Add product',
            editProductButton: 'Edit product',
            gotItButton: 'Got it!',
            addNewProductTitle: 'New product',
            startPurchase: 'Buy',
            confirmPurchaseModalTitle: 'Purchase confirmation',
            purchaseConfirmationPaymentMethod: 'Payment method',
            purchasePaymentMethodCash: 'Cash',
            purchasePaymentMethodCreditCard: 'Credit card',
            purchasePaymentMethodDebitCard: 'Debit card',
            purchaseDeliveryType: 'Delivery type',
            homeDelivery: 'Home delivery',
            pickupDelivery: 'Store pick up',
            invalidAddress: 'Seems that you do not have an address set. Please update your address in your user profile to continue',
            confirmPurchaseButton: 'Confirm purchase',
            deliveryTimeSelection: 'Delivery time',
            deliveryTimeSelectionText: 'Please, select a day and time when we can delivery your purchase',
            purchaseTotalPrice: 'Total price of your purchase:',
            deliveryTimeError: 'Please, select a date that is at least one day ahead of today and an approximated time between 9:00AM and 6:00PM',
            purchaseSucceed: 'Woohoo! Your purchase was a success! Check your email account for more details',
            numberOfPurchase: 'Purchase N°',
            showLessProducts: 'Show less products',
            showMoreProducts: 'Show more products',
            showLessTickets: 'Show less tickets',
            showMoreTickets: 'Show more tickets',
            storeCategories: {
                'CLEANING_SUPPLIES': 'Cleaning supplies',
                'BUTCHER': 'Butchers',
                'GREENGROCES': 'Greengrocers',
                'HYGIENE_PRODUCTS': 'Hygiene products',
                'GROCERY': 'Grocery',
                'BAKERY': 'Bakery'
            },
            openingDays: {
                'MONDAY': 'MON',
                'TUESDAY': 'TUE',
                'WEDNESDAY': 'WED',
                'THURSDAY': 'THU',
                'FRIDAY': 'FRI',
                'SATURDAY': 'SAT',
                'SUNDAY': 'SUN'
            },
            paymentMethods: {
                'CASH': 'Cash',
                'CREDIT_CARD': 'Credit card',
                'DEBIT_CARD': 'Debit card'
            },
            massiveUploadButtonText: 'CSV upload',
            massiveUploadModalTitle: 'CSV merchandise upload',
            massiveUploadConfirmationButton: 'Upload',
            massiveUploadDescriptionText: 'Here you can make CSV merchandise uploads. Each row should have the format product name, product brand, price, stock and sotck image URL.'
        }
    }

export const LanguageContext = React.createContext(
    LanguageMaps.spanish // default value
);
