import * as React from "react";
import "./user-profile.scss"
import {LanguageContext} from "../../constants/LanguageMaps";
import {withRouter} from "react-router-dom";

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        this.setState({user: this.props.user})
    }

    render() {
        return(
            <div className="user-profile-page">
                <div className="user-profile-header-panel">
                    <div className="user-profile-header-title">
                        <span>{this.context.welcomeToProfile}</span>
                    </div>
                    <div className="user-profile-header-subtitle">
                        <span>{this.context.profileSubtitle}</span>
                    </div>
                </div>
                <div className="user-profile-data-panel">
                   <div className="user-profile-data-container">
                        <div className="user-profile-data-input">
                            <label>{this.context.userProfileUsername}</label>
                            <span>{this.props.user.username}</span>
                        </div>
                       <div className="user-profile-data-input">
                           <label>{this.context.userProfileAddress}</label>
                           <input type="text" id="user-address" name="user-address" value={this.state.user.address}/>
                       </div>
                       <div className="user-profile-data-input">
                           <label>{this.context.userProfilePassword}</label>
                           <input type="password" id="user-password" name="user-password" value={this.state.user.password}/>
                       </div>
                       <div className="user-profile-data-save-button">
                           <button className="save-button" onClick={this.loginUser}>{this.context.userProfileSave}</button>
                       </div>
                   </div>
                </div>
            </div>
        )
    }
}
UserProfile.contextType = LanguageContext;
export default  withRouter(UserProfile);