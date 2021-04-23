import React from "react";

const Contact = () => {
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="name">name </label>
          <input
            type="name"
            name="name"
            className="form-control"
            id="name"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">phone </label>
          <input
            type="phone"
            name="phone"
            className="form-control"
            id="phone"
            placeholder="Enter phone"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="text">text</label>
          <input
            type="text"
            name="text"
            className="form-control"
            id="text"
            placeholder="text"
          />
        </div>

        <button
          name="signup"
          id="signup"
          value="register"
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Contact;
