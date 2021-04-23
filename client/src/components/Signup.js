import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    // console.log("data.status: " + data.status);
    // console.log("data: " + JSON.stringify(data));
    // console.log(data.status === "422");

    if (data.status === "422" || !data) {
      window.alert("invalid resgistration");
      console.log("invalid resgistration");
    } else {
      window.alert("success resgistration");
      console.log("success resgistration");

      history.push("/login");
    }
  };

  return (
    <>
      <form method="POST">
        <div className="form-group">
          <label htmlFor="name">name</label>
          <input
            type="text"
            autoComplete="off"
            name="name"
            className="form-control"
            id="name"
            value={user.name}
            onChange={handleInputs}
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            autoComplete="off"
            name="email"
            className="form-control"
            id="email"
            value={user.email}
            onChange={handleInputs}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">phone</label>
          <input
            type="text"
            autoComplete="off"
            name="phone"
            className="form-control"
            id="phone"
            value={user.phone}
            onChange={handleInputs}
            placeholder="Enter phone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="work">work</label>
          <input
            type="text"
            autoComplete="off"
            name="work"
            className="form-control"
            id="work"
            value={user.work}
            onChange={handleInputs}
            placeholder="Enter work"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="off"
            name="password"
            className="form-control"
            id="password"
            value={user.password}
            onChange={handleInputs}
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">cPassword</label>
          <input
            type="password"
            autoComplete="off"
            name="cpassword"
            className="form-control"
            id="cpassword"
            value={user.cpassword}
            onChange={handleInputs}
            placeholder="cPassword"
          />
        </div>
        <button
          name="signup"
          id="signup"
          value="register"
          type="submit"
          autoComplete="off"
          className="btn btn-primary"
          onClick={postData}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Signup;
