import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const [stateData, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users").then(
      res => res.json()
    ).then(
      data => {
        setData(data);
      }
    ).catch(
      (err) => console.log(err)
    )
  }, [])

  return (
    <>
    <div className="App">
      <div>
        {/* { (typeof data.users === 'undefined' ) ? (
          <p>loading...</p>
        ) : (
          data.users.map((u) => <p key={u.id}>{u.name}</p>)
        ) } */}
        { stateData.users && stateData.users.map((u) => <p key={u.id}>{u.name}</p>) }
      </div>
    </div>
    </>
  );
}

export default App;
