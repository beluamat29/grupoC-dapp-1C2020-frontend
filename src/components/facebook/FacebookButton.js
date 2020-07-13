import * as React from "react";
import './facebook-button.scss'

class FacebookButton extends React.Component{
    render() {
        return(
            <div className="facebook-button" onClick={this.props.onClick}>
                <button>Continuar con Facebook</button>
            </div>
        )
    }
}

export default FacebookButton;