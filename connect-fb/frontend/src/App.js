import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import './App.css';




function App() {

  //states
  const [form, setForm] = useState({})
  const [data, setData] = useState([])

  // store form data
  const handleForm = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  // post method and handlesumbit
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch('http://localhost:8080/post', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    let data = await response.json();
    console.log(data)
    
  }



  // read database
  const getData = async () => {
    const result = await fetch('http://localhost:8080/get', {
      method: 'GET'
    })
    const response = await result.json();
    setData(response)
  }



  return (
    <div className="App">
      {/* This is form section  */}
      <form onSubmit={handleSubmit}>
        <span>username</span>
        <input type="text" name='username' onChange={handleForm} />
        <span>password</span>
        <input type="text" name='password' onChange={handleForm} />
        <input className='submit-btn' type="submit" value='Submit/Create' />
      </form>



      {/* This is Table Section (read-section) */}
      <Button className='read-btn' onClick={getData}>Read Data</Button>
      <div className="table-container">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, i) =>
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
                </tr>
              )
            }
          </tbody>

        </Table>
      </div>

    </div>
  );
}

export default App;
