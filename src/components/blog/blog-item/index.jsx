import React, { Component } from "react";
import { Card } from "react-bootstrap";
import BlogAuthor from "../blog-author";
import { Link } from "react-router-dom";
import "./styles.css";
export default class BlogItem extends Component {
  render() {
    const { title, cover, authors, _id } = this.props;
    return (
      <Card className="blog-card">
          <Link to={`/blog/${_id}`} className="blog-link">
          <Card.Img variant="top" src={cover} className="blog-cover" />
        </Link>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
          <Card.Footer>{
            authors && authors.map((author,i) => 
              <BlogAuthor key={i} {...author} _id={_id} />
              )
            }
          </Card.Footer>
        </Card>
    );
  }
}
