import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pcoded } from 'assets/js/pcoded.js';

class Subscribers extends Component {
	constructor(props) {
		super(props);
        
		// Render method binds
		this.renderTableData = this.renderTableData.bind(this);
    }
    
    // Render methods
	renderTableData() {
		const tableData = this.props.subscribers.map(subscribers =>
				<tr key={subscribers.user_id}>
					<td>{subscribers.firstName} {subscribers.lastName}</td>
					<td>{subscribers.email}</td>
					<td>{subscribers.lastProductChoice}</td>
					<td>{subscribers.start}</td>
					<td>{subscribers.end}</td>
					<td>{subscribers.active ? "Yes" : "No"}</td>
					<td>{subscribers.cancellationReason}</td>
				</tr>
			);
		
		return tableData;

    }
    
    componentDidMount() {
		pcoded();
    }
    
	render() {
		return (
			<div className="main-body">
				<div className="page-wrapper">
				{/* [ Main Content ] start */}
					<div className="row">
						{/* [ configuration table ] start */}
						<div className="col-sm-12">
							<div className="card">
								<div className="card-header">
									<h5>Users</h5>
								</div>
								<div className="card-block">
									<div className="table-responsive">
										<div id="zero-configuration_wrapper" className="dataTables_wrapper dt-bootstrap4">
											<div className="row ml-0 mr-0 mt-2 mb-2">
												<div className="col-sm-12 col-md-6">

												</div>
												<div className="col-sm-12 col-md-3"></div>
												<div className="col-sm-12 col-md-3">
													<input
														type="search"
														className="form-control form-control-sm"
														aria-controls="zero-configuration"
														placeholder="Search"
													 />
												</div>
											</div>
											<div className="row ml-0 mr-0">
												<div className="col-sm-12">
													<table id="zero-configuration" className="display table nowrap table-striped table-hover" style={{width: "100%"}}>
														<thead>
															<tr>
																<th>User</th>
																<th>Email</th>
																<th>Last Product Choice</th>
																<th>Start</th>
																<th>End</th>
																<th>Active</th>
																<th>Cancellation Reason</th>
															</tr>
														</thead>
														<tbody>
															{this.renderTableData()}
														</tbody>
														<tfoot>
															<tr>
                                                                <th>User</th>
																<th>Email</th>
																<th>Last Product Choice</th>
																<th>Start</th>
																<th>End</th>
																<th>Active</th>
																<th>Cancellation Reason</th>
															</tr>
														</tfoot>
													</table>
												</div>
											</div>
											<div className="row ml-0 mr-0">
												<div className="col-sm-12 col-md-5">
													<div>Showing 1 to 3 of 3 entries</div>
												</div>
												<div className="col-sm-12 col-md-7">
													<nav aria-label="Page navigation">
														<ul className="pagination" style={{justifyContent: "flex-end"}}>
															<li className="page-item"><span className="page-link">Previous</span></li>
															<li className="page-item"><span className="page-link">1</span></li>
															<li className="page-item"><span className="page-link">2</span></li>
															<li className="page-item"><span className="page-link">3</span></li>
															<li className="page-item"><span className="page-link">Next</span></li>
														</ul>
													</nav>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* [ configuration table ] end */}
					</div>
				</div>
				{/* Modal backdrop */}
				{/* <div className={this.state.modalIsOpen ? "modal-backdrop fade show" : "fade"}></div> */}
			</div>

		);
	}
}

const mapStateToProps = state => ({
	subscribers: state.subscribers
});

export default connect(mapStateToProps)(Subscribers);
