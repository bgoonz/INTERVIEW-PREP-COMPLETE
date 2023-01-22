import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) =>setUsers(json));
  }, []);
  return (
    <div className="App">
      <h1>Users</h1>
      <div className="card">
        {users.map((user) => (
            <div>
                    <div className="card-inner">
                    <p>{user.name }</p>
          <p>{user.userName}</p>
        </div>
            </div>
        ))}

      </div>
    </div>
  );
}

export default App;
