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
                'Efectivo': 'Efectivo',
                'Tarjeta de credito': 'Tarjeta de crédito',
                'Tarjeta de debito': 'Tarjeta de débito'
            }
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
                'Efectivo': 'Cash',
                'Tarjeta de credito': 'Credit card',
                'Tarjeta de debito': 'Debit card'
            }
        }
    }

export const LanguageContext = React.createContext(
    LanguageMaps.spanish // default value
);
