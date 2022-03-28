import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {  useLocation, useNavigate } from "react-router-dom";
import BlogList from "../../components/blog/blog-list";
import {useQueryParameter} from "../../hooks/useQueryParameter";
import "./styles.css";

const Home = () => {

const token = useQueryParameter({defaultValue:null,key:'token'}) || localStorage.getItem("token")

const [authorized,setAuthorized] = useState(false)

const navigate = useNavigate()
const location = useLocation()
 
useEffect(() => {
  console.log(location.pathname)
  if(token){
    localStorage.setItem("token",token);
    setTimeout(()=>setAuthorized(true),200)
  }
  else{
    
    setTimeout(()=>{
     if(!localStorage.getItem("token")){
      navigate("/")
     }
    },1000)
  }

},[token])
    return (
      <Container fluid="sm">
        <h1 className="blog-main-title">Welcome to the Strive Blog!</h1>
        {authorized&& <BlogList />}
      </Container>
    );
  
}

export default Home