import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

class Signup extends React.Component {
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

    this.setState({
      input,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.signup()) {
      console.log(this.state);

      let input = {};
      input["username"] = "";
      input["email"] = "";
      input["password"] = "";
      input["confirm_password"] = "";
      //this.setState({ input: input });
      window.location.href = "./Login";
      // alert("Form is submitted");
    }
  }

  signup() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["username"]) {
      isValid = false;
      errors["username"] = "Enter username.";
    }

    if (typeof input["username"] !== "undefined") {
      const re = /^\S*$/;
      if (input["username"].length < 6 || !re.test(input["username"])) {
        isValid = false;
        errors["username"] = " Enter valid username.";
      }
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Enter email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = " Enter valid email address.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = " Enter password.";
    }

    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = " Enter confirm password.";
    }

    if (typeof input["password"] !== "undefined") {
      if (input["password"].length < 6) {
        isValid = false;
        errors["password"] = "Please add at least 6 charachter.";
      }
    }

    if (
      typeof input["password"] !== "undefined" &&
      typeof input["confirm_password"] !== "undefined"
    ) {
      if (input["password"] != input["confirm_password"]) {
        isValid = false;
        errors["password"] = "Passwords don't match.";
      }
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
          <div className="signup">
            <h1>Signup</h1>
            <input
              type="text"
              name="username"
              value={this.state.input.username}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter username"
              id="username"
            />

            <div className="text-danger">{this.state.errors.username}</div>

            <input
              type="email"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter email"
              id="email"
            />

            <div className="text-danger">{this.state.errors.email}</div>

            <input
              type="password"
              name="password"
              value={this.state.input.password}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter password"
              id="password"
            />

            <div className="text-danger">{this.state.errors.password}</div>

            <input
              type="password"
              name="confirm_password"
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter confirm password"
              id="confirm_password"
            />

            <div className="text-danger">
              {this.state.errors.confirm_password}
            </div>

            <input type="submit" value="Signup" className="btn btn-primary" />
            <div>
              Already have an account ?here
              <Link to="/Login">Login</Link>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default Signup;
