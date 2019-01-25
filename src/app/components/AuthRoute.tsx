import React  from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

 
interface AuthRouteProps extends RouteProps {
    authenticated?: boolean;
    component?: any;
}

const AuthRoute = (routeProps: AuthRouteProps) => (
  <Route
    exact={routeProps.exact || false}
    path={routeProps.path}
    render={props => (
        routeProps.authenticated ? (
        React.createElement(routeProps.component, props)
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}
  />
);
 
//Add the container

import {connect} from "react-redux";

const mapStateToProps = (state: any) => {
  console.log("Auth State", state.auth);
  
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)
               (AuthRoute);