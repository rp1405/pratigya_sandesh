import { useState } from "react";
export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = () => {
    if (
      username == process.env.REACT_APP_USERNAME &&
      password == process.env.REACT_APP_PASSWORD
    ) {
      props.setLoggedIn(1);
    } else {
      setPassword("");
      setUsername("");
      alert("Incorrect Username or Password");
    }
  };
  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            style={styles.input}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={styles.input}
            autoComplete="on"
          />
        </div>
        <button type="button" onClick={handleLogin} style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  input: {
    padding: "5px",
    margin: "5px",
    width: "200px",
    borderRadius: "3px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    margin: "10px",
    backgroundColor: "black",
    color: "#fff",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
};
