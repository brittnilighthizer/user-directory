import React, { useEffect, useState } from 'react';
import TableFilter from 'react-table-filter';
import './App.css';
import { render } from '@testing-library/react';

function RenderFilteredUsers({ filteredUsers }) {
  return (
    filteredUsers.map(user => {
      return (
        <tr key={user.login.uuid}>
          <td>{user.name.first} {user.name.last}</td>
          <td>{user.location.country}</td>
          <td>{user.phone}</td>
        </tr>
      )
    })
  )
}

function RenderAllUsers({ AllUsers }) {
  return (
    AllUsers.map(user => {
      return (
        <tr key={user.login.uuid}>
          <td>{user.name.first} {user.name.last}</td>
          <td>{user.location.country}</td>
          <td>{user.phone}</td>
        </tr>
      )
    })
  )
}

function App() {
  const [users, setUsers] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [ifFiltered, setIfFiltered] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then(res => res.json()).then(data => setUsers(data.results));
  }, [])
  console.log(users);

  const change = (event) => {
    var useersSelectedCountry = users.filter(user => event.target.value === user.location.country);
    setSelectedCountry(useersSelectedCountry);
    setIfFiltered(true);
  }

  if (ifFiltered) {
    return (
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
                  <option>Country</option>
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
          <table>
            <tbody>
              <th>Employee Name</th>
              <th>Location</th>
              <th>Phone Number</th>
              <RenderFilteredUsers filteredUsers={selectedCountry} />
            </tbody >
          </table >
        </div>
      </section>
    )
  } else {
    return (
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
                  <option>Country</option>
                  <option value="Australia">Australia</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Finland">Finland</option>
                  <option value="Iceland">Iceland</option>
                  <option value="Greece">Greece</option>
                  <option value="Hungary">Hungary</option>
                  <option value="France">France</option>
                  <option value="Norway">Norway</option>




                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Finland">Finland</option>
                  <option value="Turkey">Turkey</option>
                </select>
              </div>
              <div className="icon is-small is-left">
                <i className="fas fa-globe"></i>
              </div>
            </div>
          </div>
          <table>
            <tbody>
              <th>Employee Name</th>
              <th>Location</th>
              <th>Phone Number</th>
              <RenderAllUsers AllUsers={users} />
            </tbody >
          </table >
        </div>
      </section>
    )
  }
}

export default App;
