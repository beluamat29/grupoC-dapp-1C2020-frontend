import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

class AdditionSucceed extends React.Component {
    render() {
        return(
            <div className="modal-card-body success">
                <div className='success-icon'>
                    <FontAwesomeIcon icon={faCheckCircle}/>
                </div>
                <div className="success-title">
                    ¡Tu producto fue agregado con éxito!
                </div>
            </div>
        )
    }
}

export default AdditionSucceed;