import * as React from "react";

class UpdateUserConfirmation extends React.Component {
    render() {
        return(
            <div className="modal">
                <div className="modal-background"/>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title"></p>
                        <button className="delete" aria-label="close" onClick={this.props.onClose}/>
                    </header>
                    <div className="modal-card-body">
                    </div>
                    <footer className="modal-card-foot">
                    </footer>
                </div>
            </div>
        )
    }
}

export default UpdateUserConfirmation;