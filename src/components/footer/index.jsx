import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      
        <Container className='text-center'>{`${new Date().getFullYear()} - © Strive School | Developed for homework projects.`}</Container>
      
    );
  }
}
