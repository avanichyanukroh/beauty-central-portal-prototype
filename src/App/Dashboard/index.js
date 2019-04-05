import React, { Component, Fragment } from 'react';

import BreadCrumb from 'ReusableComponent/BreadCrumb';

class Dashboard extends Component {
	render() {
		return (
			<Fragment>
				{/* <!-- [ breadcrumb ] start --> */}
				<BreadCrumb />
				{/* <!-- [ breadcrumb ] end --> */}
				<div className="main-body">
					<div className="page-wrapper">
						{/* <!-- [ Main Content ] start --> */}
						<div className="row">
							{/* <!-- [ sample-page ] start --> */}
							<div className="container">
								<div className="row">
									<div className="col-sm">

										<div className="card Online-Order">
											<div className="card-block">
												<h5>Online Orders</h5>
												<h6 className="text-muted d-flex align-items-center justify-content-between m-t-30">Delivery Orders<span className="float-right f-18 text-c-green">237 / 400</span></h6>
												<div className="progress mt-3">
													<div className="progress-bar progress-c-theme" role="progressbar" style={{width: '65%', height: 6}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
												</div>
												<span className="text-muted mt-2 d-block">37% Done</span>
											</div>
										</div>

									</div>
									<div className="col-sm">

										<div className="card Online-Order">
											<div className="card-block">
												<h5>Pending Orders</h5>
												<h6 className="text-muted d-flex align-items-center justify-content-between m-t-30">pending Orders<span className="float-right f-18 text-c-purple">100 / 500</span></h6>
												<div className="progress mt-3">
													<div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '50%', height: 6}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
												</div>
												<span className="text-muted mt-2 d-block">20% pending</span>
											</div>
										</div>

									</div>
									<div className="col-sm">

										<div className="card Online-Order">
											<div className="card-block">
												<h5>Return Orders</h5>
												<h6 className="text-muted d-flex align-items-center justify-content-between m-t-30">Return Orders<span className="float-right f-18 text-c-blue">50 / 400</span></h6>
												<div className="progress mt-3">
													<div className="progress-bar progress-c-blue" role="progressbar" style={{width: '40%', height: 6}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
												</div>
												<span className="text-muted mt-2 d-block">10% Return</span>
											</div>
										</div>

									</div>
								</div>
								<div className="row">
									<div className="col-8-sm">

									</div>
									<div className="col-4-sm">

									</div>
								</div>
								<div className="row">
									<div className="col-12">

										<div className="card Recent-Users">
											<div className="card-header">
												<h5>Recent Users</h5>
												<div className="card-header-right">
													<div className="btn-group card-option">
														<button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
															<i className="feather icon-more-horizontal" />
														</button>
														<ul className="list-unstyled card-option dropdown-menu dropdown-menu-right">
															<li className="dropdown-item full-card"><a href="#!"><span><i className="feather icon-maximize" /> maximize</span><span style={{display: 'none'}}><i className="feather icon-minimize" /> Restore</span></a></li>
															<li className="dropdown-item minimize-card"><a href="#!"><span><i className="feather icon-minus" /> collapse</span><span style={{display: 'none'}}><i className="feather icon-plus" /> expand</span></a></li>
															<li className="dropdown-item reload-card"><a href="#!"><i className="feather icon-refresh-cw" /> reload</a></li>
															<li className="dropdown-item close-card"><a href="#!"><i className="feather icon-trash" /> remove</a></li>
														</ul>
													</div>
												</div>
											</div>
											<div className="card-block">
												<div className="table-responsive">
													<table className="table table-hover">
														<tbody>
															<tr className="unread">
																<td><img className="rounded-circle" style={{width: 40}} src="assets/images/user/avatar-1.jpg" alt="activity-user" /></td>
																<td>
																	<h6 className="mb-1">Isabella Christensen</h6>
																	<p className="m-0">Lorem Ipsum is simply dummy text of…</p>
																</td>
																<td>
																	<h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15" />11 MAY 12:56</h6>
																</td>
																<td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
															</tr>
															<tr className="unread">
																<td><img className="rounded-circle" style={{width: 40}} src="assets/images/user/avatar-2.jpg" alt="activity-user" /></td>
																<td>
																	<h6 className="mb-1">Mathilde Andersen</h6>
																	<p className="m-0">Lorem Ipsum is simply dummy text of…</p>
																</td>
																<td>
																	<h6 className="text-muted"><i className="fas fa-circle text-c-red f-10 m-r-15" />11 MAY 10:35</h6>
																</td>
																<td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
															</tr>
															<tr className="unread">
																<td><img className="rounded-circle" style={{width: 40}} src="assets/images/user/avatar-3.jpg" alt="activity-user" /></td>
																<td>
																	<h6 className="mb-1">Karla Sorensen</h6>
																	<p className="m-0">Lorem Ipsum is simply dummy text of…</p>
																</td>
																<td>
																	<h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15" />9 MAY 17:38</h6>
																</td>
																<td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
															</tr>
															<tr className="unread">
																<td><img className="rounded-circle" style={{width: 40}} src="assets/images/user/avatar-1.jpg" alt="activity-user" /></td>
																<td>
																	<h6 className="mb-1">Ida Jorgensen</h6>
																	<p className="m-0">Lorem Ipsum is simply dummy text of…</p>
																</td>
																<td>
																	<h6 className="text-muted f-w-300"><i className="fas fa-circle text-c-red f-10 m-r-15" />19 MAY 12:56</h6>
																</td>
																<td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
															</tr>
															<tr className="unread">
																<td><img className="rounded-circle" style={{width: 40}} src="assets/images/user/avatar-2.jpg" alt="activity-user" /></td>
																<td>
																	<h6 className="mb-1">Albert Andersen</h6>
																	<p className="m-0">Lorem Ipsum is simply dummy text of…</p>
																</td>
																<td>
																	<h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15" />21 July 12:56</h6>
																</td>
																<td><a href="#!" className="label theme-bg2 text-white f-12">Reject</a><a href="#!" className="label theme-bg text-white f-12">Approve</a></td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>
							{/* <!-- [ sample-page ] end --> */}
						</div>
						{/* <!-- [ Main Content ] end --> */}
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Dashboard;
