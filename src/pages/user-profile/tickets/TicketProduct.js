import * as React from "react";
import {LanguageContext} from "../../../constants/LanguageMaps";
import './ticket-product.scss'

class TicketProduct extends React.Component {
    render() {
        return(
            <div className="ticket-product">
                <div className="ticket-product-image">
                    <img src={"https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/7/7/7797470003121_02.jpg"}/>
                </div>
                <div className="ticket-product-info">
                    <div>
                        <div className="ticket-product-name">
                            <span>{this.props.product.name}</span>
                            <span>${this.props.product.price}</span>
                        </div>
                        <div className="ticket-product-brand">
                            <span>{this.props.product.brand}</span>
                        </div>
                    </div>
                    <div className="ticket-product-footer">
                        <span>{this.context.quantity}: {this.props.product.quantity}</span>
                    </div>
                </div>
            </div>
        );
    }
}
TicketProduct.contextType = LanguageContext;
export default TicketProduct;