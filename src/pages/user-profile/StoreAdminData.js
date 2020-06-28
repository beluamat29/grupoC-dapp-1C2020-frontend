import * as React from "react";
import {LanguageContext} from "../../constants/LanguageMaps";
import "./user-profile.scss"
import {openingDays, paymentMethods, storeCategories} from "../../constants/Constants";

class StoreAdminData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.user.username,
            password: this.props.user.password,
            store: this.props.user.store,
            setStoreName: false
        }
    }

    componentDidMount() {
        this.setState({store: this.props.user.store})
    }

    generateEntityCheckbox = (entity, onCheck, isSelectedCheckbox = false) => {
        return (
            <div className="rubro-checkbox">
                <input type="checkbox"
                       value={entity.value}
                       checked={isSelectedCheckbox}
                       onClick={(event) => onCheck(event.target.value)}
                />
                <label className="checkbox">
                    {entity.label}
                </label>
            </div>
        )
    }

    isSelectedDay = (day) => this.state.store.storeSchedule.openingDays.includes(day.value);
    isSelectedCategory = (category) => this.state.store.storeCategories.includes(category.value);
    isSelectedPaymentMethod = (method) => this.state.store.availablePaymentMethods.includes(method.value);

    setStoreField = (fieldName, newFieldValue) => {
        const updatedStore = this.state.store;
        updatedStore[fieldName] = newFieldValue;
        this.setState({store: updatedStore, dataHasChanged: true})
    }

    updateOpeningTime = (newTime, isOpeningTime) => {
        const updatedStore = this.state.store;
        if(isOpeningTime) {
            updatedStore.storeSchedule.openingTime = newTime;
        } else {
            updatedStore.storeSchedule.closingTime = newTime;
        }
        this.setState({store: updatedStore, dataHasChanged: true})
    }

    updateOpeningDays = (day) => {
        const updatedStore = this.state.store;
        let openingDaysList = (this.state.store.storeSchedule.openingDays || [])
        updatedStore.storeSchedule.openingDays = openingDaysList.includes(day) ? openingDaysList.filter(openingDay => openingDay !== day) : openingDaysList.concat(day)
        this.setState({store: updatedStore})
    }

    updateStoreCategories = (category) => {
        const updatedStore = this.state.store;
        let storeActualCategories = (this.state.store.storeCategories || [])
        updatedStore.storeCategories = storeActualCategories.includes(category) ? storeActualCategories.filter(aCategory => aCategory !== category) : storeActualCategories.concat(category)
        this.setState({store: updatedStore})
    }

    updatePaymentMethod = (method) => {
        const updatedStore = this.state.store;
        let storeActualPaymentMethods = (this.state.store.availablePaymentMethods || [])
        updatedStore.availablePaymentMethods = storeActualPaymentMethods.includes(method) ? storeActualPaymentMethods.filter(aMethod => aMethod !== method) : storeActualPaymentMethods.concat(method)
        this.setState({store: updatedStore})
    }

    render() {
        return(
            <div className="user-profile-data-panel">
                <div className="user-profile-data-container store-admin">
                    <div className="user-profile-data-input">
                        <label>{this.context.userProfileUsername}</label>
                        <span>{this.state.username}</span>
                    </div>
                    <div className="user-profile-data-input">
                        <label>{this.context.userProfilePassword}</label>
                        <input type="password" id="user-password" name="user-password"
                               value={this.state.password}
                               onChange={(event) => this.props.updateUserField('password', event.target.value)}/>
                    </div>
                    <div className="user-profile-data-save-button">
                        <button className={"save-button" + (!this.state.dataHasChanged ? ' disabled' : '')}
                                onClick={this.props.openUpdateUserConfirmationModal}>{this.context.userProfileSave}</button>
                    </div>
                </div>

                <div className="store-data-container">
                    <div className="store-data-column">
                        <div className="store-data-text-input">
                            <label>{this.context.storeName}</label>
                            <input type="text" id="user-password" name="user-password"
                                   value={this.state.store.storeName}
                                   onChange={(event) => this.setStoreField('storeName', event.target.value)}/>
                        </div>

                        <div className="store-data-text-input">
                            <label>{this.context.storeAddress}</label>
                            <input type="text" id="store-address" name="store-address"
                                   value={this.state.store.storeAddress}
                                   onChange={(event) => this.setStoreField('storeAddress', event.target.value)}/>
                        </div>
                        <div className="store-data-time-input">
                            <label>{this.context.storeSchedule}</label>
                            <div className="times">
                                <input type="time" name="start-time" value={this.state.store.storeSchedule.openingTime}
                                       onChange={(event) => this.updateOpeningTime(event.target.value, true)}/>
                                <span>{this.context.toTime}</span>
                                <input type="time" name="end-time" value={this.state.store.storeSchedule.closingTime}
                                       onChange={(event) => this.updateOpeningTime(event.target.value, false)}/>
                            </div>
                        </div>
                        <div className="store-data-days">
                            <label>{this.context.storeDataOpeningDays}</label>
                            <div className="categories-grid">
                                {openingDays.map(day => this.generateEntityCheckbox(day, this.updateOpeningDays, this.isSelectedDay(day)))}
                            </div>
                        </div>
                    </div>

                    <div className="store-data-column">
                        <div className="store-data-days">
                            <label>{this.context.storeDataCategories}</label>
                            <div className="categories-grid">
                                {storeCategories.map(category => this.generateEntityCheckbox(category, this.updateStoreCategories, this.isSelectedCategory(category)))}
                            </div>
                        </div>
                        <div className="store-data-days">
                            <label>{this.context.storeDataPaymentMethods}</label>
                            <div className="categories-grid">
                                {paymentMethods.map(method => this.generateEntityCheckbox(method, this.updatePaymentMethod, this.isSelectedPaymentMethod(method)))}
                            </div>
                        </div>
                        <div className="store-data-text-input">
                            <label>{this.context.deliveryDistanceInKm}</label>
                            <input type="number" id="store-address" name="store-address"
                                   value={this.props.user.store.deliveryDistanceInKm}
                                   onChange={(event) => this.setStoreField('deliveryDistanceInKm', event.target.value)}/>
                        </div>
                        <div className="store-data-text-input">
                            <label>{this.context.storeDataImageURL}</label>
                            <input type="text" id="store-address" name="store-address"
                                   value={this.state.store.storeImage}
                                   onChange={(event) => this.setStoreField('storeImage', event.target.value)}/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
StoreAdminData.contextType = LanguageContext;
export default StoreAdminData;