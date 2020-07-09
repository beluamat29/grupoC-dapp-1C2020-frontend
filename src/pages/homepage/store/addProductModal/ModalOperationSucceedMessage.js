import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {LanguageContext} from "../../../../constants/LanguageMaps";

class ModalOperationSucceedMessage extends React.Component {
    render() {
        return(
            <div className="modal-card-body success">
                <div className='success-icon'>
                    <FontAwesomeIcon icon={faCheckCircle}/>
                </div>
                <div className="success-title">
                    <span>{this.props.message}</span>
                </div>
            </div>
        )
    }
}

ModalOperationSucceedMessage.contextType = LanguageContext;
export default ModalOperationSucceedMessage;