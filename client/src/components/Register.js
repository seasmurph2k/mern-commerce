import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../actions/userAuthActions";
import { withRouter } from "react-router-dom";
import TextInput from "./common/TextInput";

const styles = {
  formStyle: {
    height: "40%",
    display: "flex",
    backgroundColor: "#343434",
    flexDirection: "column",
    borderRadius: ".375em",
    padding: ".5em",
    marginTop: "-5em",
    fontWeight: "bold",
    color: "#fff"
  },
  loginButton: {
    backgroundColor: "#61dafb",
    border: "1px solid #61dafb",
    borderRadius: ".3em",
    width: "50%",
    padding: ".2em",
    fontWeight: "bold",
    alignSelf: "center"
  }
};

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      password2: "",
      email: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    const {
      target: { name, value }
    } = e;
    this.setState({ [name]: value });
  }
  onSubmit(e) {
    e.preventDefault();
    const { username, password, password2, email } = this.state;
    const userData = {
      username,
      password,
      password2,
      email
    };
    this.props.registerUser(userData, this.props.history);
  }
  render() {
    const { errors } = this.state;
    return (
      <form style={styles.formStyle} onSubmit={this.onSubmit}>
        <TextInput
          name="username"
          type="text"
          placeholder="username"
          label="Username"
          onChange={this.onChange}
          value={this.state.username}
          error={errors.username}
          required={true}
          disable={false}
        />{" "}
        <TextInput
          name="email"
          placeholder="email"
          label="Email"
          onChange={this.onChange}
          value={this.state.email}
          error={errors.email}
          required={true}
          disable={false}
          type="email"
        />{" "}
        <TextInput
          name="password"
          placeholder="password"
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          error={errors.password}
          required={true}
          disable={false}
          type="password"
        />{" "}
        <TextInput
          name="password2"
          placeholder="confirm password"
          label="Confirm Password"
          onChange={this.onChange}
          value={this.state.password2}
          error={errors.password2}
          required={true}
          disable={false}
          type="password"
        />
        <button type="submit" style={styles.loginButton}>
          Login
        </button>
      </form>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
const mapDispatchToProps = {
  registerUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Register));
