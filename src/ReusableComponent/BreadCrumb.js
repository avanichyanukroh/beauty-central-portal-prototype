import React, { Component } from 'react';

class BreadCrumb extends Component {
    render() {
        return (
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
        );
    }
}

export default BreadCrumb;
