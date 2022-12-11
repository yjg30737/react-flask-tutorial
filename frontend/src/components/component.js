import React from "react";

export class Title extends React.Component {
    render() {
        return <h1>{this.props.username}'s {this.props.sitename}</h1>
    }
}

// https://reactjs.org/docs/conditional-rendering.html
export function UserGreeting(props) {
    return <h1>Welcome back!</h1>
}
  
// https://reactjs.org/docs/conditional-rendering.html
export function GuestGreeting(props) {
    return <h1>Please sign up.</h1>
}
  
  // https://reactjs.org/docs/conditional-rendering.html
export function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
  
  // https://reactjs.org/docs/conditional-rendering.html
export function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
        Login
        </button>
    );
}
  
  // https://reactjs.org/docs/conditional-rendering.html
export function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
        Logout
        </button>
    );
}
  
  // https://reactjs.org/docs/conditional-rendering.html
export class LoginControl extends React.Component {
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
        return (
            <div>
                {isLoggedIn
                    ? <LogoutButton onClick={this.handleLogoutClick} />
                    : <LoginButton onClick={this.handleLoginClick} />
                }
            </div>
        );
    }
}
  
// https://reactjs.org/docs/components-and-props.html
// https://reactjs.org/docs/state-and-lifecycle.html
export class Clock extends React.Component {
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
export function Form() {
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
export class Toggle extends React.Component {
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

export class LoggingButton extends React.Component {
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

// https://reactjs.org/docs/conditional-rendering.html
export function MailBox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>About mail</h1>
            { unreadMessages.length > 0 &&
                <h2>
                    You have { unreadMessages.length } unread messages.
                </h2> 
            }
        </div>
    );
}

// https://reactjs.org/docs/conditional-rendering.html
function WarningBanner(props) {
    if(!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

export class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}