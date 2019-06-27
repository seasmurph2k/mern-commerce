import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../actions/userAuthActions";
import colors from "../utills/colors";

const styles = {
  header: {
    width: "100vw",
    height: "8vh",
    backgroundColor: colors.backgroundColor,
    color: colors.fontColor,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 5%",
    borderBottom: "1px solid #000"
  },
  nav: {
    minWidth: "20%",
    maxWidth: "65%",
    display: "flex",
    justifyContent: "space-evenly"
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%"
  },
  navLink: {
    textDecoration: "none"
  },
  logBox: {
    minWidth: "12%",
    maxWidth: "35%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
};

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <header style={styles.header}>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li>LOGO OR TEXT IMG</li>
            <li>
              <Link to="/">HOME</Link>
            </li>
          </ul>
        </nav>
        {!isAuthenticated ? (
          <div style={styles.logBox}>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        ) : (
          <div style={styles.logBox}>
            <Link
              style={styles.navLink}
              to="/"
              onClick={this.onLogoutClick.bind(this)}
            >
              Logout
            </Link>
            <Link style={styles.navLink} to="/dashboard">
              Dashboard
            </Link>
          </div>
        )}
      </header>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
const mapDispatchToProps = {
  logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
