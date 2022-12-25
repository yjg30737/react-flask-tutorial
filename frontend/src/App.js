import React from 'react';
import { useState, useEffect } from 'react';
import * as Component from './components/component';

function App() {
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
    <>
      <div className="App">
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
        {/* <Component.MembersTable /> */}
        <Component.BlurExample />
        {/* loading
        { (typeof data.users === 'undefined' ) ? (
          <p>loading...</p>
        ) : (
          data.users.map((u) => <p key={u.id}>{u.name}</p>)
        ) } */}
        {/* not loading
        { stateData.users && stateData.users.map((u) => <p key={u.id}>{u.name}</p>) } */}
      </div>
    </>
  );
}

export default App;
