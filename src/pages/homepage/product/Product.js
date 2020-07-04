import * as React from "react";
import "./product.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart, faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import AddProductModal from "../store/addProductModal/AddProductModal";

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            wasAddedToCart: false,
            editProductModalOpen: false
        }
    }

    addProductToCart = () => {
        this.setState({wasAddedToCart: true})
        this.props.onAddToCart(this.props.product)
    }

    removeFromCart = () => {
        this.setState({wasAddedToCart: false})
        this.props.onRemoveFromCart(this.props.product)
    }

    editProduct = () => {
        this.setState({editProductModalOpen: true})
    }

    closeModal = () => {
        this.setState({editProductModalOpen: false})
    }

    render() {
        return (<div className="entity-card product-card">
                <div className="product-button">
                    {!this.props.productIsInCart(this.props.product) && !this.props.isStoreAdmin &&
                    <div className="add-to-cart-button">
                        <button onClick={this.addProductToCart}>
                            <FontAwesomeIcon icon={faShoppingCart}/>
                        </button>
                    </div>
                    }
                    {this.props.productIsInCart(this.props.product) &&
                    <div className="add-or-remove-buttons">
                        <div className="added-to-cart-button">
                            <FontAwesomeIcon icon={faCheck}/>
                        </div>
                    </div>
                    }

                </div>
                <div className='imagen-comercio'>
                    <img src={this.props.product.productImageURL}/>
                </div>
                <div className='product-name'>
                    <span>{this.props.product.name}</span>
                </div>
                <div className="product-footer">
                    <div className='product-brand'>
                        <span>{this.props.product.brand}</span>
                    </div>
                    <div className='product-price'>
                        <p className="price">${this.props.product.price}</p>
                    </div>
                    <div>
                        {this.props.isAdminOfStore &&
                        <div className="edit-button">
                            <button onClick={this.editProduct}>
                                <span>Editar</span>
                            </button>
                        </div>}
                    </div>
                </div>
                {this.state.editProductModalOpen && <AddProductModal onClose={this.closeModal}
                                                                     isEditingProduct={true}
                                                                     storeId={this.state.storeId}
                                                                     renderProducts={this.renderProducts}
                                                                     isAdminOfStore={this.state.isAdminOfStore}
                                                                     product={this.props.product}
                />}
            </div>
        )
    }
}

export default Product