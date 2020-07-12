import * as React from "react";
import {LanguageContext} from "../../../constants/LanguageMaps";
import './bills-of-user.scss'
import Bill from "./Bill";
import PurchaseService from "../../../servicios/PurchaseService";

class BillsOfUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bills: []
        }
    }

    componentDidMount() {
        PurchaseService().getUserPurchases(this.props.userId)
            .then((response) => {
                this.setState({bills: response.data.userBills})
            })
    }

    render() {
        return(
            <div className="users-bill-container">
                {this.state.bills.map((bill, index) => <Bill indexOfPurchase={index + 1} bill={bill}/>)}
            </div>
        )
    }
}
BillsOfUser.contextType = LanguageContext;
export default BillsOfUser;