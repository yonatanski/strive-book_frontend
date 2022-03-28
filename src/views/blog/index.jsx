import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import BlogAuthor from "../../components/blog/blog-author";
import BlogLike from "../../components/likes/BlogLike";
import "./styles.css";
import EditBlog from "./EditBlog";
import AddReviews from "./AddReviews";
import Loader from "../../Loader";


const Blog = (props) => {
const [blog, setBlog]  = useState({}) 
const [reviews, setReviews]  = useState([]) 
const [likes, setLikes]  = useState([]) 
const [loading,setLoading] = useState(true)
const [showReviews, setShowReviews] = useState()
const [showEditPage, setShowEditPage] = useState()
const params = useParams()

  useEffect(async()=>{
    const id =  params.id

      await fetchBlog(id)
    
  },[])

  const fetchBlog = async(id) => {
    let url =  "http://localhost:3001"//process.env.REACT_APP_BE_URL
      try {
        let response = await fetch(`${url}/blogs/${id}`, {
          method:'GET',
          headers: {
            authorization :  localStorage.getItem("token")
          }
        })
        if(response.ok){
          let data = await response.json()
          setBlog(data)
          setReviews(data.reviews)
          setLikes(data.likes)
          console.log(data)
          setLoading(false)
        }else{
          setLoading(false)
        }
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    
  }



  const handleDelete = async(id) => {
    
    let url =  "http://localhost:3001"//process.env.REACT_APP_BE_URL
      try {
        let response = await fetch(`${url}/blogs/${id}`, {
          method:'DELETE',
          headers: {
            authorization :  localStorage.getItem("token")
          }
        })
        if(response.ok){
          let data = await response.json()
          console.log(data)
          setLoading(false)

        }else{
          setLoading(false)
        }
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    
  }



      return (
        <div className="blog-details-root">
          <Container>
          {loading? <Loader/> : blog && (<div>
            <img className="blog-details-cover w-100" src={blog.cover} fluid  alt="blog pic"/>
            <h1 className="blog-details-title">{blog.title}</h1>

            <div className="blog-details-container">
              <div className="blog-details-author">
                <BlogAuthor {...blog} {...blog.author} />
              </div>
              <div className="blog-details-info">
                {/* <div>{blog.createdAt}</div>
                <div>{blog.readTime.value} {blog.readTime.unit} read</div> */}
                <div style={{marginTop:20}}>
                  <BlogLike likes={likes} defaultLikes={["1"]} onChange={console.log}/>
                </div>
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            <button className="btn btn-secondary mt-4 mx-3 " onClick={(e) => {setShowEditPage(true)}} >Edit Post</button>
            <button className="btn btn-danger mt-4 " onClick={(e) => {handleDelete(blog._id); setShowReviews(!showReviews)}} >Delete Post</button>
            <div style={{display:showEditPage? "block":"none"}}>
              <EditBlog blog={blog}/>
            </div>
            </div>)}

            <Row className="d-flex justify-content-between mt-3" style={{display:showReviews? "block":"none", minHeight:"350px"}}>
            <Col xs={12} sm={12} md={6} lg={8} style={{ minHeight:"350px",overflow:"scroll"}} className="d-flex flex-column p-5 bg-secondary h-100">
                      <h3>There are {reviews.length} reviews</h3>
                {blog && reviews.map(review =><div>
                    <p className=" p-3  bg-dark text-white"><span className="h4 p-2 bg-secondary">{review.rate} stars</span> Review - {review.comment}</p>
                </div>)}
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <AddReviews/>
            </Col>
            </Row>
          </Container>
        </div>
      )
      
}

export default Blog;
