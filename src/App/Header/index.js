import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="navbar pcoded-header navbar-expand-lg navbar-light">
                <div className="m-header">
                    <div className="mobile-menu" id="mobile-collapse1" href="#"><span></span></div>
                    <div href="index.html">
                        <img className="img-fluid" src="assets/images/logo.png" alt="Theme-Logo" />
                    </div>
                </div>
                <div className="mobile-menu" id="mobile-header" href="#">
                    <i className="feather icon-more-horizontal"></i>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        {/* <li><div href="#" className="full-screen" onClick="#toggleFullScreen()"><i className="feather icon-maximize"></i></div></li> */}
                        <li><div href="#" className="full-screen"><i className="feather icon-maximize"></i></div></li>
                        <li className="nav-item dropdown">
                            <div className="dropdown-toggle" href="#" data-toggle="dropdown">Dropdown</div>
                            <ul className="dropdown-menu">
                                <li><div className="dropdown-item" href="#">Action</div></li>
                                <li><div className="dropdown-item" href="#">Another action</div></li>
                                <li><div className="dropdown-item" href="#">Something else here</div></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <div className="main-search">
                                <div className="input-group">
                                    <input type="text" id="m-search" className="form-control" placeholder="Search . . ." />
                                    <div href="#" className="input-group-append search-close">
                                        <i className="feather icon-x input-group-text"></i>
                                    </div>
                                    <span className="input-group-append search-btn btn btn-primary">
                                        <i className="feather icon-search input-group-text"></i>
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li>
                            <div className="dropdown">
                                <div className="dropdown-toggle" href="#" data-toggle="dropdown"><i className="icon feather icon-bell"></i></div>
                                <div className="dropdown-menu dropdown-menu-right notification">
                                    <div className="noti-head">
                                        <h6 className="d-inline-block m-b-0">Notifications</h6>
                                        <div className="float-right">
                                            <div href="#" className="m-r-10">mark as read</div>
                                            <div href="#">clear all</div>
                                        </div>
                                    </div>
                                    <ul className="noti-body">
                                        <li className="n-title">
                                            <p className="m-b-0">NEW</p>
                                        </li>
                                        <li className="notification">
                                            <div className="media">
                                                <img className="img-radius" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image" />
                                                <div className="media-body">
                                                    <p><strong>John Doe</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                                    <p>New ticket Added</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="n-title">
                                            <p className="m-b-0">EARLIER</p>
                                        </li>
                                        <li className="notification">
                                            <div className="media">
                                                <img className="img-radius" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image" />
                                                <div className="media-body">
                                                    <p><strong>Joseph William</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                                    <p>Prchace New Theme and make payment</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="notification">
                                            <div className="media">
                                                <img className="img-radius" src="assets/images/user/avatar-3.jpg" alt="Generic placeholder image" />
                                                <div className="media-body">
                                                    <p><strong>Sara Soudein</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                                    <p>currently login</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="noti-footer">
                                        <div href="#">show all</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><div href="#" className="displayChatbox"><i className="icon feather icon-mail"></i></div></li>
                        <li>
                            <div className="dropdown drp-user">
                                <div href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="icon feather icon-settings"></i>
                                </div>
                                <div className="dropdown-menu dropdown-menu-right profile-notification">
                                    <div className="pro-head">
                                        <img src="assets/images/user/avatar-1.jpg" className="img-radius" alt="User-Profile-Image" />
                                        <span>John Doe</span>
                                        <div href="auth-sign-in-social.html" className="dud-logout" title="Logout">
                                            <i className="feather icon-log-out"></i>
                                        </div>
                                    </div>
                                    <ul className="pro-body">
                                        <li><div href="#" className="dropdown-item"><i className="feather icon-settings"></i> Settings</div></li>
                                        <li><div href="#" className="dropdown-item"><i className="feather icon-user"></i> Profile</div></li>
                                        <li><div href="#" className="dropdown-item"><i className="feather icon-mail"></i> My Messages</div></li>
                                        <li><div href="#" className="dropdown-item"><i className="feather icon-lock"></i> Lock Screen</div></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;
