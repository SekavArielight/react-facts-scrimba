import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <h1 className="header">Fun Facts About React</h1>
        <ul>
          <li>Was first release in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 200K stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>

      <footer>
        <small>© 20xx Sekav development. All rights reserved.</small>
      </footer>
    </>
  );
};

export default App;
