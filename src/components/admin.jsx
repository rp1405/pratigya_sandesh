import React, { useState } from "react";
import Login from "./login";
import Datapusher from "./datapusher";
const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(0);
  return loggedIn ? <Datapusher /> : <Login setLoggedIn={setLoggedIn} />;
};
export default Admin;
