import React, { useEffect, useState } from 'react';
import TableFilter from 'react-table-filter';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");


  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then(res => res.json()).then(data => setUsers(data.results));
  }, [])
  console.log(users);

  const change = (event) => {
    setSelectedCountry(event.target.value);
  }

  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <h1 className="title">
            Employee Database
        </h1>
          <p className="subtitle">
            Sort Employees <strong>by country</strong>!
        </p>
          <div className="field">
            <div className="control has-icons-left">
              <div className="select">
                <select id="countryList" onChange={change} value={selectedCountry}>
                  <option selected>Country</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option>Finland</option>
                  <option>Turkey</option>
                  <option>Australia</option>
                  <option>Brazil</option>
                </select>
              </div>
              <div className="icon is-small is-left">
                <i className="fas fa-globe"></i>
              </div>
            </div>
          </div>

          <table>            <tbody>

              <TableFilter
                rows={users}
                onFilterUpdate={filterUpdated}>
              <th> Employee Name</th>
                <th filterkey="location.country" className="cell" key="location" showsearch={'true'}>
                  Location</th>
                <th>
                  Phone Number</th>
              </TableFilter>
              {users.map(user => {
                return (
                  <tr key={user.login.uuid}>
                    <td>{user.name.first} {user.name.last}</td>
                    <td>{user.location.country}</td>
                    <td>{user.phone}</td>
                  </tr>

                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </React.Fragment >
  )
}

export default App;
