/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
	Container,
	Row,
	Col,
	Card,
	CardBody,
	CardFooter,
	Badge,
	Button,
	ListGroupItem,
	Modal,
	ModalBody,
	ModalHeader,
	ModalFooter,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import AddNewPost from './AddNewPost';

class BlogPosts extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			contentList: [
				{
					content_id: 4,
					title: "Lazy Look For Curly Hair",
					thumbNail: require("../images/thumbnails/lazy-look-curly-hair.jpg"),
					tags: ["Hair", "Curly Hair", "Tutorial"],
					comments: 5,
					likes: 18,
					author: "Natalie Portman",
					authorUrl: "#",
					published: "04/01/19",
					body: "Lorem ipsum dolor sit amet, lectus aenean nunc, ipsum varius ac proin elit maecenas sodales, eget quis, sit neque adipiscing donec, nullam vitae ante quam. Nulla nec fermentum, elit molestie vitae mauris. Rhoncus arcu congue integer pede, ultrices in sem suspendisse ut. Massa ante, congue sollicitudin purus, nonummy lacus..."
				},
				{
					content_id: 3,
					title: "Quick Bun Hairstyle For Short Hair",
					thumbNail: require("../images/thumbnails/quick-bun-short-hair.jpg"),
					tags: ["Hair", "Short Hair", "Tutorial"],
					comments: 12,
					likes: 21,
					author: "Julia Roberts",
					authorUrl: "#",
					published: "03/24/19",
					body: "Lorem ipsum dolor sit amet, lectus aenean nunc, ipsum varius ac proin elit maecenas sodales, eget quis, sit neque adipiscing donec, nullam vitae ante quam. Nulla nec fermentum, elit molestie vitae mauris. Rhoncus arcu congue integer pede, ultrices in sem suspendisse ut. Massa ante, congue sollicitudin purus, nonummy lacus..."
				},
				{
					content_id: 2,
					title: "Every Day Skin Care Routine",
					thumbNail: require("../images/thumbnails/skin-care-routine.jpg"),
					tags: ["Skin", "Skin Care"],
					comments: 14,
					likes: 29,
					author: "Angelina Jolie",
					authorUrl: "#",
					published: "03/22/19",
					body: "Lorem ipsum dolor sit amet, lectus aenean nunc, ipsum varius ac proin elit maecenas sodales, eget quis, sit neque adipiscing donec, nullam vitae ante quam. Nulla nec fermentum, elit molestie vitae mauris. Rhoncus arcu congue integer pede, ultrices in sem suspendisse ut. Massa ante, congue sollicitudin purus, nonummy lacus..."
				},
				{
					content_id: 1,
					title: "Natural Makeup Tutorial",
					thumbNail: require("../images/thumbnails/natural-makeup-tutorial.jpg"),
					tags: ["Makeup", "Natural Makeup", "Tutorial"],
					comments: 29,
					likes: 58,
					author: "Halle Berry",
					authorUrl: "#",
					published: "03/15/19",
					body: "Lorem ipsum dolor sit amet, lectus aenean nunc, ipsum varius ac proin elit maecenas sodales, eget quis, sit neque adipiscing donec, nullam vitae ante quam. Nulla nec fermentum, elit molestie vitae mauris. Rhoncus arcu congue integer pede, ultrices in sem suspendisse ut. Massa ante, congue sollicitudin purus, nonummy lacus..."
				}
			]
		};

		//onClick Method Binds
		this.handleModalToggle = this.handleModalToggle.bind(this);
		this.handleEscKeyModalExit = this.handleEscKeyModalExit.bind(this);
	}

	handleModalToggle() {
		this.setState((state) => ({
			isOpen: !state.isOpen
        }));
        
		if (this.state.isOpen) {
			document.body.style.overflowY = "auto";
		}
		else {
			document.body.style.overflowY = "hidden";
		}
	}

	handleEscKeyModalExit(event) {
		if (event.keyCode === 27) {
			this.setState({
				isOpen: false
			});
			document.body.style.overflowY = "auto";
		}
	}

	componentDidMount() {
		document.addEventListener("keydown", this.handleEscKeyModalExit, false);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleEscKeyModalExit, false);
	}
		
	render() {
		const {
			isOpen,
			contentList
		} = this.state;

		return (
			<Container fluid className="main-content-container px-4">
				{/* Page Header */}
				<Row noGutters className="page-header py-4">
					<PageTitle sm="4" title="View Content" subtitle="Content" className="text-sm-left" />
				</Row>
				
				{/* Tool Bar */}
				<Row>
					<Col lg="6" md="6" sm="12" className="mb-4">
						<Button onClick={this.handleModalToggle}>New Content</Button>
						<Modal size="lg" open={isOpen} toggle={false}>
							<span style={{position: "absolute", top: "18px", right: "24px", cursor: "pointer"}} onClick={this.handleModalToggle}>
								<i className="material-icons float-right" style={{ fontSize: "24px"}}>close</i>
							</span>
							<ModalHeader>
								Add New Content
							</ModalHeader>
							<ModalBody>
								<AddNewPost />
							</ModalBody>
							<ModalFooter>
							<ListGroupItem className="d-flex px-3 border-0">
								<Button outline theme="accent" size="m" className="mr-3">
									<i className="material-icons">save</i> Save Draft
								</Button>
								<Button theme="accent" size="m" className="ml-auto">
									<i className="material-icons">file_copy</i> Publish
								</Button>
							</ListGroupItem>
							</ModalFooter>
						</Modal>
					</Col>
					<Col lg="3" md="6" sm="12" className="mb-4">
						<Dropdown className="float-right" group>
							<Button>Filter By</Button>
							<DropdownToggle split />
							<DropdownMenu>
							<DropdownItem>Action</DropdownItem>
							<DropdownItem>Another action</DropdownItem>
							<DropdownItem>Something else here</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</Col>
					<Col lg="3" md="12" sm="12" className="mb-4">
							<input
								type="search"
								className="form-control"
								aria-controls="zero-configuration"
								placeholder="Search"
							/>
					</Col>
				</Row>

				{/* Contents Grid */}
				<Row>
					{contentList.map((content) => (
					<Col lg="3" md="6" sm="12" className="mb-4" key={content.content_id}>
						<Card small className="card-post h-100">
						<div
							className="card-post__image"
							style={{ backgroundImage: `url('${content.thumbNail}')` }}
						/>
						<CardBody>
							<h5 className="card-title">
							<a className="text-fiord-blue" href="#">
								{content.title}
							</a>
							</h5>
							{content.tags.map((tag, index) => (
								<Badge
									pill
									className="card-post__category bg-info"
									style={{marginRight: "5px", marginBottom: "10px"}}
									key={index}
								>
									{tag}
								</Badge>
							))}
							<p className="card-text">{content.body}</p>
						</CardBody>
						<CardFooter className="text-muted border-top py-3">
							<span className="d-inline-block">
							By&nbsp;
							<a className="text-fiord-blue" href={content.authorUrl}>
								{content.author}
							</a>{" "}
							published&nbsp;
							<span className="text-fiord-blue">
								{content.published}
							</span>
							</span>
						</CardFooter>
						</Card>
					</Col>
					))}
				</Row>
			</Container>
		);
	}
}

export default BlogPosts;
