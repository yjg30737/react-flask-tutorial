import React from 'react';
import { Static, Dynamic } from './components/component';

function App() {
  // server side information section
  // ...
  // const [stateData, setData] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/users").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data);
  //     }
  //   ).catch(
  //     (err) => console.log(err)
  //   )
  // }, [])
  
  // static (client-side only)
  return (
    <div className="App">
      <Static />
      <Dynamic />
      {/* loading
      { (typeof data.users === 'undefined' ) ? (
        <p>loading...</p>
      ) : (
        data.users.map((u) => <p key={u.id}>{u.name}</p>)
      ) } */}
      {/* not loading
      { stateData.users && stateData.users.map((u) => <p key={u.id}>{u.name}</p>) } */}
    </div>
  );
}

export default App;
