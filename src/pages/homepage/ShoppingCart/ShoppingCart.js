import * as React from "react";
import "./shoppingCart.scss"
import ShoppingCartProduct from "./ShoppingCartProduct";
import {LanguageContext} from "../../../constants/LanguageMaps";
import EmptyCartConfirmation from "./EmptyCartConfirmation";

class ShoppingCart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            emptyCartModalConfirmation: false
        }
    }

    renderProductsInCart = () => this.props.productsInCart.map((product) => <ShoppingCartProduct product={product}
                                                                                                 removeProductFromCart={this.removeProductFromCart}
                                                                                                 increaseProductQuantity={this.props.increaseProductQuantity}
                                                                                                 decreaseProductQuantity={this.props.decreaseProductQuantity}/>)

    removeProductFromCart = (product) => {
        this.props.removeFromCart(product)
    }

    calculateTotalPrice = () => {
        return this.props.productsInCart.map((product) => product.price * product.quantity).reduce((a,b) => a+b)
    }

    openEmptyCartModal = () => {this.setState({emptyCartModalConfirmation: true})}

    emptyCart = () => {
        this.props.emptyCart()
        this.closeEmptyCartModal()
    }

    closeEmptyCartModal = () => this.setState({emptyCartModalConfirmation: false})


    render() {
        return(
            <div className="homepage">
                <div className="shopping-cart-container">
                    <div className="shopping-cart-title">
                        {this.context.cartTitle}
                    </div>
                    {this.cartContent()}
                </div>
            </div>
        )
    }

    cartContent() {
        return <>
            {this.cartIsEmpty() &&
            <div>
                {this.context.emptyCartText}
            </div>
            }
            {!this.cartIsEmpty() &&
            <div className="shopping-cart-content">
                <div className="shopping-cart-total">
                    <button className="empty-cart" onClick={this.openEmptyCartModal}>{this.context.emptyCart}</button>
                    <span>Total:  $ {this.calculateTotalPrice()}</span>
                </div>
                {this.renderProductsInCart()}
            </div>
            }
            {this.state.emptyCartModalConfirmation && <EmptyCartConfirmation onClose={this.closeEmptyCartModal}
                                                                             onAccept={this.emptyCart}
                                                        />}

        </>;
    }

    cartIsEmpty() {
        return this.props.productsInCart.length === 0;
    }
}
ShoppingCart.contextType = LanguageContext;

export default ShoppingCart;