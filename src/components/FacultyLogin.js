import React, { useState } from 'react';
import './FacultyLogin.css'; // Make sure to import your CSS file

function FacultyLogin() {
  // State variables to hold form data and validation errors
  const [formData, setFormData] = useState({ uname: '', psw: '' });
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form data
    const validationErrors = {};
    if (!formData.uname.trim()) {
      validationErrors.uname = 'Username is required';
    }
    if (!formData.psw.trim()) {
      validationErrors.psw = 'Password is required';
    } else if (formData.psw.trim().length < 6) {
      validationErrors.psw = 'Password must be at least 6 characters long';
    }
    setErrors(validationErrors);
    
    // If no errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      // Here you can make an API call or handle form submission as needed
      console.log('Form submitted:', formData);
    }
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div className="header">
        <img src="https://media.licdn.com/dms/image/C560BAQFKt8O5GdaFjw/company-logo_100_100/0/1680080095222/vnr_vignanajyothiinstituteofengineeringandtechnology_logo?e=2147483647&v=beta&t=UhtoGoVMhtwHbanvVkMuh_q3AV9otg8YVS8EuXIG1ok" alt="VNR Logo" />
        <h1> VALLURUPALLI NAGESWARARAO VIGNANA JYOTHI INSTITUTE OF TECHNOLOGY</h1>
        {/* <hr className="divider" /> Border line */}
      </div>
      <div className="navbar">
        {/* Your navigation bar goes here */}
      </div>
      <div className="main">
        <h3>Faculty Login</h3>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="uname"><b>Username</b></label>
            <input 
              type="text" 
              placeholder="Enter Username" 
              id="uname" 
              name="uname" 
              value={formData.uname}
              onChange={handleInputChange}
              required 
            />
            {errors.uname && <p className="error">{errors.uname}</p>}
            <label htmlFor="psw"><b>Password</b></label>
            <input 
              type="password" 
              placeholder="Enter Password" 
              id="psw" 
              name="psw" 
              value={formData.psw}
              onChange={handleInputChange}
              required 
            />
            {errors.psw && <p className="error">{errors.psw}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FacultyLogin;
