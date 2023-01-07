import React from 'react';
import { Header } from './components/header';
import { Main } from './components/body';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.css';


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
      <Header username="YJG30737" sitename="React & Flask Tutorial"/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
