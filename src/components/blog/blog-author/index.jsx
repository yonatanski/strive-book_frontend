import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./styles.css";
export default class BlogAuthor extends Component {
  render() {
    const { name, email, _id } = this.props;

    return (
      <Row>
        <Col xs={2}>
          {/* <Image className="blog-author" src={avatar} roundedCircle /> */}
        </Col>
        <Col>
          <p className='h6'>Authors Detail</p>
          <p>{name} <br/><small>{email}</small></p>
        </Col>
        <Col>
        <a href={`${process.env.REACT_APP_BE_URL}/blogs/${_id}/pdf`}>
        </a>
        </Col>
      </Row>
    );
  }
}
