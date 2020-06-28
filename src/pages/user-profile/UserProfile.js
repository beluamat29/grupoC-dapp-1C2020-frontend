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
                {!this.state.loadingUser && !this.state.user.isStoreAdmin && <ClientUserData user={this.state.user}
                                                                  updateUserField={this.updateUserField}
                                                                  dataHasChanged={this.state.dataHasChanged}
                                                                  openUpdateUserConfirmationModal={this.openUpdateUserConfirmationModal}/>
                }
                {!this.state.loadingUser && this.state.user.isStoreAdmin && <StoreAdminData user={this.state.user}/>}
                {this.state.updateConfirmationModalOpen && <UpdateUserConfirmation onClose={this.closeUpdateConfirmationModal}
                                                                                   storeAdmin={this.state.user}
                />}
            </div>
        )
    }
}
UserProfile.contextType = LanguageContext;
export default  withRouter(UserProfile);