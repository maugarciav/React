import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

/*
  useContext lets you read and subscribe to context from your component.
  In other words helps you manage your states.
*/

export const AppContext = createContext(null);

function ContextTutorial() {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login /> <User />
    </AppContext.Provider>
  );
}

export default ContextTutorial;