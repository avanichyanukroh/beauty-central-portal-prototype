import React, { Component } from 'react';

class NavigationMenu extends Component {
    render() {
        return (
            <nav className="pcoded-navbar">
                <div className="navbar-wrapper">
                {/* <!-- put Logo is hear --> */}
                <div className="navbar-brand header-logo">
                    <a href="index.html" className="b-brand">
                        <div className="b-bg">
                            <i className="feather icon-trending-up"></i>
                        </div>
                        <span className="b-title">Beauty Central</span>
                    </a>
                    <a className="mobile-menu" id="mobile-collapse" href="#"><span></span></a>
                </div>
                    {/* <!-- end Logo is hear --> */}
                    <div className="navbar-content scroll-div">
                        <ul className="nav pcoded-inner-navbar">
                            <li className="nav-item pcoded-menu-caption">
                                <label>Navigation</label>
                            </li>
                            <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item">
                                <a href="index.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Dashboard</span></a>
                            </li>
                            <li className="nav-item pcoded-menu-caption">
                                <label>Other</label>
                            </li>
                            <li data-username="Menu levels Menu level 2.1 Menu level 2.2" className="nav-item pcoded-hasmenu">
                                <a href="#" className="nav-link "><span className="pcoded-micon"><i className="feather icon-menu"></i></span><span className="pcoded-mtext">Menu levels</span></a>
                                <ul className="pcoded-submenu">
                                    <li className=""><a href="" className="">Menu Level 2.1</a></li>
                                    <li className="pcoded-hasmenu">
                                        <a href="#" className="">Menu level 2.2</a>
                                        <ul className="pcoded-submenu">
                                            <li className=""><a href="" className="">Menu level 3.1</a></li>
                                            <li className=""><a href="" className="">Menu level 3.2</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li data-username="Disabled Menu" className="nav-item disabled"><a href="#" className="nav-link"><span className="pcoded-micon"><i className="feather icon-power"></i></span><span className="pcoded-mtext">Disabled menu</span></a></li>
                            <li data-username="Sample Page" className="nav-item active"><a href="sample-page.html" className="nav-link"><span className="pcoded-micon"><i className="feather icon-sidebar"></i></span><span className="pcoded-mtext">Sample page</span></a></li>
                            <li className="nav-item pcoded-menu-caption">
                                <label>Support</label>
                            </li>
                            <li data-username="Documentation" className="nav-item"><a href="http://html.codedthemes.com/datta-able/bootstrap/default/docs.html" className="nav-link" target="_blank"><span className="pcoded-micon"><i className="feather icon-book"></i></span><span className="pcoded-mtext">Documentation</span></a></li>
                            <li data-username="Need Support" className="nav-item"><a href="https://codedthemes.support-hub.io/" className="nav-link" target="_blank"><span className="pcoded-micon"><i className="feather icon-help-circle"></i></span><span className="pcoded-mtext">Need
                                        support ?</span></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationMenu;
