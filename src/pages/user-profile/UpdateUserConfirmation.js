import * as React from "react";
import {LanguageContext} from "../../constants/LanguageMaps";
import "./user-profile.scss"
import LoginService from "../../servicios/LoginService";

class UpdateUserConfirmation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordToConfirm: ''
        }
    }


    validateAndUpdateUser = () => {
        LoginService().validateUser({username: this.props.user.username, password: this.state.passwordToConfirm})
            .then(response => {
                console.log('todo piola')
            })
            .catch( error => {
                alert("El nombre de usuario o la contraseña no son correctos")
            })
    }

    updatePasswordToConfirm = (password) => {
        this.setState({passwordToConfirm: password})
    }

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
                        {this.context.confirmUserUpdateText}
                        <label>{this.context.userProfilePassword}</label>
                        <input type="text" value={this.state.passwordToConfirm} onChange={(event) => this.updatePasswordToConfirm(event.target.value)}/>
                    </div>
                    <footer className="modal-card-foot">
                        <button className="update-user-button" onClick={this.validateAndUpdateUser}>{this.context.userProfileSave}</button>
                    </footer>
                </div>
            </div>
        )
    }
}
UpdateUserConfirmation.contextType = LanguageContext;
export default UpdateUserConfirmation;