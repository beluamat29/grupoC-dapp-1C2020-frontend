import * as React from "react";
import {LanguageContext} from "../../../constants/LanguageMaps";
import './bills-of-user.scss'
import Bill from "./Bill";

const listOfStores = [{storeName: 'Lo de tito'}, {storeName: 'El calabozo del androide y expendio de tarjetas de baseball'}, {storeName: 'Ednas Edibles'}]

class BillsOfUser extends React.Component {
    render() {
        return(
            <div className="users-bill-container">
                <Bill indexOfPurchase={1} stores={listOfStores}/>
                <Bill indexOfPurchase={2} stores={listOfStores}/>
            </div>
        )
    }
}
BillsOfUser.contextType = LanguageContext;
export default BillsOfUser;