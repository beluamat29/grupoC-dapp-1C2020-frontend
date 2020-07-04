import * as React from "react";
import NewProductField from "./NewProductField";
import AdditionButtons from "./additionButtons/AdditionButtons";
import EntitiesValidator from "../../../../helpers/EntitiesValidator";
import EntitiesBuilder from "../../../../helpers/EntitiesBuilder";
import StoreService from "../../../../servicios/StoreService";
import AdditionSucceed from "./AdditionSucceed";
import MerchandiseService from "../../../../servicios/MerchandiseService";

class AddProductModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            additionSucceed: false,
            isValidProduct: true,
            storeId: this.props.storeId,
            product: {}
        }
    }

    componentDidMount() {
        if (!!this.props.product) {
            this.setState({
                product: this.props.product})
        }
    }

    updateForm = (key, value) => {
        const updatedProduct = this.state.product
        updatedProduct[key] = value
        this.setState({product: updatedProduct})
    }

    addCategory = (category) => {
        this.setState({category: category})
    }

    addProduct = () => {
        if(this.validateProduct()){
            StoreService().addProductOnStore(this.buildProduct())
                .then(() =>{
                    this.setState({additionSucceed: true})
                })
                .catch(error => console.log(error))
        }
    }

    updateProduct = () => {
        if(this.validateProduct()){
            MerchandiseService().updateProduct(this.state.product)
                .then(()=>{
                    this.setState({additionSucceed: true})
                })
                .catch(error => console.log(error))
        }
    }

    buildProduct = () => EntitiesBuilder().buildProduct(this.state);

    validateProduct = () => {
        const isValidProduct = EntitiesValidator().validateProduct(this.state.product);
        this.setState({isValidProduct: isValidProduct})
        return isValidProduct;
    }

    render() {
        return(
            <div className="modal">
                <div className="modal-background"/>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Nuevo Producto</p>
                        <button className="delete" aria-label="close" onClick={this.props.onClose}/>
                    </header>
                    {!this.state.additionSucceed &&
                    <NewProductField onUpdate={this.updateForm}
                                     onAddingCategory={this.addCategory}
                                     isValidProduct={this.state.isValidProduct}
                                     product={this.state.product}
                    />}

                    {this.state.additionSucceed && <AdditionSucceed/>}
                    <footer className="modal-card-foot">
                        <AdditionButtons
                            additionSucceed={this.state.additionSucceed}
                            closeModal={this.props.onClose}
                            addProduct={this.addProduct}
                            product={this.state.product}
                            updateProduct={this.updateProduct}
                        />
                    </footer>
                </div>
            </div>
        )
    }
}
export default AddProductModal;