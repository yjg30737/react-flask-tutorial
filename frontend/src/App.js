import React from 'react';
import { useState, useEffect } from 'react';

import { sum, Title } from './components/title';

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
      <Title username="YJG30737" sitename="React & Flask Tutorial👌" />
      <p>{ sum(3, 4) }</p>
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
