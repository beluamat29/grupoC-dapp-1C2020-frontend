import * as React from "react";

class EmptyCartConfirmation extends React.Component{
    render() {
        return(
            <div className="modal">
                <div className="modal-background"/>
                <div className="modal-content">
                    <div className="remove-product-confirmation-card">
                        <div className="remove-confirmation-title">
                            ¿Estás segure que querés vaciar el carrito?
                        </div>
                        <div className="remove-confirmation-buttons">
                            <button className="remove-confirmation-button" onClick={this.props.onAccept}>Aceptar</button>
                            <button className="remove-confirmation-button" onClick={this.props.onClose}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EmptyCartConfirmation;