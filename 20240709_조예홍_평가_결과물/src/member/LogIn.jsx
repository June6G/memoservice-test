import React from "react";
import { useState } from "react";
import { getMyMemObj, setLogedinSessionID } from "../utils/utils";


const Login = () => {

  const [uId, setUId] = useState('');
  const [uPassword, setUPassword] = useState('');

  const handleID = (event) => {
    setUId(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    let uIdObj = getMyMemObj(uId);
        if (uIdObj !== undefined && uIdObj.uPassword === uPassword) {
          alert('LOG IN SUCCESSFUL YAYY!!');

          props.homeViewer(true);
          props.registerViewer(false);
          props.logInViewer(false);
          props.memoViewer(false);
          props.memoListViewer(false);

          props.changeMenuBar(true);

          setLogedinSessionID(uId);

        } else {
          
          alert('LOG IN FAIL!!');

          props.homeViewer(false);
          props.registerViewer(false);
          props.logInViewer(true);
          props.memoViewer(false);
          props.memoListViewer(false);

          setUId('');
          setUPassword('');

          setLogedinSessionID();
        }
  }

    return (
      <div>
        <h1>Login</h1>
        <br />
        <input type="text" placeholder="User ID" value={uId} onChange={handleID} />
        <br />
        <input type="text" placeholder="Password" value={uPassword} onChange={handlePassword} />
        <br />
        <button value="Login" onClick={handleSubmit}>Login</button>

      </div>
  
    );
};

export default Login;