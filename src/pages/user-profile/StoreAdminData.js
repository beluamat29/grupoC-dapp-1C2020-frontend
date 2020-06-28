import * as React from "react";
import {LanguageContext} from "../../constants/LanguageMaps";
import "./user-profile.scss"
import {openingDays, paymentMethods, storeCategories} from "../../constants/Constants";
import {categories} from "../../constants";

class StoreAdminData extends React.Component {
    generateEntityCheckbox = (entity, onSelectEntity) => {
        return (
            <div className="rubro-checkbox">
                <input type="checkbox" value={entity.value} onClick={(event) => onSelectEntity(event.target.value)}/>
                <label className="checkbox">
                    {entity.label}
                </label>
            </div>
        )
    }
    render() {
        return(
            <div className="user-profile-data-panel">
                <div className="user-profile-data-container store-admin">
                    <div className="user-profile-data-input">
                        <label>{this.context.userProfileUsername}</label>
                        <span>{this.props.user.username}</span>
                    </div>
                    <div className="user-profile-data-input">
                        <label>{this.context.userProfilePassword}</label>
                        <input type="password" id="user-password" name="user-password"
                               value={this.props.user.password}
                               onChange={(event) => this.props.updateUserField('password', event.target.value)}/>
                    </div>
                    <div className="user-profile-data-save-button">
                        <button className={"save-button" + (!this.props.dataHasChanged ? ' disabled' : '')}
                                onClick={this.props.openUpdateUserConfirmationModal}>{this.context.userProfileSave}</button>
                    </div>
                </div>

                <div className="store-data-container">
                    <div className="store-data-column">
                        <div className="store-data-text-input">
                            <label>{this.context.storeName}</label>
                            <input type="text" id="user-password" name="user-password"
                                   value={this.props.user.store.storeName}
                                   onChange={(event) => this.props.updateUserField('password', event.target.value)}/>
                        </div>

                        <div className="store-data-text-input">
                            <label>{this.context.storeAddress}</label>
                            <input type="text" id="store-address" name="store-address"
                                   value={this.props.user.store.storeAddress}
                                   onChange={(event) => this.props.updateUserField('password', event.target.value)}/>
                        </div>
                        <div className="store-data-time-input">
                            <label>{this.context.storeSchedule}</label>
                            <div className="times">
                                <input type="time" name="start-time" value={this.props.user.store.storeSchedule.openingTime}
                                       onChange={(event) => this.props.onUpdate('openingTime', event.target.value)}/>
                                <span>{this.context.toTime}</span>
                                <input type="time" name="end-time" value={this.props.user.store.storeSchedule.closingTime}
                                       onChange={(event) => this.props.onUpdate('closingTime', event.target.value)}/>
                            </div>
                        </div>
                        <div className="store-data-days">
                            <label>{this.context.storeDataOpeningDays}</label>
                            <div className="categories-grid">
                                {openingDays.map(day => this.generateEntityCheckbox(day))}
                            </div>
                        </div>
                    </div>

                    <div className="store-data-column">
                        <div className="store-data-days">
                            <label>{this.context.storeDataCategories}</label>
                            <div className="categories-grid">
                                {storeCategories.map(day => this.generateEntityCheckbox(day))}
                            </div>
                        </div>
                        <div className="store-data-days">
                            <label>{this.context.storeDataPaymentMethods}</label>
                            <div className="categories-grid">
                                {paymentMethods.map(day => this.generateEntityCheckbox(day))}
                            </div>
                        </div>
                        <div className="store-data-text-input">
                            <label>{this.context.deliveryDistanceInKm}</label>
                            <input type="number" id="store-address" name="store-address"
                                   value={this.props.user.store.deliveryDistanceInKm}
                                   onChange={(event) => this.props.updateUserField('password', event.target.value)}/>
                        </div>
                        <div className="store-data-text-input">
                            <label>{this.context.storeDataImageURL}</label>
                            <input type="text" id="store-address" name="store-address"
                                   value={this.props.user.store.storeImage}
                                   onChange={(event) => this.props.updateUserField('password', event.target.value)}/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
StoreAdminData.contextType = LanguageContext;
export default StoreAdminData;