import React from "react";
import { AuthContext } from "../../context/AuthContext";

import "./Form.css";



const Signup = () => {
  const auth = React.useContext(AuthContext);
  const [state, setState] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
   
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (event) => {
    
      event.preventDefault();
    
      await auth.handleSignup(state);
   
  
  };

  return (
    <section className="fondo">
      <div className="form-container">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div className="control">
            <label htmlFor="name">
              <h3>Usuario</h3>
              
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={state.username}
              onChange={handleChange}
            />
          </div>
          <div className="control">
            <label htmlFor="email">
              <h3>Email</h3>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={state.email}
              onChange={handleChange}
            />
          </div>
          <div className="control">
            <label htmlFor="password">
              <h3>Contraseña</h3>
              
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={state.password}
              onChange={handleChange}
            />
            <small> Minimo (6 Caracteres: 1 letra mayuscula, 1 numero)</small>
          </div>
          <div className="control">
            <input type="submit" value="Sign up" />
          </div>
       
        </form>
      </div>
    </section>
  );
};

export default Signup;
