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

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    user_id: 1,
                    firstName: "Taylor",
                    lastName: "Swift",
                    email: "TSwift@gmail.com",
                    gender: "Female",
                    race: "Caucasian",
                    hairType: "Curly",
                    skinType: "Dry",
                    comments: "13",
                    likes: "22",
                    joined: "03/01/19"
                },
                {
                    user_id: 2,
                    firstName: "Kim",
                    lastName: "Kardashian",
                    email: "KKardashian@gmail.com",
                    gender: "Female",
                    race: "Caucasian",
                    hairType: "Wavy",
                    skinType: "Oily",
                    comments: "9",
                    likes: "20",
                    joined: "03/14/19"
                },
                {
                    user_id: 3,
                    firstName: "Megan",
                    lastName: "Fox",
                    email: "MFox@gmail.com",
                    gender: "Female",
                    race: "Caucasian",
                    hairType: "Straight",
                    skinType: "Oily",
                    comments: "8",
                    likes: "17",
                    joined: "03/15/19"
                },
                {
                    user_id: 4,
                    firstName: "Beyonce",
                    lastName: "Knowles",
                    email: "BKnowles@gmail.com",
                    gender: "Female",
                    race: "African American",
                    hairType: "Curly",
                    skinType: "Combination",
                    comments: "5",
                    likes: "11",
                    joined: "03/21/19"
                },
                {
                    user_id: 5,
                    firstName: "Mila",
                    lastName: "Kunis",
                    email: "MKunis@gmail.com",
                    gender: "Female",
                    race: "Caucasian",
                    hairType: "Straight",
                    skinType: "Dry",
                    comments: "3",
                    likes: "5",
                    joined: "03/29/19"
                }
            ]
        }
    }

    render() {
        const { users } = this.state;

        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title="Users Data Table" subtitle="Users" className="text-sm-left" />
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
                        <CardBody className="p-0 pb-3" style={{overflowX: "auto"}}>
                            <table className="table table-hover mb-0">
                                <thead className="bg-light">
                                    <tr>
                                        <th style={{cursor: "pointer"}}>User <i className="material-icons">arrow_upward</i></th>
                                        {/* <i class="material-icons">arrow_downward</i> */}
                                        <th style={{cursor: "pointer"}}>Email</th>
                                        <th style={{cursor: "pointer"}}>Gender</th>
                                        <th style={{cursor: "pointer"}}>Race</th>
                                        <th style={{cursor: "pointer"}}>Hair Type</th>
                                        <th style={{cursor: "pointer"}}>Skin Type</th>
                                        <th style={{cursor: "pointer"}}>Comments</th>
                                        <th style={{cursor: "pointer"}}>Likes</th>
                                        <th style={{cursor: "pointer"}}>Joined</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user.user_id}>
                                            <td>{user.firstName} {user.lastName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.gender}</td>
                                            <td>{user.race}</td>
                                            <td>{user.hairType}</td>
                                            <td>{user.skinType}</td>
                                            <td>{user.comments}</td>
                                            <td>{user.likes}</td>
                                            <td>{user.joined}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </CardBody>
                    </Card>
                    <div className="d-flex justify-content-between">
                        <div className="my-auto">Showing 1 to 5 of 5 entries</div>
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
export default Users;
