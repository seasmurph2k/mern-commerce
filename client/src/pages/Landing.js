import React, { Component } from "react";
import colors from "../utills/colors";

const styles = {
  landingContainer: {
    color: colors.fontColor,
    width: "90%"
  },
  row: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    padding: "1em"
  },
  rowChild: {
    width: "40%"
  },
  box: {
    width: "20%"
  }
};
class Landing extends Component {
  render() {
    return (
      <div style={styles.landingContainer}>
        <div style={styles.row}>
          <div style={styles.rowChild}>
            <img
              src="https://via.placeholder.com/500
             "
            />
          </div>
          <div style={styles.rowChild}>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.rowChild}>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div style={styles.rowChild}>
            <img
              src="https://via.placeholder.com/500
             "
            />
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.box}>
            <img
              src="https://via.placeholder.com/150
             "
            />
          </div>
          <div style={styles.box}>
            <img
              src="https://via.placeholder.com/150
             "
            />
          </div>
          <div style={styles.box}>
            <img
              src="https://via.placeholder.com/150
             "
            />
          </div>
          <div style={styles.box}>
            <img
              src="https://via.placeholder.com/150
             "
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
