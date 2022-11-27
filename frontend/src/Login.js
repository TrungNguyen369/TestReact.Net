import axios from "axios";
import React, { Fragment, useState } from "react";

function Login() {

    const [name, setName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");

    const handleNameChange = (value) => {
        setName(value);
      };
    
      const handlePhoneNoChange = (value) => {
        setPhoneNo(value);
      };

      const handleLogin = () => {
        console.log("asd")
        const data = {
          Name: name,
          PhoneNo: phoneNo,
        };
        const url = "https://localhost:44361/api/test/Login";
        axios
          .post(url, data)
          .then((response) => {
            alert(response.data);
          })
          .catch((error) => {
            alert(error);
          });
      };
  return (
    <Fragment>
      <div>Login</div>
      <label>Name</label>
      <input
        type="text"
        id="txtName"
        placeholder="Enter Name"
        onChange={(e) => handleNameChange(e.target.value)}
      />{" "}
      <br />
      <label>Phone No</label>
      <input
        type="text"
        id="txtPhoneNo"
        placeholder="Enter Phone No"
        onChange={(e) => handlePhoneNoChange(e.target.value)}
      />{" "}
      <br />
      <button onClick={() => handleLogin()}>Login</button>
    </Fragment>
  );
}

export default Login;
