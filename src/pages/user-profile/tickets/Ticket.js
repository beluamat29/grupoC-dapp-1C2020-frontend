import * as React from "react";
import {LanguageContext} from "../../../constants/LanguageMaps";
import './ticket.scss'
import TicketProduct from "./TicketProduct";

class Ticket extends React.Component {
    render() {
        return(
            <div className="ticket">
                <div className="ticket-header">
                    <div className="ticket-store-name">
                        <span>{this.props.ticket.ticketStore.storeName}</span>
                    </div>
                    <div className="ticket-total-price">
                        <span>Total: $250</span>
                    </div>
                </div>
                <div className="tickets-product-list">
                    {this.props.ticket.productList.map(ticketProduct => <TicketProduct product={ticketProduct}/>)}
                </div>
            </div>
        )
    }
}
Ticket.contextType = LanguageContext;
export default Ticket;