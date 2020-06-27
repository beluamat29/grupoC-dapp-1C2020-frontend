import * as React from "react";
import "./user-profile.scss"
import {LanguageContext} from "../../constants/LanguageMaps";
import {withRouter} from "react-router-dom";
import LoginService from "../../servicios/LoginService";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
import UpdateUserConfirmation from "./UpdateUserConfirmation";

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            loadingUser: true,
            updateConfirmationModalOpen: false,
            dataHasChanged: false
        }
    }

    componentDidMount() {
        this.setState({loadingUser: true})
        const userId = this.props.match.params.id;
        LoginService().getUserById(userId)
            .then(response => this.setState({user: response.data, loadingUser: false}))
            .catch(error => console.log(error))
    }

    openUpdateUserConfirmationModal = () => {
        if(this.state.dataHasChanged) {
            this.setState({updateConfirmationModalOpen: true})
        }
    }
    closeUpdateConfirmationModal = () => this.setState({updateConfirmationModalOpen: false})

    updateUserField = (fieldName, newValue) => {
        const updatedUser = this.state.user
        updatedUser[fieldName] = newValue
        this.setState({user: updatedUser, dataHasChanged: true})
    }

    render() {
        return(
            <div className="user-profile-page">
                {this.state.loadingUser && <LoadingSpinner isLoading={this.state.loadingUser}/>}
                <div className="user-profile-header-panel">
                    <div className="user-profile-header-title">
                        <span>{this.context.welcomeToProfile}</span>
                    </div>
                    <div className="user-profile-header-subtitle">
                        <span>{this.context.profileSubtitle}</span>
                    </div>
                </div>
                {!this.state.loadingUser &&
                <div className="user-profile-data-panel">
                   <div className="user-profile-data-container">
                        <div className="user-profile-data-input">
                            <label>{this.context.userProfileUsername}</label>
                            <span>{this.state.user.username}</span>
                        </div>
                       <div className="user-profile-data-input">
                           <label>{this.context.userProfileAddress}</label>
                           <input type="text" id="user-address" name="user-address"
                                  value={this.state.user.address}
                                  onChange={(event) => this.updateUserField('address', event.target.value)}
                           />
                       </div>
                       <div className="user-profile-data-input">
                           <label>{this.context.userProfilePassword}</label>
                           <input type="password" id="user-password" name="user-password"
                                  value={this.state.user.password}
                                  onChange={(event) => this.updateUserField('password', event.target.value)}/>
                       </div>
                       <div className="user-profile-data-save-button">
                           <button className={"save-button" + (!this.state.dataHasChanged ? ' disabled' : '')}
                                   onClick={this.openUpdateUserConfirmationModal}>{this.context.userProfileSave}</button>
                       </div>
                   </div>
                </div>}
                {this.state.updateConfirmationModalOpen && <UpdateUserConfirmation onClose={this.closeUpdateConfirmationModal}
                                                                                   user={this.state.user}
                />}
            </div>
        )
    }
}
UserProfile.contextType = LanguageContext;
export default  withRouter(UserProfile);