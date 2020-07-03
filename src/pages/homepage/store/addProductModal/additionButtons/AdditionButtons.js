import * as React from "react";

class AdditionButtons extends React.Component {
    render() {
        return(
            <div className="registration-buttons">
                {!this.props.additionSucceed && !this.props.product.id &&
                <div className="registering-buttons">
                    <button className="boton-modal" onClick={this.props.addProduct}>Agregar Producto</button>
                </div>
                }
                {!this.props.additionSucceed && !!this.props.product.id &&
                <div className="registering-buttons">
                    <button className="boton-modal" onClick={this.props.updateProduct}>Editar Producto</button>
                </div>
                }
                {this.props.additionSucceed &&
                <div className="success-button">
                    <button className="boton-modal" onClick={this.props.closeModal}>¡Entendido!</button>
                </div>
                }

            </div>
        )
    }
}

export default AdditionButtons;