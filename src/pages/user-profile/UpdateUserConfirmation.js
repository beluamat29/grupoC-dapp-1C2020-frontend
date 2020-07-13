import * as React from "react";
import {LanguageContext} from "../../constants/LanguageMaps";
import "./user-profile.scss"
import LoginService from "../../servicios/LoginService";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";

class UpdateUserConfirmation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordToConfirm: '',
            userUpdateSucceed: false,
            userUpdateFailed: false
        }
    }

    componentDidMount() {
        if(this.props.user.isFacebookUser){
            LoginService().updateUser(this.props.user)
                .then(response => this.setState({userUpdateSucceed: true, userUpdateFailed: false}))
                .catch(() => this.setState({userUpdateFailed: true, userUpdateSucceed: false}))
        }
    }

    validateAndUpdateUser = () => {
        LoginService().validateUser({username: this.props.user.username, password: this.state.passwordToConfirm})
            .then(response => {
                LoginService().updateUser(this.props.user)
                    .then(response => this.setState({userUpdateSucceed: true, userUpdateFailed: false}))
                    .catch(() => this.setState({userUpdateFailed: true, userUpdateSucceed: false}))
            })
            .catch(() => this.setState({userUpdateFailed: true, userUpdateSucceed: false}))
    }

    updatePasswordToConfirm = (password) => {
        this.setState({passwordToConfirm: password})
    }

    retryUpdate = () => this.setState({userUpdateSucceed: false, userUpdateFailed: false})

    render() {
        return(
            <div className="modal">
                <div className="modal-background"/>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">{this.context.confirmUserUpdateTitle}</p>
                        <button className="delete" aria-label="close" onClick={this.props.onClose}/>
                    </header>
                    <div className="modal-card-body">
                        { !this.state.userUpdateFailed && !this.state.userUpdateSucceed &&
                            <div className="modal-card-body-content">
                                <span>{this.context.confirmUserUpdateText}</span>
                                <label>{this.context.password}</label>
                                <input type="password" value={this.state.passwordToConfirm} onChange={(event) => this.updatePasswordToConfirm(event.target.value)}/>
                            </div>
                        }
                        { this.state.userUpdateFailed && !this.state.userUpdateSucceed &&
                            <div className="modal-card-body-content">
                                <div className='failed-icon'>
                                    <FontAwesomeIcon icon={faTimesCircle}/>
                                </div>
                                <span>{this.context.userUpdateFailed}</span>
                            </div>
                        }
                        { !this.state.userUpdateFailed && this.state.userUpdateSucceed &&
                        <div className="modal-card-body-content">
                            <div className='success-icon'>
                                <FontAwesomeIcon icon={faCheckCircle}/>
                            </div>
                            <span>{this.context.userUpdateSuccess}</span>
                        </div>
                        }
                    </div>
                    <footer className="modal-card-foot">
                        {
                            !this.state.userUpdateFailed && !this.state.userUpdateSucceed &&
                            <button className="update-user-button" onClick={this.validateAndUpdateUser}>{this.context.userProfileSave}</button>
                        }
                        {  !this.state.userUpdateFailed && this.state.userUpdateSucceed &&
                            <button className="update-user-button" onClick={this.props.onClose}>OK</button>
                        }
                        {   this.state.userUpdateFailed && !this.state.userUpdateSucceed &&
                            <button className="update-user-button" onClick={this.retryUpdate}>OK</button>
                        }
                    </footer>
                </div>
            </div>
        )
    }
}
UpdateUserConfirmation.contextType = LanguageContext;
export default UpdateUserConfirmation;