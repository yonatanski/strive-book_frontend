import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Loader from "../../../Loader";
import BlogItem from "../blog-item";
// import posts from "../../../data/posts.json";
export default class BlogList extends Component {
  state = {
    posts:[],
    isLoading : true
  }

  
  componentDidMount = async() => {
    await this.fetchData()
  }
  
  fetchData = async() => {
   
    let url =  "http://localhost:3001"//process.env.REACT_APP_BE_URL
   try {
    let response = await fetch(`${url}/blogs`, {
      method:'GET',
      headers: {
        authorization :  localStorage.getItem("token")
      }
    })
    if(response.ok){
      let data = await response.json()
      this.setState({posts:data.blogs})
      this.setState({isLoading:false})
      console.log(data)
    }else{
      console.log("error on fetching data")
      this.setState({isLoading:false})
    }
  } 
  catch (error) {
    console.log(error)
    this.setState({isLoading:false})
   }
  }
  render() {
    return (
      <Row>
        {this.state.isLoading? <Loader/> : this.state.posts && this.state.posts.reverse().map((post,i) => (
          <Col md={4} key={i} style={{ marginBottom: 50 }}>
            <BlogItem  {...post} />
          </Col>
        ))}
      </Row>
    );
  }
}
