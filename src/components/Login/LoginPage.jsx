import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import './login.css'
import Register from "./Register";
import Login from "./Login";


const LoginPage = () => {

    const [login, setLogin] = useState(false)


    return(<Container >
            <Row className="d-flex align-items-center" style={{minHeight:'100vh',paddingTop:'100px'}}>
                <Col sm={12} md={8} lg={4} className="m-auto">
                <div className="mt-5">
                   
                    {/* register */}
                    <div style={{display:!login? "block":"none"}}>
                        <Register setLogin={setLogin}/>
                    </div>

                    {/* login */}
                    <div style={{display:login? "block":"none"}}>
                            <Login setLogin={setLogin}/>
                    </div>
                    
                    </div>
                </Col>
            </Row>
    </Container>)
}
export default LoginPage 