import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Component from './components/component';

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
function tick() {
  root.render(
    <React.StrictMode>
      <App />
      <Component.Title username="YJG30737" sitename="React & Flask Tutorial👌" />
      <Component.LoginControl />
      <Component.Clock />
      <Component.Form />
      <Component.Toggle />
      <Component.LoggingButton />
      <Component.MailBox unreadMessages={['React', 'Re: React', 'Re:Re: React']} />
      <Component.Page />
      <Component.NumberList numbers={[1,2,3,4,5]} />
      <Component.Blog posts={posts}/>
      {/* <MembersTable /> */}
    </React.StrictMode>
  );
}

setInterval(tick, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
