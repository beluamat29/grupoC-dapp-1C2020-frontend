import {LanguageContext} from "../../../../constants/LanguageMaps";
import * as React from "react";
import './cvs-upload-modal.scss'
import CSVReader from 'react-csv-reader';
import StoreService from "../../../../servicios/StoreService";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";

class CSVUploadModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsToAdd: [],
            csvUploadSucceed: false,
            csvUploadFailed: false
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
            .then(() => {
                this.setState({csvUploadSucceed: true, csvUploadFailed: false})
            })
            .catch(() => {
                this.setState({csvUploadSucceed: false, csvUploadFailed: true})
            })
    }

    resetUpload = () => this.setState({csvUploadSucceed: false, csvUploadFailed: false})
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
                        { !this.state.csvUploadFailed && !this.state.csvUploadSucceed &&
                            <div className="csv-container">
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
                        }
                        {
                            this.state.csvUploadSucceed && !this.state.csvUploadFailed &&
                            <div className="csv-success">
                                <FontAwesomeIcon icon={faCheckCircle}/>
                                <span>{this.context.csvUploadSucceed}</span>
                            </div>
                        }
                        {
                            this.state.csvUploadFailed && !this.state.csvUploadSucceed &&
                            <div className="csv-failed">
                                <FontAwesomeIcon icon={faTimesCircle}/>
                                <span>{this.context.csvUploadFailed}</span>
                            </div>
                        }
                    </div>
                    <footer className="modal-card-foot">
                        {!this.state.csvUploadFailed && !this.state.csvUploadSucceed && <button className="upload-button" onClick={this.addProductsInBatch}>{this.context.massiveUploadConfirmationButton}</button>}
                        {this.state.csvUploadFailed && !this.state.csvUploadSucceed && <button className="upload-button" onClick={this.resetUpload}>{this.context.csvRetryButton}</button>}
                        {!this.state.csvUploadFailed && this.state.csvUploadSucceed && <button className="upload-button" onClick={this.props.onClose}>{this.context.gotItButton}</button>}

                    </footer>
                </div>
            </div>
        )
    }
}
CSVUploadModal.contextType = LanguageContext;
export default CSVUploadModal;