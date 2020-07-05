import * as React from "react";
import {LanguageContext} from "../../../../constants/LanguageMaps";
import "./purchase-confirmation-modal.scss"

class PurchaseConfirmationModal extends React.Component{
    render() {
        return(
            <div className="modal">
                <div className="modal-background"/>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">{this.context.confirmPurchaseModalTitle}</p>
                        <button className="delete" aria-label="close" onClick={this.props.onClose}/>
                    </header>
                    <div className="modal-card-body">
                        <div className="purchase-confirmation-field">
                            <label className="purchase-confirmation-field-title">
                                {this.context.purchaseConfirmationPaymentMethod}
                            </label>
                            <div className="payment-methods">
                                <div className="payment-method">
                                    <input type="radio" id="nombreYApellido" name="nombreYApellido"
                                           onChange={(event) => this.props.onUpdate('storeName', event.target.value)}
                                    />
                                    <label>
                                        {this.context.purchasePaymentMethodCash}
                                    </label>
                                </div>
                                <div className="payment-method">
                                    <input type="radio" id="nombreYApellido" name="nombreYApellido"
                                           onChange={(event) => this.props.onUpdate('storeName', event.target.value)}
                                    />
                                    <label>
                                        {this.context.purchasePaymentMethodCreditCard}
                                    </label>
                                </div>
                                <div className="payment-method">
                                    <input type="radio" id="nombreYApellido" name="nombreYApellido"
                                           onChange={(event) => this.props.onUpdate('storeName', event.target.value)}
                                    />
                                    <label>
                                        {this.context.purchasePaymentMethodDebitCard}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="purchase-confirmation-field">
                            <label className="purchase-confirmation-field-title">
                                {this.context.purchaseDeliveryType}
                            </label>
                            <div className="payment-methods">
                                <div className="payment-method">
                                    <input type="radio" id="nombreYApellido" name="nombreYApellido"
                                           onChange={(event) => this.props.onUpdate('storeName', event.target.value)}
                                    />
                                    <label>
                                        {this.context.pickupDelivery}
                                    </label>
                                </div>
                                <div className="payment-method">
                                    <input type="radio" id="nombreYApellido" name="nombreYApellido"
                                           onChange={(event) => this.props.onUpdate('storeName', event.target.value)}
                                    />
                                    <label>
                                        {this.context.homeDelivery}
                                    </label>
                                </div>
                            </div>
                            <div className="purchase-total-price">
                                <span>{this.context.purchaseTotalPrice}</span>
                            </div>
                        </div>
                    </div>
                    <footer className="modal-card-foot">
                        <button className="purchase-button">{this.context.confirmPurchaseButton}</button>
                    </footer>
                </div>
            </div>
        )
    }
}

PurchaseConfirmationModal.contextType = LanguageContext;
export default PurchaseConfirmationModal;