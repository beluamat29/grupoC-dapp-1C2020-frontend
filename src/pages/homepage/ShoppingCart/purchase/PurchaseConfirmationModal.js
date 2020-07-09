import * as React from "react";
import {LanguageContext} from "../../../../constants/LanguageMaps";
import "./purchase-confirmation-modal.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";
import EntitiesBuilder from "../../../../helpers/EntitiesBuilder";
import PurchaseService from "../../../../servicios/PurchaseService";

class PurchaseConfirmationModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            paymentMethod: "CASH",
            deliveryType: "STORE_PICKUP",
            invalidDeliveryTime: false,
            loadingPurchase: false,
            purchaseSucceed: false
        }
    }

    confirmPurchase = () => {
        this.setState({loadingPurchase: true, purchaseSucceed: false})
        const purchase = EntitiesBuilder().buildPurchase(this.props.products, this.state);
        PurchaseService().confirmPurchase(purchase)
            .then(() => this.setState({loadingPurchase: false, purchaseSucceed: true }))
            .catch(() => console.log("salio todo mal"))
    }

    updatePaymentMethod = (paymentMethod) => this.setState({paymentMethod: paymentMethod})
    updateDeliveryType = (deliveryType) => this.setState({deliveryType: deliveryType});
    updateDeliveryDateTime = (dateTime) => this.setState({deliveryDateTime: dateTime})

    render() {
        return(
            <div className="modal">
                <div className="modal-background"/>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">{this.context.confirmPurchaseModalTitle}</p>
                        <button className="delete" aria-label="close" onClick={this.props.onClose}/>
                    </header>
                    { !this.state.loadingPurchase && !this.state.purchaseSucceed &&
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
                                            {this.context.homeDelivery}
                                        </label>
                                    </div>
                                    <div className="payment-method">
                                        <input type="radio" id="store-pickup" name="store-pickup" value={"STORE_PICKUP"} checked={this.state.deliveryType === "STORE_PICKUP"}
                                               onChange={() => this.updateDeliveryType("STORE_PICKUP")}
                                        />
                                        <label>
                                            {this.context.pickupDelivery}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {this.state.deliveryType === "HOME_DELIVERY" &&
                                <div className="purchase-confirmation-field span-block">
                                    <label className="purchase-confirmation-field-title">
                                        {this.context.deliveryTimeSelection}
                                    </label>
                                    <span>{this.context.deliveryTimeSelectionText}</span>
                                    <input className="time-field" type="datetime-local" name="time"
                                           onChange={(event) => this.updateDeliveryDateTime(event.target.value)}/>
                                    {this.state.invalidDeliveryTime &&
                                        <div className="time-error">
                                            <FontAwesomeIcon icon={faExclamationTriangle}/>
                                            {this.context.deliveryTimeError}
                                        </div>
                                    }
                                </div>
                            }
                            <div className="purchase-confirmation-field">
                                <div className="purchase-total-price">
                                    <span>{this.context.purchaseTotalPrice} ${this.props.total}</span>
                                </div>
                            </div>
                        </div>
                    }
                    {!this.state.loadingPurchase && this.state.purchaseSucceed &&
                        <div className="modal-card-body">
                            <div className='success-icon'>
                                <FontAwesomeIcon icon={faCheckCircle}/>
                            </div>
                            <div className="success-title">
                                <span>{this.context.purchaseSucceed}</span>
                            </div>
                        </div>
                    }
                    <footer className="modal-card-foot">
                        <button className="purchase-button" onClick={this.confirmPurchase}>{this.context.confirmPurchaseButton}</button>
                    </footer>
                </div>
            </div>
        )
    }
}

PurchaseConfirmationModal.contextType = LanguageContext;
export default PurchaseConfirmationModal;