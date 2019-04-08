import React, { Component } from 'react';

class MainContainer extends Component {
    render() {
        return (
            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContainer;
