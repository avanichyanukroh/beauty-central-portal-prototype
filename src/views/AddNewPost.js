import React from "react";
import { Container, Row, Col, Button } from "shards-react";

// import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";

const AddNewPost = () => (
	<Container fluid className="main-content-container px-4 pb-4" style={{maxHeight: "calc(100vh - 270px)", overflow: "auto"}}>
		{/* Page Header */}
		{/* <Row noGutters className="page-header py-4">
			<PageTitle sm="4" title="Add New Content" subtitle="Content" className="text-sm-left" />
		</Row> */}

		<Row>
			{/* Editor */}
			<Col lg="12" sm="12">
                <div className="mb-2">
                    <Button className="mr-2">Editor View</Button>
                    <Button outline>Published View</Button>
                </div>
				<Editor />
			</Col>
			{/* Sidebar Widgets */}
			{/* <Col lg="12" md="12">
				<SidebarActions />
			</Col> */}
		</Row>
	</Container>
);

export default AddNewPost;
