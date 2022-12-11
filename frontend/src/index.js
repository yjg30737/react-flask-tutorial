import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// https://reactjs.org/docs/components-and-props.html
// https://reactjs.org/docs/state-and-lifecycle.html
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

// https://reactjs.org/docs/state-and-lifecycle.html
// class MembersTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = [{
//       id: '',
//       name: ''
//     }]
//   }

//   componentDidMount() {
//     fetch("http://localhost:5000/users").then(
//       res => {
//         this.setState({ id: res.id, name: res.name });
//       }
//     );
//   }

//   componentWillUnmount() {

//   }

//   render() {
//     return (
//       <div>
//         { this.state && this.state.map((item) => {<p key={item.id}>{item.name}</p>}) }
//       </div>
//     )
//   }
// }

// https://reactjs.org/docs/state-and-lifecycle.html
// just a function
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

// https://reactjs.org/docs/handling-events.html
// according to reactjs official site: 
// a common pattern is for an event handler to be a method on the class 
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    console.log(this.state);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        { this.state.isToggleOn ? 'ON' : 'OFF' }
      </button>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
function tick() {
  root.render(
    <React.StrictMode>
      <App />
      <Clock />
      <Form />
      <Toggle />
      {/* <MembersTable /> */}
    </React.StrictMode>
  );
}

setInterval(tick, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
