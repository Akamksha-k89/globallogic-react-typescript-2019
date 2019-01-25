import { bindActionCreators } from 'redux';
// containers/HeaderContainer.ts
import {connect} from 'react-redux';

import {withRouter} from 'react-router-dom';

import Header from '../components/Header';
import * as actions from '../state/actions';

interface HeaderProps {
    counter: number; 
    authenticated: boolean;
}
 
function mapStateToProps(state: any): HeaderProps {
    console.log("Header container mapStateToProps ", state);
    return {
        counter: state.counter,
        authenticated: state.auth.authenticated
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
 

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Header));
