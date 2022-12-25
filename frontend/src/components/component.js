import React from "react";
import * as StaticComponent from './static/component';
import * as DynamicComponent from './dynamic/component';

export function Static() {
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

    return (
        <div id="static">
            <StaticComponent.Title username="YJG30737" sitename="React & Flask Tutorial👌" />
            <StaticComponent.LoginControl />
            <StaticComponent.Clock />
            <StaticComponent.Form />
            <StaticComponent.Toggle />
            <StaticComponent.LoggingButton />
            <StaticComponent.MailBox unreadMessages={['React', 'Re: React', 'Re:Re: React']} />
            <StaticComponent.Page />
            <StaticComponent.NumberList numbers={[1,2,3,4,5]} />
            <StaticComponent.Blog posts={posts}/>
            <StaticComponent.NameForm />
            <StaticComponent.EssayForm />
            <StaticComponent.FlavorForm />
            <StaticComponent.Reservation />
            <StaticComponent.Calculator />
            <StaticComponent.SignUpDialog />
            <StaticComponent.FilterableProductTable products={PRODUCTS} />
            {/* <Component.MembersTable /> */}
            <StaticComponent.BlurExample />
        </div>
    )
}

export function Dynamic() {
    return (
        <div id="dynamic">
            <DynamicComponent.UsersList />
        </div>
    );
}