import * as React from "react";
import {LanguageContext} from "../../../constants/LanguageMaps";
import './bill.scss'
import {faStore} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Ticket from "../tickets/Ticket";
const MIN_AMOUNT_OF_TICKETS_TO_SHOW = 2;
class Bill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ticketsToShow: [],
            showingAllTickets: true
        }
    }

    componentDidMount() {
        this.reduceTickets();
    }

    reduceTickets = () => {
        if(this.props.bill.allTickets.length > MIN_AMOUNT_OF_TICKETS_TO_SHOW && this.state.showingAllTickets) {
            const tickets = this.props.bill.allTickets.slice(0, (Math.min(MIN_AMOUNT_OF_TICKETS_TO_SHOW, this.props.bill.allTickets.length)))
            this.setState({showingAllTickets: false, ticketsToShow: tickets})
        } else {
            this.setState({showingAllTickets: true, ticketsToShow: this.props.bill.allTickets})
        }
    }

    moreTicketsText = () => this.state.showingAllTickets ? this.context.showLessTickets : this.context.showMoreTickets

    parseStoresNames = () => this.props.bill.allTickets.map(ticket => ticket.ticketStore.storeName).join(', ')

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
                    this.state.ticketsToShow.map(ticket => <Ticket ticket={ticket}/>)
                }
                {
                    this.props.bill.allTickets.length > MIN_AMOUNT_OF_TICKETS_TO_SHOW &&
                    <div className="show-more-tickets">
                        <span onClick={this.reduceTickets}>{this.moreTicketsText()}</span>
                    </div>
                }
            </div>
        )
    }
}

Bill.contextType = LanguageContext;
export default Bill;