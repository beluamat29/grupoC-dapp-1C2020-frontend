import * as React from "react";
import {LanguageContext} from "../../../constants/LanguageMaps";
import './ticket.scss'
import TicketProduct from "./TicketProduct";
import {faStore} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const MIN_AMOUNT_OF_PRODUCTS_TO_SHOW = 3
class Ticket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsToShow: [],
            showingAllProducts: true
        }
    }

    componentDidMount() {
       this.reduceProducts()
    }

    reduceProducts = () => {
        if(this.props.ticket.productList.length > MIN_AMOUNT_OF_PRODUCTS_TO_SHOW && this.state.showingAllProducts) {
            const products = this.props.ticket.productList.slice(0, (Math.min(MIN_AMOUNT_OF_PRODUCTS_TO_SHOW, this.props.ticket.productList.length)))
            this.setState({showingAllProducts: false, productsToShow: products})
        } else {
            this.setState({showingAllProducts: true, productsToShow: this.props.ticket.productList})
        }
    }

    moreProductsText = () => this.state.showingAllProducts ? this.context.showLessProducts : this.context.showMoreProducts;
    render() {
        return(
            <div className="ticket">
                <div className="ticket-header">
                    <div className="ticket-store-name">
                        <FontAwesomeIcon icon={faStore}/>
                        <span>{this.props.ticket.ticketStore.storeName}</span>
                    </div>
                    <div className="ticket-total-price">
                        <span>Total: ${this.props.ticket.totalPrice}</span>
                    </div>
                </div>
                <div className="tickets-product-list">
                    {this.state.productsToShow.map(ticketProduct => <TicketProduct product={ticketProduct}/>)}
                </div>
                {this.props.ticket.productList.length > MIN_AMOUNT_OF_PRODUCTS_TO_SHOW &&
                <div className="show-more-products">
                    <span onClick={this.reduceProducts}>{this.moreProductsText()}</span>
                </div>}
            </div>
        )
    }
}
Ticket.contextType = LanguageContext;
export default Ticket;