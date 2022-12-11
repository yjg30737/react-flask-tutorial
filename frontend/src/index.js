import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// https://reactjs.org/docs/conditional-rendering.html
function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

// https://reactjs.org/docs/conditional-rendering.html
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

// https://reactjs.org/docs/conditional-rendering.html
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// https://reactjs.org/docs/conditional-rendering.html
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

// https://reactjs.org/docs/conditional-rendering.html
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// https://reactjs.org/docs/conditional-rendering.html
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}

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

class LoggingButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick () {
    console.log('this is:', this);
  };
  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
function tick() {
  root.render(
    <React.StrictMode>
      <App />
      <LoginControl />
      <Clock />
      <Form />
      <Toggle />
      <LoggingButton />
      {/* <MembersTable /> */}
    </React.StrictMode>
  );
}

setInterval(tick, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
