import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleBodyScrollToggle = this.handleBodyScrollToggle.bind(this);
    }
    
    handleBodyScrollToggle() {
        if (this.props.isOpen) {
            document.getElementById('body').className = 'modal-open';
        }
        else {
            document.getElementById('body').className = '';
        }
    }

    componentDidUpdate() {
        console.log(this.props.isOpen)
        this.handleBodyScrollToggle();
    }

    render() {
        return (
            <div
                className={this.props.isOpen ? "modal fade show" : "modal fade"}
                tabIndex={-1}
                role="dialog"
                aria-labelledby="addContentModal"
                aria-hidden="true"
                aria-modal="true"
                style={this.props.isOpen ? {display: "block"} : {display: "none"}}
            >
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document" style={{zIndex: "6000"}}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.modalTitle}</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={this.props.handleCloseModal}
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>

                            {/* Modal Content Component Goes Here */}
                            {this.props.children}

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                                onClick={this.props.handleCloseModal}
                            >
                            Close
                            </button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
