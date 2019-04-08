import React, { Component } from 'react';

class AddContentForm extends Component {
	render() {
		return (
			<div>
				<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
					<li className="nav-item">
						<div className="nav-link active" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">Editor View</div>
					</li>
					<li className="nav-item">
						<div className="nav-link" id="pills-profile-tab" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false">Sample View</div>
					</li>
				</ul>
				<div className="tab-content" id="pills-tabContent">
					<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

						{/* Editor View tab content */}
						<div className="modal-body">
							<div className="row">
								<div className="col-md-12">
									<form>
										<div className="form-group">
											<label htmlFor="exampleInputEmail1">Title</label>
											<input type="text" className="form-control" placeholder="Content title" />
										</div>
									</form>
								</div>
								<div className="col-md-6">
									<form>
										<div className="form-group">
											<label>Tags</label>
											<input type="text" className="form-control" placeholder="tags associated with content" />
										</div>
									</form>
								</div>
								<div className="col-md-6">
									<label>Media</label>
									<form
										className="text-center"
										style={{
											height: "auto",
											width: "100%",
											borderRadius: "4px",
											background: "#d3d3d3"
										}}
									>
										<div className="dz-default dz-message align-middle">
											<span style={{display: "inline-block", padding: "10px 20px"}}>Drop files here to upload</span>
										</div>
									</form>
								</div>
								<div className="col-md-12">
									<form>
									<div className="form-group">
											<label htmlFor="exampleFormControlTextarea1">Description</label>
											<textarea
											className="form-control"
											id="exampleFormControlTextarea1"
											rows={8}
											defaultValue={""}
											placeholder="Content description"
											wrap="hard"
											/>
										</div>
									</form>
								</div>
							</div>
						</div>

					</div>
					<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
						<p className="mb-0">

							{/* Sample View tab content */}
							Sample View Placeholder

						</p>
					</div>
				</div>
			</div>



			

		);
	}
}

export default AddContentForm;
