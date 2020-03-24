import React, { useEffect, useState } from 'react';
// import TableFilter from 'react-table-filter';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  // const [updatedData, setUpdatedData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then(res => res.json()).then(data => setUsers(data.results));
  }, [])
  console.log(users);

  // const filterUpdated = ((newData, filterConfiguration) => {
  //     setUpdatedData(newData)
  // });

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
          <table>
            <tr>
              {/* <TableFilter
                rows={users}
                onFilterUpdate={this._filterUpdated}> */}
                {/* <th filterkey="name"> */}
                 <th> Employee Name
  </th>
                {/* <th filterkey="location"> */}
                <th>
                  Location
  </th>
                <th>
                  Phone Number
  </th>
              {/* </TableFilter> */}
            </tr>
            <tbody>
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
