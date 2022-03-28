import React from "react";
// import NavBar from "./components/navbar";
// import Footer from "./components/footer";
import Home from "./views/home";
import Blog from "./views/blog";
import NewBlogPost from "./views/new";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./Error404";
import LoginPage from "./components/Login/LoginPage";
import MyLayout from "./MyLayout";

function App() {
  
  
  
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
    <Routes>
      <Route path="/" exact element={<MyLayout><LoginPage/></MyLayout>} />
      <Route path="/home" exact element={
      <MyLayout><Home/></MyLayout>} />
      <Route path="/blog/:id" exact element={<MyLayout><Blog/></MyLayout>} />
      <Route path="/new" exact element={<MyLayout><NewBlogPost/></MyLayout>} />
      <Route path="*"  component={Error404} />
    </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
