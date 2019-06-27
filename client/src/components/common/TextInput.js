import React from "react";

const styles = {
  inputContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "20em",
    margin: ".5em .2em"
  },
  error: {
    color: "red",
    textAlign: "center"
  }
};
const TextInput = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange,
  disabled,
  label,
  required,
  type
}) => {
  return (
    <React.Fragment>
      <div style={styles.inputContainer}>
        <label htmlFor={name}>{label}:</label>
        <input
          style={styles.input}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
        />
      </div>
      {info && <small style={styles.error}>{info}</small>}
      {error && <div style={styles.error}>{error}</div>}
    </React.Fragment>
  );
};

TextInput.propTypes = {};

export default TextInput;
