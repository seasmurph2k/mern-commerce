import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/userAuthActions";
import TextInput from "./common/TextInput";

const styles = {
  formStyle: {
    height: "20%",
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

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
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
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
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
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.loginUser(userData);
  }
  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <form style={styles.formStyle} onSubmit={this.onSubmit}>
          <TextInput
            name="username"
            placeholder="username"
            label="Username"
            onChange={this.onChange}
            value={this.state.username}
            error={errors.username}
            required={true}
            disable={false}
            type="text"
          />
          <TextInput
            name="password"
            placeholder="password"
            label="Password"
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            required={true}
            disabled={false}
            type="text"
          />
          <button type="submit" style={styles.loginButton}>
            Login
          </button>
        </form>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
