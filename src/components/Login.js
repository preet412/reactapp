import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.Login()) {
      console.log(this.state);

      let input = {};

      input["email"] = "";
      input["password"] = "";
      this.setState({ input: input });

      // alert("Demo Form is submitted");
    }
  }

  Login() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    } else if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    } else if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    } else if (typeof input["password"] !== "undefined") {
      if (input["password"].length < 8) {
        isValid = false;
        errors["password"] = "Please add at least 8 charachter.";
      }
    } else {
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="login">
            <h1>Login</h1>
            <input
              type="email"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control"
              placeholder="Enter email"
              id="email"
            />

            <div className="text-danger">{this.state.errors.email}</div>

            <input
              type="password"
              name="password"
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control"
              placeholder="Enter password"
              id="password"
            />

            <div className="text-danger">{this.state.errors.password}</div>

            <input type="submit" value="Login" class="btn btn-primary btn-sm" />

            <div>
              If you are not exist?
              <Link to="/Signup">create an account</Link>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default Login;
