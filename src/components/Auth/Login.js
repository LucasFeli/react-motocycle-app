import React from "react"
import {AuthContext} from "../../context/AuthContext"
import {Redirect} from "react-router-dom"
import "./Form.css"

 const Login = () => {
    const auth = React.useContext(AuthContext)
    const [state, setState] = React.useState({email: "", password: ""})
    const [redirect, setRedirect] = React.useState(false);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
      };
      const handleSubmit = async (event) => {
        event.preventDefault();
        await auth.handleLogin(state) 
        setRedirect(true);
      };
      if (redirect) {
        return <Redirect to="/" />;
      }
    return (
      <section className="fondo">
    <div className="form-container">
     <h1>Log in</h1> 
        <form
        onSubmit={handleSubmit}
        >
       <div className ="control">
      <label htmlFor="email"><h3>Email</h3></label>
      <input
        type="text"
        name="email"
        id="email"
        value={state.email}
        onChange={handleChange}
      />
      </div>
       <div className ="control">
      <label htmlFor="password"><h3>Password</h3></label>
      <input
        type="password"
        name="password"
        id="password"
        value={state.password}
        onChange={handleChange}
      /></div>
      <div className ="control">
      <input type="submit" value ="log in" />
      </div>
    </form>
    </div>
    </section>
    )
}

export default Login