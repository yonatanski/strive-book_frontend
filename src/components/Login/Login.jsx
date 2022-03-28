import { Alert } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OathLogin from "./OathLogin";



function Login({setLogin}) {

    const navigate = useNavigate()
    const [loginErr, setLoginErr] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)  

    const [userLogin, setUserLogin] = useState({
        email:'',
        password:''
    })

    useEffect(() => {
        if(Object.keys(loginErr).length === 0 && isSubmit){
            console.log("I am going to submit")
        }
    }, [loginErr])

    const handleChange = (e) => {
        const {name, value} = e.target
        setUserLogin({...userLogin, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoginErr(validateForm(userLogin))
        setIsSubmit(true)
        // loginFunc()
    }

    const validateForm = (userLogin) => {
        const regex = /\S+@\S+\.\S+/
        const errors = {} 
        errors.email = !userLogin.email? "email is missing" : (!regex.test(userLogin.email))? "Email is not valid":""
        errors.password = !userLogin.password && "password is missing"
        return errors
    }
    
    const loginFunc = async(e) => {
            const url = "http://localhost:3001"
            
            const response = await fetch(`${url}/authors/login`,{
                method:"POST",
                body:JSON.stringify(userLogin),
                headers:{
                    "Content-Type" : "application/json",
                }
            })
            if(response.ok){
                const {token} = await response.json()
                if(token){
                    console.log(token)
                    localStorage.setItem("token",token);
                    setUserLogin({
                        password:'',
                        email:''
                    })
                    navigate(`/home`)
                }
            }
    }

    return (
    <form  onSubmit={handleSubmit} className="needs-validation d-flex flex-column mt-5 text-left" novalidate>
        {/* <pre>{JSON.stringify(loginErr, undefined, 2)}</pre> */}
            
            <Alert variant='danger' style={{display:Object.keys(loginErr).length!==0? 'block':'none'}}>
                 {loginErr.email}
                <br/>
                {loginErr.password}    
            </Alert>
       
       
        <p className='h3'>Enter detail to Login</p>

        <label htmlFor="email">Email</label>
        <input   type="email" id="email" name="email" value={userLogin.email} onChange={(e) => handleChange(e)}/>
        <span></span>
        
        <label htmlFor="password"> Password</label>
        <input   type="password" id="password" name="password" value={userLogin.password} onChange={(e) => handleChange(e)}/>
        <span></span>
        <div className='mt-4 text-center'>

        <button type='submit' className='btn btn-outline-primary'>Sign in</button>
        <p className="mt-2">Not a member <span className = "text-primary pointer" onClick={() => setLogin(false)}> Sign Up</span></p>
            {/* register through google and facebook  */}
            <OathLogin/>
        </div>
    </form>
        
      );
}

export default Login;