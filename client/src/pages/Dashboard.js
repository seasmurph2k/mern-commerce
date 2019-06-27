import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { user } = this.props.auth;
    let dashboardContent;
    if (user === null) {
      dashboardContent = "No user";
    } else {
      //check if logged in user has profile data
      if (Object.keys(user).length > 0) {
        dashboardContent = (
          <div>
            You can progmatically build the dashboard by looping through user
          </div>
        );
      } else {
        //user is logged in but has no profile
        dashboardContent = <div>nothing to see here</div>;
      }
    }
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
