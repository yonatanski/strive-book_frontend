import React, { Component } from "react";
import { Container } from "react-bootstrap";


export default class Error404 extends Component {
  
  render() {
    return (
      <Container fluid="sm">
          <div className='w-100 h-100 bg-warning' style={{position:'fixed',top:0,left:0}}>
        <h1 className="blog-main-title text-white" style={{position:'fixed',top:'40vh',left:'35vw'}}>Error 404 page not found</h1>

          </div>
      </Container>
    );
  }
}
