import * as React from "react";
import {LanguageContext} from "../../../../constants/LanguageMaps";
import "./purchase-confirmation-modal.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";

class PurchaseConfirmationModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            paymentMethod: "CASH",
            deliveryType: "HOME_DELIVERY",
            invalidDeliveryTime: false
        }
    }

    updatePaymentMethod = (paymentMethod) => this.setState({paymentMethod: paymentMethod})
    updateDeliveryType = (deliveryType) => this.setState({deliveryType: deliveryType});
    updateDeliveryTime = (deliveryTime) => {
        const hour = parseInt(deliveryTime.substring(0,2));
        this.setState({invalidDeliveryTime: (hour < 9 || hour > 18), deliveryTime: deliveryTime})
    }

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
                                    <input type="radio" id="cash" name="cash" value={"CASH"} checked={this.state.paymentMethod === "CASH"}
                                           onChange={() => this.updatePaymentMethod("CASH")}
                                    />
                                    <label>
                                        {this.context.purchasePaymentMethodCash}
                                    </label>
                                </div>
                                <div className="payment-method">
                                    <input type="radio" id="credit-card" name="credit-card" value={"CREDIT_CARD"} checked={this.state.paymentMethod === "CREDIT_CARD"}
                                           onChange={() => this.updatePaymentMethod("CREDIT_CARD")}
                                    />
                                    <label>
                                        {this.context.purchasePaymentMethodCreditCard}
                                    </label>
                                </div>
                                <div className="payment-method">
                                    <input type="radio" id="debot-card" name="debit-card" value={"DEBIT_CARD"} checked={this.state.paymentMethod === "DEBIT_CARD"}
                                           onChange={() => this.updatePaymentMethod("DEBIT_CARD")}
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
                                    <input type="radio" id="home-delivery" name="home-delivery" value={"HOME_DELIVERY"} checked={this.state.deliveryType === "HOME_DELIVERY"}
                                           onChange={() => this.updateDeliveryType("HOME_DELIVERY")}
                                    />
                                    <label>
                                        {this.context.pickupDelivery}
                                    </label>
                                </div>
                                <div className="payment-method">
                                    <input type="radio" id="store-pickup" name="store-pickup" value={"STORE_PICKUP"} checked={this.state.deliveryType === "STORE_PICKUP"}
                                           onChange={() => this.updateDeliveryType("STORE_PICKUP")}
                                    />
                                    <label>
                                        {this.context.homeDelivery}
                                    </label>
                                </div>
                            </div>
                        </div>
                        {this.state.deliveryType === "STORE_PICKUP" &&
                            <div className="purchase-confirmation-field span-block">
                                <label className="purchase-confirmation-field-title">
                                    {this.context.deliveryTimeSelection}
                                </label>
                                <span>{this.context.deliveryTimeSelectionText}</span>
                                <input type="time" name="horariocomienzo"
                                       onChange={(event) => this.updateDeliveryTime(event.target.value)}/>
                                {this.state.invalidDeliveryTime &&<div className="time-error">
                                    <FontAwesomeIcon icon={faExclamationTriangle}/>
                                    {this.context.deliveryTimeError}
                                </div>}
                            </div>
                        }
                        <div className="purchase-confirmation-field">
                            <div className="purchase-total-price">
                                <span>{this.context.purchaseTotalPrice} ${this.props.total}</span>
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