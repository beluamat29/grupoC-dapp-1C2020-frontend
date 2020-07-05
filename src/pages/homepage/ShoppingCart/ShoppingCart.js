import * as React from "react";
import "./shoppingCart.scss"
import ShoppingCartProduct from "./ShoppingCartProduct";
import {LanguageContext} from "../../../constants/LanguageMaps";
import EmptyCartConfirmation from "./EmptyCartConfirmation";
import PurchaseConfirmationModal from "./purchase/PurchaseConfirmationModal";

class ShoppingCart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            emptyCartModalConfirmation: false,
            purchaseConfirmationModal: false
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

    openEmptyCartModal = () => this.setState({emptyCartModalConfirmation: true})
    openPurchaseConfirmationModal = () => this.setState({purchaseConfirmationModal: true})
    closePurchaseConfirmationModal = () => this.setState({purchaseConfirmationModal: false})
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
                    <div>
                        <button className="empty-cart" onClick={this.openEmptyCartModal}>{this.context.emptyCart}</button>
                        <button className="empty-cart" onClick={this.openPurchaseConfirmationModal}>{this.context.startPurchase}</button>
                    </div>
                    <span>Total:  $ {this.calculateTotalPrice()}</span>
                </div>
                {this.renderProductsInCart()}
            </div>
            }
            {this.state.emptyCartModalConfirmation && <EmptyCartConfirmation onClose={this.closeEmptyCartModal}
                                                                             onAccept={this.emptyCart}
            />}
            {this.state.purchaseConfirmationModal && <PurchaseConfirmationModal onClose={this.closePurchaseConfirmationModal}
                                                                                total={this.calculateTotalPrice()}
                                                                                products={this.props.productsInCart}
            />}

        </>;
    }

    cartIsEmpty() {
        return this.props.productsInCart.length === 0;
    }
}
ShoppingCart.contextType = LanguageContext;

export default ShoppingCart;