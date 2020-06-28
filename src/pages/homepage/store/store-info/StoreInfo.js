import * as React from "react";
import "./storeinfo.scss"
import {LanguageContext} from "../../../../constants/LanguageMaps";
import {faMapMarkerAlt, faStore, faMoneyCheckAlt, faCalendarAlt, faClock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class StoreInfo extends React.Component {

    parseCategories = () => this.props.store.storeCategories.map(category => this.context.storeCategories[category]).join(', ')
    parseOpeningDays = () => this.props.store.storeSchedule.openingDays.map(day => this.context.openingDays[day]).join(', ')
    parsePaymentMethods = () => this.props.store.availablePaymentMethods.map(method => this.context.paymentMethods[method]).join(', ')

    render() {
        return(
            <div className="store-info-container">
                <div className="store-info">
                    <div className="store-image">
                        <img src={this.props.store.storeImageURL} alt={":("}/>
                    </div>
                    <div className="store-data">
                        <div className="store-name">
                            <span>{this.props.store.storeName}</span>
                        </div>
                        <div className="store-address">
                            <FontAwesomeIcon icon={faMapMarkerAlt}/>
                            <span>{this.props.store.storeAddress}</span>
                        </div>
                        <div className="store-categories">
                            <FontAwesomeIcon icon={faStore}/>
                            <span>{this.parseCategories()}</span>
                        </div>
                        <div className="store-payment-methods">
                            <FontAwesomeIcon icon={faMoneyCheckAlt}/>
                            <span>{this.parsePaymentMethods()}</span>
                        </div>
                        <div className="store-schedule">
                            <FontAwesomeIcon icon={faCalendarAlt}/>
                            <span>{this.parseOpeningDays()} | </span>
                            <FontAwesomeIcon icon={faClock}/>
                            <span>{this.props.store.storeSchedule.openingTime} - {this.props.store.storeSchedule.closingTime}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
StoreInfo.contextType = LanguageContext;
export default StoreInfo;