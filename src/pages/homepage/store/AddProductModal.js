import * as React from "react";
import RegistrationSucceed from "../../loginpage/modalRegistro/succeed/RegistrationSucceed";
import RegistrationButtons from "../../loginpage/modalRegistro/registrationButtons/RegistrationButtons";
import NewProductField from "./NewProductField";

class AddProductModal extends React.Component{
    constructor(props){
        super(props)
    }

    updateForm = (key, value) => {
        this.setState({[key]: value})
    }

    render() {
        return(
            <div className="modal">
                <div className="modal-background"/>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Nuevo Producto</p>
                        <button className="delete" aria-label="close" onClick={this.props.onClose}/>
                    </header>
                    {
                    <NewProductField onUpdate={this.updateForm} />}


                </div>
            </div>
        )
    }

}
export default AddProductModal;