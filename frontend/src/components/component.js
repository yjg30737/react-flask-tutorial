import React from "react";
import * as CommonComponent from './common/component';
import * as StaticComponent from './static/component';
import * as DynamicComponent from './dynamic/component';
import * as GridLayoutComponent from './gridlayout/component';

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
        <div id="static" style={{ border: '1px solid black' }}>
            <CommonComponent.ColumnTitle columnname="Static" />
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
        <div id="dynamic" style={{ border: '1px solid black' }}>
            <CommonComponent.ColumnTitle columnname="Dynamic" />
            <DynamicComponent.UsersList />
        </div>
    );
}

export function GridLayout() {
    return (
        <div id="grid" style={{ border: '1px solid black' }}>
            <CommonComponent.ColumnTitle columnname='GridLayout' />
            <GridLayoutComponent.BasicExample />
        </div>
    )
}
export function MainTitle(props) {
    return <h1 style={{ textAlign: 'center' }}>{props.username}'s {props.sitename}</h1>
}

export function Main() {
    return (
        <div id="main" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <Static />
            <Dynamic />
            <GridLayout />
        </div>
    )
}