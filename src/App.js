import React, { useState } from 'react';
import './App.css';
import getData from '../src/axios.js';


function App() {

  getData();

  const [userList, setUserList] = useState([
    { 
      name: 'James',
      date: '02/12/2012'
    },
    { 
      name: 'Bolu',
      date: '01/12/2020'
    }
  ])
  return (
    <div className="App">
      <button> 
        Get users
      </button>

      <div>
        <ul>
          { 
            userList.map((item, index) => {
              return ( 
                <div>
                  <h3>{item.name}</h3>
              <p>joined {item.date}</p>
                </div>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
