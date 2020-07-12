import * as React from "react";
import "./user-profile.scss"
import {LanguageContext} from "../../constants/LanguageMaps";
import {withRouter} from "react-router-dom";
import LoginService from "../../servicios/LoginService";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
import UpdateUserConfirmation from "./UpdateUserConfirmation";
import ClientUserData from "./ClientUserData";
import StoreAdminData from "./StoreAdminData";

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
        debugger
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

    updateStore = (newStore) => {
        const updatedUser = this.state.user
        updatedUser['store'] = newStore
        this.setState({user: updatedUser, dataHasChanged: true}, this.openUpdateUserConfirmationModal)
    }

    render() {
        return(
            <div className="user-profile-page">
                <div className="user-profile-header-panel">
                    <div className="user-profile-header-title">
                        <span>{this.context.welcomeToProfile}</span>
                    </div>
                    <div className="user-profile-header-subtitle">
                        {!this.state.user.isStoreAdmin && <span>{this.context.userProfileSubtitle}</span>}
                        {this.state.user.isStoreAdmin && <span>{this.context.storeProfileSubtitle}</span>}
                    </div>
                </div>
                {!this.state.loadingUser && !this.state.user.isStoreAdmin && <ClientUserData user={this.state.user}
                                                                  updateUserField={this.updateUserField}
                                                                  dataHasChanged={this.state.dataHasChanged}
                                                                  openUpdateUserConfirmationModal={this.openUpdateUserConfirmationModal}/>
                }
                {!this.state.loadingUser && this.state.user.isStoreAdmin && <StoreAdminData user={this.state.user}
                                                                                            updateStore={this.updateStore}/>
                }
                {this.state.updateConfirmationModalOpen && <UpdateUserConfirmation onClose={this.closeUpdateConfirmationModal}
                                                                                   user={this.state.user}
                />}
                {this.state.loadingUser && <LoadingSpinner isLoading={this.state.loadingUser}/>}
            </div>
        )
    }
}
UserProfile.contextType = LanguageContext;
export default  withRouter(UserProfile);