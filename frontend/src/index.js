import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Component from './components/component';

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
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
      <Component.NameForm />
      <Component.EssayForm />
      <Component.FlavorForm />
      <Component.Reservation />
      <Component.Calculator />
      <Component.SignUpDialog />
      <Component.FilterableProductTable products={PRODUCTS} />
      {/* <MembersTable /> */}
    </React.StrictMode>
  );
}

setInterval(tick, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
