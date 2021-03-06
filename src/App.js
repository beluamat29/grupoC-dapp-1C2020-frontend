import React from 'react';
import './pages/loginpage/loginpage.scss';
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import './encuarentenados-app.scss'
import LoginPage from "./pages/loginpage/LoginPage";
import HomePage from "./pages/homepage/Stores";
import ProtectedRoute from "./components/authentication/PrivateRoute";
import {LanguageContext, LanguageMaps} from "./constants/LanguageMaps";
import SideBar from "./pages/homepage/side-bar/SideBar";
import StoreProducts from "./pages/homepage/store/StoreProducts";
import ShoppingCart from "./pages/homepage/ShoppingCart/ShoppingCart";
import Categories from "./pages/homepage/category/Categories";
import LoginService from "./servicios/LoginService";
import UserProfile from "./pages/user-profile/UserProfile";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedUser: JSON.parse(localStorage.getItem('loggedUser')) || false,
            language: LanguageMaps.spanish,
            productsInCart: [],
            userId: JSON.parse(localStorage.getItem('userId')) || false,
            storeId: JSON.parse(localStorage.getItem('storeId')) || false
        }
    }

    componentDidMount() {
        if(!!this.state.userId){
            LoginService().getUserById(this.state.userId)
                .then(response =>{
                    this.setState({loggedStoreAdmin: response.data.isStoreAdmin, user: response.data});
                    localStorage.setItem('isStoreAdmin', response.data.isStoreAdmin);
                })
                .catch(error =>{
                    alert("User not found")
                })
        }
    }

    addProductToCart = (product) => {
        product.quantity = 1
        this.setState({productsInCart: [...this.state.productsInCart, product]})
    }

    removeProductFromCart = (product) => {
        let updatedProducts = this.state.productsInCart;
        updatedProducts = updatedProducts.filter(p => p.id !== product.id)
        this.setState({productsInCart: updatedProducts})
    }

    increaseProductQuantity = (product) => {
        let productToUpdate = this.state.productsInCart.find(p => p.id === product.id);
        productToUpdate.quantity = Math.min(productToUpdate.quantity + 1, product.stock);
        this.setState({productsInCart: this.state.productsInCart})
    }

    decreaseProductQuantity = (product) => {
        let productToUpdate = this.state.productsInCart.find(p => p.id === product.id);
        productToUpdate.quantity = Math.max(1, productToUpdate.quantity - 1);
        this.setState({productsInCart: this.state.productsInCart})
    }

    productIsInCart = (product) => this.state.productsInCart.some(productInCart => productInCart.id === product.id)

    emptyCart = () => this.setState({productsInCart: []})

    logInUser = (aUser) => {
        localStorage.setItem('loggedUser', true)
        localStorage.setItem('userId', aUser.id);
        this.setState({loggedUser: true, loggedStoreAdmin: false, user: aUser, userId: JSON.parse(localStorage.getItem('userId'))})
        if(aUser.isStoreAdmin){
            localStorage.setItem('storeId', aUser.store.id)
            this.setState({loggedStoreAdmin: true, storeId: JSON.parse(localStorage.getItem('storeId')) || false})
        }
    }
    logOut = () => {
        this.setState({loggedUser: false, productsInCart: []})
        localStorage.clear()
    }


    changeLanguage = (language) => this.setState({language: language})

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <LoginPage onLogin={this.logInUser}/>}
                    />
                    <LanguageContext.Provider value={this.state.language}>
                        <div className='encuarentena2'>
                            <SideBar changeLanguage={this.changeLanguage}
                                     onLogout={this.logOut}
                                     isStore={this.state.loggedStoreAdmin}
                                     user={this.state.user}
                            />
                            <ProtectedRoute
                                exact
                                path='/stores'
                                loggedIn={this.state.loggedUser}
                                changeLanguage={this.changeLanguage}
                                logOut={this.logOut}
                                component={HomePage}
                            />
                            <Route
                                exact
                                path="/stores/:id/products"
                                render={props => <StoreProducts {...props}
                                                                addProductToCart={this.addProductToCart}
                                                                productIsInCart={this.productIsInCart}
                                                                isStoreAdmin={this.state.loggedStoreAdmin}
                                                                storeId={this.state.storeId}
                                                                user={this.state.user}
                                />}
                            />
                            <Route
                                exact
                                path="/cart"
                                render={props => <ShoppingCart {...props} productsInCart={this.state.productsInCart}
                                                               removeFromCart={this.removeProductFromCart}
                                                               decreaseProductQuantity={this.decreaseProductQuantity}
                                                               increaseProductQuantity={this.increaseProductQuantity}
                                                               emptyCart={this.emptyCart}
                                                               user={this.state.user}
                                />}
                            />
                            <Route
                                exact
                                path='/categories'
                                render={props => <Categories {...props}
                                />}
                            />
                            <Route
                                exact
                                path="/users/:id"
                                render={props => <UserProfile {...props} user={this.state.user}
                                                                         updateUser={this.logInUser}/>}
                            />


                        </div>
                    </LanguageContext.Provider>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
