import * as React from "react";
import NewProductField from "./NewProductField";
import AdditionButtons from "./additionButtons/AdditionButtons";
import EntitiesValidator from "../../../../helpers/EntitiesValidator";
import EntitiesBuilder from "../../../../helpers/EntitiesBuilder";
import StoreService from "../../../../servicios/StoreService";
import AdditionSucceed from "./AdditionSucceed";

class AddProductModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            additionSucceed: false
        }
    }

    updateForm = (key, value) => {
        this.setState({[key]: value})
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

    buildProduct = () => EntitiesBuilder().buildProduct(this.state);

    validateProduct = () => {
        const isValidProduct = EntitiesValidator().validateProduct(this.state);
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
                    {
                    <NewProductField onUpdate={this.updateForm}
                                     onAddingCategory={this.addCategory}/>}

                    {this.state.additionSucceed && <AdditionSucceed/>}
                    <footer className="modal-card-foot">
                        <AdditionButtons
                            additionSucceed={this.state.additionSucceed}
                            closeModal={this.props.onClose}
                            addProduct={this.addProduct}
                        />
                    </footer>
                </div>
            </div>
        )
    }
}
export default AddProductModal;