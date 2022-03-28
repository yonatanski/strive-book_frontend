import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OathLogin from "./OathLogin";

function Register({ setLogin }) {
    
  const navigate = useNavigate();
  const [formErr, setFormErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)  

  const [author, setAuthor] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    rePassword: "",
    avatar: "",
  });

useEffect(() => {
   if(Object.keys(formErr).length === 0 && isSubmit ){
    createAuthor()
   }
}) 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthor({ ...author, [name]: value });
  };

  
  const handleSubmit = (e) => {
    setFormErr(validateForm(author))
    setIsSubmit(true)
    // createAuthor();
    };
    
    const validateForm = (values) =>{
        const errors = {}
        const regex =  /\S+@\S+\.\S+/  // /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
        errors.name = !values.name?  "name is required" : ""
        errors.surname = !values.surname?  "surname is required" : ""
        errors.email = !values.email?  "email is required" : (!regex.test(values.email))? "Email is not valid":""
        errors.password = values.password?  (values.password.lenth < 6? "password must be greater than 6 character" : "")  :   "password is required"
        errors.rePassword = !values.rePassword?   "repassword is required" : author.rePassword !==author.password? "Password and rePassword needs to be same" : ""
        console.log(errors)
        return errors
    }

  const createAuthor = async () => {
    const url = "http://localhost:3001";

    const response = await fetch(`${url}/authors/register`, {
      method: "POST",
      body: JSON.stringify(author),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const { token, _id } = await response.json();
      if (token) {
        localStorage.setItem("token", token);
        setAuthor({
          name: "",
          email: "",
        });
        // window.location.href = `http://localhost:3000/home/${data._id}`;

        navigate(`/home`);
      }
    }
  };
  return (<div className="text-dark">
      {/* <pre>{JSON.stringify(author, undefined, 2)}</pre> */}
      {/* <pre>{JSON.stringify(formErr, undefined, 2)}</pre> */}
     
    <form
      onSubmit={
        handleSubmit
      }
      className="needs-validation d-flex flex-column mt-5 text-left"
      novalidate
    >
      <p className="h3">Enter detail to Register</p>

      <label htmlFor="name"> Name *</label>
      <input
        required
        type="text"
        id="name"
        name="name"
        value={author.name}
        onChange={(e) => handleChange(e)}
      />
       <span>{formErr.name && formErr.name}</span>

      <label htmlFor="surname"> Last Name *</label>
      <input
        required
        type="text"
        id="surname"
        name="surname"
        value={author.surname}
        onChange={(e) => handleChange(e)}
      />
       <span>{formErr.surname && formErr.surname}</span>


      <label htmlFor="email">Email *</label>
      <input
        required
        type="email"
        id="email"
        name="email"
        value={author.email}
        onChange={(e) => handleChange(e)}
      />
       <span>{formErr.email && formErr.email}</span>


      <label htmlFor="password">Password *</label>
      <input
        required
        type="password"
        id="password"
        name="password"
        value={author.password}
        onChange={(e) => handleChange(e)}
      />
       <span>{formErr.password}</span>


      <label htmlFor="rePassword">Re Password *</label>
      <input
        required
        type="password"
        id="rePassword"
        name="rePassword"
        value={author.rePassword}
        onChange={(e) => handleChange(e)}
      />
       <span>{formErr.rePassword}</span>


      <label htmlFor="avatar">Avatar</label>
      <input
        type="text"
        id="avatar"
        name="avatar"
        value={author.avatar}
        onChange={(e) => handleChange(e)}
      />

      <div className="mt-4 text-center">
        <button type="button" onClick={handleSubmit} className=" btn btn-outline-primary">
          Register
        </button>
        <p className="mt-2">
          Already a member{" "}
          <span className="text-primary pointer" onClick={() => setLogin(true)}>
            sign in
          </span>
        </p>
        <OathLogin />
      </div>
    </form>
    </div>);
}

export default Register;
