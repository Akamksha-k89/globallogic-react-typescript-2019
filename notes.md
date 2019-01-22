import React from 'react';
 
interface HeaderProps {
    name: string,
}

const Header: React.SFC<HeaderProps> = (props) => {
return <h1>Hello, {props.name}</h1>;
}

// // calls the functional component
// // create and return virtual dom
// function Header() {
//     console.log('Header fn');
//     return (
//         <div>
//             <h2>React App</h2>
//             <hr />
            
//             <br />
//         </div>
//     )
// }

export default Header;