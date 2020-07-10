import * as React from "react";
import {LanguageContext} from "../../../constants/LanguageMaps";
import './bill.scss'
import {faStore} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
            </div>
        )
    }
}

Bill.contextType = LanguageContext;
export default Bill;