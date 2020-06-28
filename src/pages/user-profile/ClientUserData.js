import * as React from "react";
import "./user-profile.scss"
import {LanguageContext} from "../../constants/LanguageMaps";

class ClientUserData extends React.Component {
    render() {
        return (
            <div className="user-profile-data-panel">
                <div className="user-profile-data-container">
                    <div className="user-profile-data-input">
                        <label>{this.context.userProfileUsername}</label>
                        <span>{this.props.user.username}</span>
                    </div>
                    <div className="user-profile-data-input">
                        <label>{this.context.userProfileAddress}</label>
                        <input type="text" id="user-address" name="user-address"
                               value={this.props.user.address}
                               onChange={(event) => this.props.updateUserField('address', event.target.value)}
                        />
                    </div>
                    <div className="user-profile-data-input">
                        <label>{this.context.password}</label>
                        <input type="password" id="user-password" name="user-password"
                               value={this.props.user.password}
                               onChange={(event) => this.props.updateUserField('password', event.target.value)}/>
                    </div>
                    <div className="user-profile-data-save-button">
                        <button className={"save-button" + (!this.props.dataHasChanged ? ' disabled' : '')}
                                onClick={this.props.openUpdateUserConfirmationModal}>{this.context.userProfileSave}</button>
                    </div>
                </div>
            </div>
        )
    }
}
ClientUserData.contextType = LanguageContext;
export default ClientUserData;