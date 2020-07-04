import * as React from "react";
import {LanguageContext} from "../../../../../constants/LanguageMaps";

class AdditionButtons extends React.Component {
    render() {
        return(
            <div className="registration-buttons">
                {!this.props.additionSucceed && !this.props.product.id &&
                <div className="registering-buttons">
                    <button className="boton-modal" onClick={this.props.addProduct}>{this.context.addNewProductButton}</button>
                </div>
                }
                {!this.props.additionSucceed && !!this.props.product.id &&
                <div className="registering-buttons">
                    <button className="boton-modal" onClick={this.props.updateProduct}>{this.context.editProductButton}</button>
                </div>
                }
                {this.props.additionSucceed &&
                <div className="success-button">
                    <button className="boton-modal" onClick={this.props.closeModal}>{this.context.gotItButton}</button>
                </div>
                }

            </div>
        )
    }
}
AdditionButtons.contextType = LanguageContext;
export default AdditionButtons;