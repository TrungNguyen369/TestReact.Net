import axios from "axios";
import React, { Fragment, useState } from "react";

function Registration() {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");

  const handleNameChange = (value) => {
    setName(value);
  };

  const handlePhoneNoChange = (value) => {
    setPhoneNo(value);
  };

  const handleAddressChange = (value) => {
    setAddress(value);
  };

  const handleSave = () => {
    const data = {
      Name: name,
      PhoneNo: phoneNo,
      Address: address,
      IsActives: 1,
    };
    const url = "https://localhost:44361/api/test/Registrantion";
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
      <div>Registration</div>
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
      <label>Address</label>
      <input
        type="text"
        id="txtAddress"
        placeholder="Enter Address"
        onChange={(e) => handleAddressChange(e.target.value)}
      />{" "}
      <br />
      <button onClick={() => handleSave()}>Save</button>
    </Fragment>
  );
}

export default Registration;
