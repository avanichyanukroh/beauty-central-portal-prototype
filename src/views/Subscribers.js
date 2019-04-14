import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class Subscribers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subscribers: [
                {
                    user_id: 1,
                    firstName: "Taylor",
                    lastName: "Swift",
                    email: "TSwift@gmail.com",
                    lastProductChoice: "A",
                    start: "03/01/19",
                    end: "None",
                    active: true,
                    cancellationReason: "None"
                },
                {
                    user_id: 2,
                    firstName: "Kim",
                    lastName: "Kardashian",
                    email: "KKardashian@gmail.com",
                    lastProductChoice: "B",
                    start: "03/14/19",
                    end: "None",
                    active: true,
                    cancellationReason: "None"
                },
                {
                    user_id: 3,
                    firstName: "Megan",
                    lastName: "Fox",
                    email: "MFox@gmail.com",
                    lastProductChoice: "C",
                    start: "03/15/19",
                    end: "None",
                    active: true,
                    cancellationReason: "None"
                }
            ]
        }
    }

    render() {
        const { subscribers } = this.state;

        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Subscribers Data Table" subtitle="Subscribers" className="text-sm-left" />
                </Row>

        		{/* Tool Bar */}
                <Row>
					<Col lg="3" md="6" sm="12" className="mb-4">

					</Col>
					<Col lg="3" md="6" sm="12" className="mb-4">

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

                {/* Data Table */}
                <Row>
                <Col>
                    <Card small className="mb-4">
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Active Users</h6>
                        </CardHeader>
                        <CardBody className="p-0 pb-3">
                            <table className="table table-hover mb-0">
                            <thead className="bg-light">
                                <tr>
                                    <th style={{cursor: "pointer"}}>User <i className="material-icons">arrow_upward</i></th>
                                    {/* <i class="material-icons">arrow_downward</i> */}
                                    <th style={{cursor: "pointer"}}>Email</th>
                                    <th style={{cursor: "pointer"}}>Last Product Choice</th>
                                    <th style={{cursor: "pointer"}}>Start</th>
                                    <th style={{cursor: "pointer"}}>End</th>
                                    <th style={{cursor: "pointer"}}>Active</th>
                                    <th style={{cursor: "pointer"}}>Cancellation Reason</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subscribers.map(subscriber => (
                                    <tr key={subscriber.user_id}>
                                        <td>{subscriber.firstName} {subscriber.lastName}</td>
                                        <td>{subscriber.email}</td>
                                        <td>{subscriber.lastProductChoice}</td>
                                        <td>{subscriber.start}</td>
                                        <td>{subscriber.end}</td>
                                        <td>{subscriber.active ? "Yes" : "No"}</td>
                                        <td>{subscriber.cancellationReason}</td>
                                    </tr>
                                ))}
                            </tbody>
                            </table>
                        </CardBody>
                    </Card>
                    <div className="d-flex justify-content-between">
                        <div className="my-auto">Showing 1 to 3 of 3 entries</div>
                        <nav className="float-right" aria-label="Page navigation">
                            <ul className="pagination my-auto">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </Col>
                </Row>
            </Container>
            );
    }
}
export default Subscribers;
