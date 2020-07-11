import * as React from "react";
import {LanguageContext} from "../../../constants/LanguageMaps";
import './bill.scss'
import {faStore} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Ticket from "../tickets/Ticket";

class Bill extends React.Component {
    parseStoresNames = () => {
        this.props.bill.allTickets.map(ticket => ticket.ticketStore.storeName).join(', ')
    }

    render() {
        return(
            <div className="bill">
                <div className="bill-header">
                    <div className="bill-number-of-purchase">{this.context.numberOfPurchase}{this.props.indexOfPurchase}</div>
                    <div className="bill-total-price"> Total: ${this.props.bill.totalPrice} </div>
                </div>
                <div className="bill-stores">
                    <FontAwesomeIcon icon={faStore}/>
                    <span>{this.parseStoresNames()}</span>
                </div>
                {
                    this.props.bill.allTickets.map(ticket => <Ticket ticket={ticket}/>)
                }
            </div>
        )
    }
}

Bill.contextType = LanguageContext;
export default Bill;