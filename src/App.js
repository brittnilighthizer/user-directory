import React, { useEffect } from 'react';
import employeeTable from "./components/User-table";
import './App.css';

function App() {
  const (users, setUsers) = usestate([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then(res => res.json()).then(data => setUsers(data))
      .then(({ results }) => {
        setUsers(results)
      });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <employeeTable />

        {users.map(user => {
          return (
            <div>
              <h4>{user.name.first} {user.name.last}</h4>
              Phone: <h5>{user.phone}</h5>
            </div>

          )

        })}

      </header>
    </div>
  );
}

export default App;
