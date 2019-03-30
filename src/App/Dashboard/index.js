import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content">
                            {/* <!-- [ breadcrumb ] start --> */}
                            <div className="page-header">
                                <div className="page-block">
                                    <div className="row align-items-center">
                                        <div className="col-md-12">
                                            <div className="page-header-title">
                                                <h5 className="m-b-10">Sample Page</h5>
                                            </div>
                                            <ul className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="index.html"><i className="feather icon-home"></i></a></li>
                                                <li className="breadcrumb-item"><a href="#">Sample Page</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- [ breadcrumb ] end --> */}
                            <div className="main-body">
                                <div className="page-wrapper">
                                    {/* <!-- [ Main Content ] start --> */}
                                    <div className="row">
                                        {/* <!-- [ sample-page ] start --> */}
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5>Hello card</h5>
                                                    <div className="card-header-right">
                                                        <div className="btn-group card-option">
                                                            <button type="button" className="btn dropdown-toggle btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-Expand="false">
                                                                <i className="feather icon-more-horizontal"></i>
                                                            </button>
                                                            <ul className="list-unstyled card-option dropdown-menu dropdown-menu-right">
                                                                <li className="dropdown-item full-card"><a href="#"><span><i className="feather icon-maximize"></i> maximize</span><span style={{ display: "none" }}><i className="feather icon-minimize"></i> Restore</span></a></li>
                                                                <li className="dropdown-item minimize-card"><a href="#"><span><i className="feather icon-minus"></i>Collapse</span><span style={{ display: "none" }}><i className="feather icon-plus"></i> Expand</span></a></li>
                                                                <li className="dropdown-item reload-card"><a href="#"><i className="feather icon-refresh-cw"></i> reload</a></li>
                                                                <li className="dropdown-item close-card"><a href="#"><i className="feather icon-trash"></i>Remove</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-block">
                                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                                        officia deserunt mollit anim id est laborum."
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- [ sample-page ] end --> */}
                                    </div>
                                    {/* <!-- [ Main Content ] end --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
