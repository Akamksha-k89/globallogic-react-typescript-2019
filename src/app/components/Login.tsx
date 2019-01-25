// components/Login.tsx
import React, { Component } from 'react';
 
class Login extends Component<any> {
    render() {
        console.log('login props', this.props);
        return (
            <div>
                <h2>Login</h2>

            {
                this.props.authenticated?
                        <button onClick={this.props.actions.loggedOut}>
                        Log out
                        </button>
                    :
                <button onClick={this.props.actions.loggedIn}>
                    Log in
                </button>
            }
                

               
            </div>
        );
    }
}

export default Login;