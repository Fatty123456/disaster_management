import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from "axios";
import "./signup.css"


function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    contact_no: "",
    address: "",
    user_type: "General User", // Default user_type value
    
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form
   // const validationErrors = Validation(values);
    //if (Object.keys(validationErrors).length > 0) {
//setErrors(validationErrors);
    //  return;
   // }
   // setErrors({});

    // Update the server URL to port 3002
    axios
      .post("http://localhost:3002/signup", { values })
      .then((res) => console.log("Registered Successfully"))
      .catch((err) => console.log(err));
  };

  return (
    <div class= "m1">
      <div class= "m2">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          {/* Existing fields */}
          <div class="margin bottom">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={handleInput}
              class="form-control"
            />
            <span>
              {errors.name && (
                <span class="text-danger">{errors.name}</span>
              )}
            </span>
          </div>
          <div class="margin bottom">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleInput}
              class="form-control"
            />
            <span>
              {errors.email && (
                <span class="text-danger">{errors.email}</span>
              )}
            </span>
          </div>
          <div class="margin bottom">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleInput}
              class="form-control"
            />
            <span>
              {errors.password && (
                <span class="text-danger">{errors.password}</span>
              )}
            </span>
          </div>
          {/* Additional fields */}
          <div class="margin bottom">
            <label htmlFor="address">
              <strong>Address</strong>
            </label>
            <input
             type="text"
             placeholder="Enter your address"
             name="address"
             onChange={handleInput}
             class="form-control"
            />
              <span>
              {errors.address && (
                <span class="text-danger">{errors.address}</span>
              )}
            </span>
          </div>
          <div class="margin bottom">
            <label htmlFor="contact_info">
              <strong>Contact Info</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Contact Info"
              name="contact_info"
              onChange={handleInput}
              class="form-control"
            />
            <span>
              {errors.contact_info && (
                <span class="text-danger">{errors.contact_info}</span>
              )}
            </span>
          </div>
          <div class="margin bottom">
            <label htmlFor="user_type">
              <strong>User Type</strong>
            </label>
            <select
              name="user_type"
              onChange={handleInput}
              class="form-control"
            >
              <option value="General User">General User</option>
              <option value="Rehabilitation Institute">
                Rehabilitation Institute
              </option>
            </select>
            <span>
              {errors.user_type && (
                <span class="text-danger">{errors.user_type}</span>
              )}
            </span>
          </div>

          <button type="submit" class=" btn-success">
            <strong>Signup</strong>
          </button>
          <div class="mt-3">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
