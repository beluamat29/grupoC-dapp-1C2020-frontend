import * as React from "react";
import '../homepage.scss'
import {withRouter} from "react-router-dom";
import StoreService from "../../../servicios/StoreService";
import LoadingSpinner from "../../../components/loading-spinner/LoadingSpinner";
import Product from "../product/Product";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";
import {LanguageContext} from "../../../constants/LanguageMaps";
import AddProductModal from "./addProductModal/AddProductModal";
import StoreInfo from "./store-info/StoreInfo";
import CSVUploadModal from "./csvUploadModal/CSVUploadModal";




class StoreProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storeId: parseInt(this.props.match.params.id),
            loadingEntitiesState: true,
            addProductModalOpen: false,
            massiveCSVuploadModalOpen: false,
            isAdminOfStore: false
        }
    }

    componentDidMount() {
        this.setState({user: this.props.user});
        if( this.props.isStoreAdmin && this.props.storeId === this.state.storeId){
            this.setState({isAdminOfStore: true}, () => this.showStoreProducts(this.state.storeId));
        } else {
            this.setState({isAdminOfStore: false}, () => this.showStoreProducts(this.state.storeId));
        }
    }

    showStoreProducts = (storeId) => {
        this.setState({loadingEntitiesState: true})
        StoreService().getStoreProducts(storeId, this.state.isAdminOfStore)
            .then(result => {
                if(result.data.merchandises.length === 0) {
                    this.setState({products: this.addStoresToProducts(result.data.merchandises, result.data.store.id, result.data.store.storeName), loadingEntitiesState: false, dataToShow: false, store: result.data.store })
                } else {
                    this.setState({products: this.addStoresToProducts(result.data.merchandises, result.data.store.id, result.data.store.storeName), loadingEntitiesState: false, dataToShow: true, store: result.data.store})
                }
            })
    }

    addStoresToProducts = (listOfProducts, storeId, storeName) =>{
        return listOfProducts.map(product => {
            product.storeName = storeName;
            product.storeId = storeId;
            return product
        })
    }

    renderProducts = (product) => <Product product={product}
                                           productIsInCart={this.props.productIsInCart}
                                           onAddToCart={this.props.addProductToCart}
                                           onRemoveFromCart={this.removeFromCart}
                                           isStoreAdmin={this.props.isStoreAdmin}
                                           isAdminOfStore={this.state.isAdminOfStore}/>

    closeModal = () => {
        this.setState({addProductModalOpen: false})
    }

    closeCSVModal = () => this.setState({massiveCSVuploadModalOpen: false})

    render() {
        return(
            <div className="homepage">
                {!this.state.loadingEntitiesState && <StoreInfo store={this.state.store}/>}
                <div className="entities-panel">
                    {this.state.loadingEntitiesState && <LoadingSpinner isLoading={this.state.loadingEntitiesState}/>}
                    {!this.state.isLoading && this.state.dataToShow &&
                    <div className="entities products-entities">
                        {this.state.products.map(product => this.renderProducts(product))}
                    </div>
                    }

                    {!this.state.dataToShow && !this.state.loadingEntitiesState &&
                        <div className="no-products">
                            <FontAwesomeIcon icon={faShoppingBasket}/>
                            {this.props.isStoreAdmin && <span>{this.context.noOwnProducts}</span>}
                            {!this.props.isStoreAdmin && <span>{this.context.noProducts}</span>}

                        </div>
                    }
                    {this.state.isAdminOfStore &&
                    <button className="add-button"
                            onClick={() => this.setState({addProductModalOpen: true})}>Agregar Producto</button>
                    }
                    {this.state.isAdminOfStore &&
                    <button className="add-button"
                            onClick={() => this.setState({massiveCSVuploadModalOpen: true})}>{this.context.massiveUploadButtonText}</button>
                    }
                </div>
                {this.state.addProductModalOpen && <AddProductModal onClose={this.closeModal}
                                                                    storeId={this.state.storeId}
                                                                    renderProducts={this.renderProducts}
                                                                    isAdminOfStore={this.state.isAdminOfStore}
                />}
                {this.state.massiveCSVuploadModalOpen && <CSVUploadModal onClose={this.closeCSVModal}
                                                                         storeId={this.state.storeId}
                />}
            </div>
        )
    }
}
StoreProducts.contextType = LanguageContext;
export default withRouter(StoreProducts);