import {LanguageContext} from "../../../../constants/LanguageMaps";
import * as React from "react";
import './cvs-upload-modal.scss'
import CSVReader from 'react-csv-reader';
import StoreService from "../../../../servicios/StoreService";

class CSVUploadModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsToAdd: []
        }
    }
    handleOnFileLoad = (data) => {
        const csvProducts = data.map(productArray => this.generateProductJson(productArray));
        csvProducts.pop();
        this.setState({productsToAdd: csvProducts});
    }

    generateProductJson = (productArray) => {
        const product = {
            name: productArray[0],
            brand: productArray[1],
            price: productArray[2],
            stock: productArray[3],
            productImageURL: productArray[4],
            category: productArray[5],
            isActiveMerchandise: true,
            storeId: this.props.storeId
        }
        return product
    }

    addProductsInBatch = () => {
        const body = {
            storeId: this.props.storeId,
            merchandiseList: this.state.productsToAdd
        }
        StoreService().addProductsInBatch(body)
            .then(() => this.props.onClose())
    }

    render() {
        return(
            <div className="modal">
                <div className="modal-background"/>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">{this.context.massiveUploadModalTitle}</p>
                        <button className="delete" aria-label="close" onClick={this.props.onClose}/>
                    </header>
                    <div className="modal-card-body">
                        <div className="csv-information">
                            <span>{this.context.massiveUploadDescriptionText}</span>
                        </div>
                        <div>
                            <CSVReader
                                cssClass="csv-reader"
                                label="Selecciona un archivo"
                                onFileLoad={this.handleOnFileLoad}
                                addRemoveButton
                                inputId="ObiWan"
                                inputStyle={{color: 'black'}}
                                onFileLoaded={this.handleOnFileLoad}/>
                        </div>
                    </div>
                    <footer className="modal-card-foot">
                        <button className="upload-button" onClick={this.addProductsInBatch}>{this.context.massiveUploadConfirmationButton}</button>
                    </footer>
                </div>
            </div>
        )
    }
}
CSVUploadModal.contextType = LanguageContext;
export default CSVUploadModal;