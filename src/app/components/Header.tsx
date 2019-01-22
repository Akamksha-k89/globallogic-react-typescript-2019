import React from 'react';

interface HeaderProps {
    title: string;
}

// calls the functional component
// create and return virtual dom
// props are received as first argument
function Header(props: HeaderProps) {
    console.log('Header fn');
    return (
        <div>
            <h2>{props.title}</h2>
            <hr />
        </div>
    )
}

export default Header;