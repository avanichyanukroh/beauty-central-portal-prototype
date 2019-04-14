import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput, Row, Col, ListGroupItem, InputGroup, InputGroupAddon, Button } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Editor = () => (
  <Card small className="mb-3">
    <CardBody>
        <Form className="add-new-post">
            <Row>
                <Col lg="12" sm="12">
                    <FormInput size="m" className="mb-3" placeholder="Your Content Title" />
                </Col>
            </Row>
            <Row>
                <Col lg="6" sm="12">
                    <FormInput size="m" className="mb-3" placeholder="Author" />
                </Col>
                <Col lg="6" sm="12">
                    <InputGroup className="mb-3">
                        <FormInput placeholder="Tags" />
                        <InputGroupAddon type="append">
                            <Button theme="white" className="px-2" onClick={() => {return}}>
                                <i className="material-icons">add</i>
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col lg="6" sm="12">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="customFile" />
                        <label className="custom-file-label" htmlFor="customFile">Add Media</label>
                    </div>
                </Col>
                <Col lg="6" sm="12">
                <InputGroup className="mb-3">
                    <div className="pt-2 pr-1" style={{width: "100%"}}>
                        <span className="float-left">
                            <i className="material-icons mr-1">flag</i>
                            <strong className="mr-1">Status:</strong> <span className="text-warning">Draft</span>
                        </span>
                        <span className="float-right">
                            <i className="material-icons mr-1">visibility</i>
                            <strong className="mr-1">Visibility:</strong>{" "}
                            <strong className="text-success">Private</strong>{" "}
                        </span>
                    </div>
                </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col lg="12" md="12">
                    <ReactQuill className="add-new-post__editor mb-1" />
                </Col>
                
            </Row>
        </Form>
    </CardBody>
  </Card>
);

export default Editor;
