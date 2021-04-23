import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (data.status === "400" || !data) {
      window.alert("invalid credential");
      console.log("invalid credential");
    } else {
      window.alert("success credential");
      console.log("success credential");
      history.push("/");
    }
  };

  return (
    <>
      <form method="POST">
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <button
          name="signup"
          id="signup"
          value="register"
          type="submit"
          className="btn btn-primary"
          onClick={loginUser}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
