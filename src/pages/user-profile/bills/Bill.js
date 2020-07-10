import * as React from "react";
import {LanguageContext} from "../../../constants/LanguageMaps";
import './bill.scss'
import {faStore} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Ticket from "../tickets/Ticket";

const tickets = [{
                    ticketStore: {storeName: 'Lo de tito'},
                    productList: [{name: 'Fideos', brand: 'Marolio', price: 34.2, quantity: 5},{name: 'Fideos', brand: 'Marolio', price: 34.2, quantity: 5},{name: 'Fideos', brand: 'Marolio', price: 34.2, quantity: 5},{name: 'Fideos', brand: 'Marolio', price: 34.2, quantity: 5}]
                },
                {
                    ticketStore: {storeName: 'El calabozo del androide'},
                    productList: [{name: 'Fideos', brand: 'Marolio', price: 34.2, quantity: 5},{name: 'Fideos', brand: 'Marolio', price: 34.2, quantity: 5},{name: 'Fideos', brand: 'Marolio', price: 34.2, quantity: 5},{name: 'Fideos', brand: 'Marolio', price: 34.2, quantity: 5}]
                }]

class Bill extends React.Component {
    parseStoresNames = () => this.props.stores.map(store => store.storeName).join(', ')

    render() {
        return(
            <div className="bill">
                <div className="bill-header">
                    <div className="bill-number-of-purchase">{this.context.numberOfPurchase}{this.props.indexOfPurchase}</div>
                    <div className="bill-total-price"> Total: $500 </div>
                </div>
                <div className="bill-stores">
                    <FontAwesomeIcon icon={faStore}/>
                    <span>{this.parseStoresNames()}</span>
                </div>
                {
                    tickets.map(ticket => <Ticket ticket={ticket}/>)
                }
            </div>
        )
    }
}

Bill.contextType = LanguageContext;
export default Bill;