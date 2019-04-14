/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
	Container,
	Row,
	Col,
    Card,
    CardHeader,
	CardBody,
    CardFooter,
    Badge,
    Button,
    Dropdown,
    DropdownMenu,
    DropdownItem,
	ListGroupItem,
	Modal,
	ModalBody,
	ModalHeader,
	ModalFooter
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class Products extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
            isOpenModal: false,
            isOpenDropDown: false,
            products: [
                {
                    productId: 1,
                    title: 'Box A',
                    description: 'Lorem ipsum dolor sit amet, lectus aenean nunc, ipsum varius ac proin elit maecenas sodales, eget quis, sit neque adipiscing donec, nullam vitae ante quam. Nulla nec fermentum...',
                    status: 'active'
                },
                {
                    productId: 2,
                    title: 'Box B',
                    description: 'Lorem ipsum dolor sit amet, lectus aenean nunc, ipsum varius ac proin elit maecenas sodales, eget quis, sit neque adipiscing donec, nullam vitae ante quam. Nulla nec fermentum...',
                    status: 'active'
                },
                {
                    productId: 3,
                    title: 'Box C',
                    description: 'Lorem ipsum dolor sit amet, lectus aenean nunc, ipsum varius ac proin elit maecenas sodales, eget quis, sit neque adipiscing donec, nullam vitae ante quam. Nulla nec fermentum...',
                    status: 'pending'
                },
                {
                    productId: 4,
                    title: 'Box D',
                    description: 'Lorem ipsum dolor sit amet, lectus aenean nunc, ipsum varius ac proin elit maecenas sodales, eget quis, sit neque adipiscing donec, nullam vitae ante quam. Nulla nec fermentum...',
                    status: 'archived'
                }
            ]
		};

		//onClick Method Binds
        this.handleModalToggle = this.handleModalToggle.bind(this);
        this.handleDropDownToggle = this.handleDropDownToggle.bind(this);
        this.handleEscKeyModalExit = this.handleEscKeyModalExit.bind(this);
	}

	handleModalToggle() {
		this.setState((state) => ({
			isOpenModal: !state.isOpenModal
        }));
        
        if (this.state.isOpenModal) {
			document.body.style.overflowY = "auto";
		}
		else {
			document.body.style.overflowY = "hidden";
		}
	}

    handleDropDownToggle() {
		this.setState((state) => ({
			isOpenDropDown: !state.isOpenDropDown
		}));
    }
    
	handleEscKeyModalExit(event) {
		if(event.keyCode === 27) {
			this.setState({
				isOpenModal: false
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
            isOpenModal,
            isOpenDropDown,
            products
		} = this.state;

		return (
			<Container fluid className="main-content-container px-4">
				{/* Page Header */}
				<Row noGutters className="page-header py-4">
					<PageTitle sm="4" title="Manage Products" subtitle="Products" className="text-sm-left" />
				</Row>
				
				{/* Tool Bar */}
				<Row noGutters>
					<Col lg="3" md="6" sm="12" className="mb-4">
						<Button onClick={this.handleModalToggle}>New Product</Button>
						<Modal size="lg" open={isOpenModal} toggle={false}>
                            <span style={{position: "absolute", top: "18px", right: "24px", cursor: "pointer"}} onClick={this.handleModalToggle}>
                                <i className="material-icons float-right" style={{ fontSize: "24px"}}>close</i>
                            </span>
							<ModalHeader>Add New Product</ModalHeader>
							<ModalBody>

							</ModalBody>
							<ModalFooter>
							<ListGroupItem className="d-flex px-3 border-0">
								<Button outline theme="accent" size="m" className="mr-3">
									<i className="material-icons">save</i> Save Draft
								</Button>
								<Button theme="accent" size="m" className="ml-auto">
									<i className="material-icons">file_copy</i> Create
								</Button>
							</ListGroupItem>
							</ModalFooter>
						</Modal>
					</Col>
					<Col lg="3" md="6" sm="12" className="mb-4">

					</Col>
					<Col lg="3" md="6" sm="12" className="mb-4">

					</Col>
					<Col lg="3" md="6" sm="12" className="mb-4">
						<input
							type="search"
							className="form-control"
							aria-controls="zero-configuration"
							placeholder="Search"
						/>
					</Col>
				</Row>

                {/* Products Grid */}
                <Row>
                    <Col lg="4" sm="12">
                        <Row>
                            <Col lg="12" sm="12" className="mb-3">
                                <Card>
                                    <CardHeader className="text-center" style={{border: "2px solid #17C671"}}>Active</CardHeader>
                                </Card>
                            </Col>
                            {
                                products.map(product => {
                                    if (product.status === 'active') {
                                        return (
                                            <Col lg="12" sm="12" className="mb-3">
                                                <Card>
                                                    <CardHeader>
                                                    {product.title}
                                                        <Dropdown className="float-right" open={isOpenDropDown} toggle={this.handleDropDownToggle} group>
                                                            <div onClick={this.handleDropDownToggle} style={{cursor: "pointer"}}>
                                                                <i className="material-icons" style={{transform: "scale(2.0)"}}>arrow_drop_down</i>
                                                            </div>                                
                                                            <DropdownMenu right>
                                                            <DropdownItem>Action</DropdownItem>
                                                            <DropdownItem>Another action</DropdownItem>
                                                            <DropdownItem>Something else here</DropdownItem>
                                                            </DropdownMenu>
                                                        </Dropdown>
                                                    </CardHeader>
                                                    <CardBody>{product.description}</CardBody>
                                                    <CardFooter>
                                                        <div className="d-flex justify-content-between">
                                                            <Badge>status</Badge>
                                                            <Badge theme="success">status</Badge>
                                                            <Badge theme="info">status</Badge>
                                                            <Badge theme="warning">status</Badge>
                                                            <Badge theme="danger">status</Badge>
                                                        </div>
                                                    </CardFooter>
                                                </Card>
                                            </Col>
                                        );
                                    }
                                })
                            }
                        </Row>
                    </Col>
                    <Col lg="4" sm="12">
                        <Row>
                            <Col lg="12" sm="12" className="mb-3">
                                <Card>
                                    <CardHeader className="text-center" style={{border: "2px solid #FFB400"}}>Pending</CardHeader>
                                </Card>
                            </Col>
                            {
                                products.map(product => {
                                    if (product.status === 'pending') {
                                        return (
                                            <Col lg="12" sm="12" className="mb-3">
                                                <Card>
                                                    <CardHeader>
                                                        {product.title}
                                                            <Dropdown className="float-right" open={isOpenDropDown} toggle={this.handleDropDownToggle} group>
                                                                <div onClick={this.handleDropDownToggle} style={{cursor: "pointer"}}>
                                                                    <i className="material-icons" style={{transform: "scale(2.0)"}}>arrow_drop_down</i>
                                                                </div>                                
                                                                <DropdownMenu right>
                                                                <DropdownItem>Action</DropdownItem>
                                                                <DropdownItem>Another action</DropdownItem>
                                                                <DropdownItem>Something else here</DropdownItem>
                                                                </DropdownMenu>
                                                            </Dropdown>
                                                        </CardHeader>
                                                    <CardBody>{product.description}</CardBody>
                                                    <CardFooter>
                                                        <div className="d-flex justify-content-between">
                                                            <Badge>status</Badge>
                                                            <Badge theme="success">status</Badge>
                                                            <Badge theme="info">status</Badge>
                                                            <Badge theme="warning">status</Badge>
                                                            <Badge theme="danger">status</Badge>
                                                        </div>
                                                    </CardFooter>
                                                </Card>
                                            </Col>
                                        );
                                    }
                                })
                            }
                        </Row>
                    </Col>
                    <Col lg="4" sm="12">
                        <Row>
                            <Col lg="12" sm="12" className="mb-3">
                                <Card>
                                    <CardHeader className="text-center" style={{border: "2px solid #5A6169"}}>Archived</CardHeader>
                                </Card>
                            </Col>
                            {
                                products.map(product => {
                                    if (product.status === 'archived') {
                                        return (
                                            <Col lg="12" sm="12" className="mb-3">
                                                <Card>
                                                    <CardHeader>
                                                        {product.title}
                                                            <Dropdown className="float-right" open={isOpenDropDown} toggle={this.handleDropDownToggle} group>
                                                                <div onClick={this.handleDropDownToggle} style={{cursor: "pointer"}}>
                                                                    <i className="material-icons" style={{transform: "scale(2.0)"}}>arrow_drop_down</i>
                                                                </div>                                
                                                                <DropdownMenu right>
                                                                <DropdownItem>Action</DropdownItem>
                                                                <DropdownItem>Another action</DropdownItem>
                                                                <DropdownItem>Something else here</DropdownItem>
                                                                </DropdownMenu>
                                                            </Dropdown>
                                                        </CardHeader>
                                                    <CardBody>{product.description}</CardBody>
                                                    <CardFooter>
                                                        <div className="d-flex justify-content-between">
                                                            <Badge>status</Badge>
                                                            <Badge theme="success">status</Badge>
                                                            <Badge theme="info">status</Badge>
                                                            <Badge theme="warning">status</Badge>
                                                            <Badge theme="danger">status</Badge>
                                                        </div>
                                                    </CardFooter>
                                                </Card>
                                            </Col>
                                        );
                                    }
                                })
                            }
                        </Row>
                    </Col>
                </Row>
			</Container>
		);
	}
}

export default Products;
