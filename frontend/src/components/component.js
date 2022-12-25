import React from "react";
import * as Component from './static/component';

export class StaticComponent extends React.Component {
    render() {
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
            </div>
        )
    }
}