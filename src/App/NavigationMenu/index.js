import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                            <Link to="/App/Dashboard" className="nav-link">
                                <span className="pcoded-micon"><i className="feather icon-home"></i></span>
                                <span className="pcoded-mtext">Dashboard</span>
                            </Link>
                            </li>
                            <li data-username="Menu levels Menu level 2.1 Menu level 2.2" className="nav-item pcoded-hasmenu">
                                <a href="#" className="nav-link">
                                    <span className="pcoded-micon"><i className="feather icon-menu"></i></span>
                                    <span className="pcoded-mtext">Content</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li><Link to="/App/ViewContent">View Content</Link></li>
                                    <li><Link to="/App/Discover">Discover</Link></li>
                                </ul>
                            </li>
                            <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item">
                                <Link to="/App/Users" className="nav-link">
                                    <span className="pcoded-micon"><i className="feather icon-home"></i></span>
                                    <span className="pcoded-mtext">Users</span>
                                </Link>
                            </li>
                            <li data-username="Menu levels Menu level 2.1 Menu level 2.2" className="nav-item pcoded-hasmenu">
                                <a href="#" className="nav-link">
                                    <span className="pcoded-micon"><i className="feather icon-menu"></i></span>
                                    <span className="pcoded-mtext">Subscription</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li><Link to="/App/ViewContent">Subscribers</Link></li>
                                    <li><Link to="/App/Discover">Products</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationMenu;
