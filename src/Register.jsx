import React, { useState } from "react";



const Register = () => {

    const [userid, setID] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //handler ID
    const handleID = (event) => {
        setID(event.target.value)
    }

    //handler email
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    //handler phone
    const handlePhone = (event) => {
        setPhone(event.target.value)
    }

    //handler password
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
 

    // handler submit
    const handleSubmit = (event) => {
    }

    




  return (
    <div id="register">
       <h1>Register</h1>
       <input type="text" className="txt_field" onChange={handleID} placeholder="Please enter your ID" /> 
       <br />
       <input type="email" className="txt_field" onChange={handleEmail}placeholder="Please enter your Email" /> 
       <br />
       <input type="phone" className="txt_field" placeholder="Please enter your Phone Number" />
       <input type="password" className="txt_field" onChange={handlePassword} placeholder="Please enter your Password" /> 
       <br />
       <button type="submit" className="basiic_btn">Register</button>
    </div>

  );
};

export default Register;