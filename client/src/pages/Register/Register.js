import { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../utils/mutations";

import Auth from "../../utils/auth.js";

function Register() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [register, { error, data }] = useMutation(REGISTER_USER);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await register({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.register.token);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="register-container">
      <h1>Register Page</h1>
      <form className="register-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formState.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formState.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formState.password}
            onChange={handleInputChange}
          />
        </div>
        {error && <div className="error-message">{error.message}</div>}
        <button className="login-btn" type="submit">
          Register User
        </button>
      </form>
    </div>
  );
}

export default Register;
