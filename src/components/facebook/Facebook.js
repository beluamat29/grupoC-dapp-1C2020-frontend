import * as React from "react";
import FacebookLogin from 'react-facebook-login';
import LoginService from "../../servicios/LoginService";

class Facebook extends React.Component{
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }


    componentClicked = () => console.log("clicked");

    responseFacebook = (response) => {
        this.setState({
            isLoggedIn: true,
            userId: response.userId,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        }, this.props.login(this.state)) ;

    }

    render(){
        let fbContent;

        if(this.state.isLoggedIn){
           fbContent = null;
        }else{
            fbContent= (
                <FacebookLogin
                    appId="754347198658992"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            );
        }
        return(
            <div>
                {fbContent}
            </div>
        )
    }
}

export default Facebook;