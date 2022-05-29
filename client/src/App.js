import react, { useState } from "react";
import "./app.css";
import { posts } from "./data";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";

function App() {

  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  return (
    <div className="container">
      { user ? (
        <>
          <Navbar />
          { posts.map((item) => (
            <Card key={item.id} post={item} />
          )) }
        </>
      ) : (
        <div className="login">
          <h2>An App</h2>
          <input 
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setUser(username)}>Login</button>
        </div>
      ) }
    </div>
  );
}

export default App;
