import * as React from "react";
import {LanguageContext} from "../../../constants/LanguageMaps";
import './ticket-product.scss'
import {faStore} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class TicketProduct extends React.Component {
    render() {
        return(
            <div className="ticket-product">
                <div className="ticket-product-image">
                    <img src={this.props.product.merchandise.productImageURL}/>
                </div>
                <div className="ticket-product-info">
                    <div>
                        <div className="ticket-product-name">
                            <span className="name">{this.props.product.merchandise.name}</span>
                            <span>${this.props.product.merchandise.price}</span>
                        </div>
                        <div className="ticket-product-brand">
                            <span>{this.props.product.merchandise.brand}</span>
                        </div>
                    </div>
                    <div className="ticket-product-footer">
                        <span>{this.context.quantity}: {this.props.product.productQuantity}</span>
                    </div>
                </div>
            </div>
        );
    }
}
TicketProduct.contextType = LanguageContext;
export default TicketProduct;