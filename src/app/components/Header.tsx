// Header.tsx
import React from 'react';

import {NavLink, RouteComponentProps} from 'react-router-dom';

interface HeaderProps extends RouteComponentProps {
    title?: string;
    counter?: number;
    authenticated?: boolean;
    actions: any;
}

// calls the functional component
// create and return virtual dom
// props are received as first argument
function Header(props: HeaderProps) {
    console.log('Header fn');
    return (
        <div>
            <h2>{props.title}</h2>

            <NavLink to="/" 
                    className="button"
                    activeClassName="success"
                    exact
                    >Home</NavLink>

            <NavLink to="/products"
                     className="button"
                     activeClassName="success">Products</NavLink>


            <NavLink to="/brands"
                     className="button"
                     activeClassName="success">Brands</NavLink>


            <NavLink to="/cart"
                     className="button"
                     activeClassName="success">Cart</NavLink>

            <NavLink to="/checkout"
                     className="button"
                     activeClassName="success">Checkout</NavLink>

            <NavLink to="/about"
                     className="button"
                     activeClassName="success">About</NavLink>


            <NavLink to="/counter"
                     className="button"
                     activeClassName="success">Counter</NavLink>

            <NavLink to="/contact/india"
                    className="button"
                    activeClassName="success">Contact/IN</NavLink>

            <NavLink to="/contact/usa"
                    className="button"
                    activeClassName="success">Contact/USA</NavLink>


        <NavLink to="/redux-counter"
                    className="button"
                    activeClassName="success">Redux Counter</NavLink>


        <NavLink to="/func-counter"
                    className="button"
                    activeClassName="success">Func Counter {props.counter} </NavLink>



            
            {
                 props.authenticated?
                        <button onClick={props.actions.loggedOut}>
                        Log out
                        </button>
                    :
                    <NavLink to="/login"
                    className="button"
                    activeClassName="success">Login </NavLink>

            }

            <hr />
        </div>
    )
}

export default Header;