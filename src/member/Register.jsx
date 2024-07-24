import React, { useId, useState } from "react";
import { getMemoServiceUserDB, setMemoServiceUserDB } from "../db/DB";



const Register = () => {

    const [uId, setUId] = useState('');
    const [uEmail, setUEmail] = useState('');
    const [uPhone, setUPhone] = useState('');
    const [uPassword, setUPassword] = useState('');

    //handler ID
    const handleID = (event) => {
        setUId(event.target.value)
    }

    //handler email
    const handleEmail = (event) => {
        setUEmail(event.target.value)
    }

    //handler phone
    const handlePhone = (event) => {
        setUPhone(event.target.value)
    }

    //handler password
    const handlePassword = (event) => {
        setUPassword(event.target.value)
    }
 

    // handler submit
    const handleSubmit = (event) => {
        //add userDB
        let userDBInStorage = getServiceUserDB;
        if (userDBInStorage === null){
            console.log("userDBInstorge is null")
                let newUser={
                            'uId': uId,
                            'uPw': uPassword,
                            'uMail': uEmail,
                            'uPhone': uPhone,
                }
        
            setMemoServiceUserDB(newUser);
            console.log("new user added to userDBInStorage")
        }
         else {
            let userDBJsObj = JSON.parse(userDBInStorage);
            userDBJsObj[uId] = {
                'uId': uId,
                'uPassword': uPassword,
                'uEmail': uEmail,
                'uPhone': uPhone,
            }
            setMemoServiceUserDB(userDBJsObj);
        }

        //add memoDB
        let memoDBInStorage = getMemoServiceMemoDB();
        if (memoDBInStorage === null) {
            let newMemoObj = {
                [uId]: {},
            }
            setMemoServiceMemoDB(newMemoObj);

        } else {
            let memoDBJsObj = JSON.parse(memoDBInStorage);
            memoDBJsObj[uId] = {};

            setMemoServiceMemoDB(memoDBJsObj);

        }

        alert('REGISTER SUCCESSFULLY YaY!!');

        props.homeViewer(false);
        props.RegisterViewer(false);
        props.LogInViewer(true);
        props.memoViewer(false);
        props.memoListViewer(false);
    }

  return (
    <div id="register">
       <h1>Register</h1>
       <br />
       <input type="text" className="txt_field" onChange={handleID} placeholder="Please enter your ID" /> 
       <br />
       <input type="email" className="txt_field" onChange={handleEmail} placeholder="Please enter your Email" /> 
       <br />
       <input type="phone" className="txt_field" onChange={handlePhone} placeholder="Please enter your Phone Number" />
       <br />
       <input type="password" className="txt_field" onChange={handlePassword} placeholder="Please enter your Password" /> 
       <br />
       <button type="submit" className="basiic_btn" onClick={handleSubmit}>Register</button>
    </div>

  );
};

export default Register;