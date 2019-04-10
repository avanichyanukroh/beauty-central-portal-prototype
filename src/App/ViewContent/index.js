import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pcoded } from 'assets/js/pcoded.js';

import Modal from 'ReusableComponent/Modal';
import AddContentForm from 'App/ViewContent/Components/AddContentForm';
class ViewContent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalIsOpen: false
		}

		// On click method binds
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);

		// Render method binds
		this.renderTableData = this.renderTableData.bind(this);
	}

	// On click methods
	handleOpenModal() {
		this.setState({ modalIsOpen: true });
	}
	handleCloseModal() {
		this.setState({ modalIsOpen: false });
	}

	// Render methods
	renderTableData() {
		const tableData = this.props.contents.map(contents =>
				<tr key={contents.content_id}>
					<td>{contents.title}</td>
					<td>{contents.tags.join(", ")}</td>
					<td>{contents.comments}</td>
					<td>{contents.likes}</td>
					<td>{contents.creator}</td>
					<td>{contents.published}</td>
				</tr>
			);
		
		return tableData;

	}

	componentDidMount() {
		// pcoded();
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
									<h5>Content</h5>
								</div>
								<div className="card-block">
									<div className="table-responsive">
										<div id="zero-configuration_wrapper" className="dataTables_wrapper dt-bootstrap4">
											<div className="row ml-0 mr-0 mt-2 mb-2">
												<div className="col-sm-12 col-md-6">
													<Modal
														modalTitle="Add New Content"
														isOpen={this.state.modalIsOpen}
														handleCloseModal={this.handleCloseModal}
													>
														<AddContentForm />
													</Modal>
													<button
														type="button"
														className="btn btn-primary"
														data-toggle="modal"
														data-target="#exampleModalCenter"
														onClick={this.handleOpenModal}
													>
													Add New Content
													</button>
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
																<th>Title</th>
																<th>Tags</th>
																<th>Comments</th>
																<th>Likes</th>
																<th>Creator</th>
																<th>Published</th>
															</tr>
														</thead>
														<tbody>
															{this.renderTableData()}
														</tbody>
														<tfoot>
															<tr>
																<th>Title</th>
																<th>Tags</th>
																<th>Comments</th>
																<th>Likes</th>
																<th>Creator</th>
																<th>Published</th>
															</tr>
														</tfoot>
													</table>
												</div>
											</div>
											<div className="row ml-0 mr-0">
												<div className="col-sm-12 col-md-5">
													<div>Showing 1 to 4 of 4 entries</div>
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
				<div className={this.state.modalIsOpen ? "modal-backdrop fade show" : "fade"}></div>
			</div>

		);
	}
}

const mapStateToProps = state => ({
	contents: state.contents
});

export default connect(mapStateToProps)(ViewContent);
