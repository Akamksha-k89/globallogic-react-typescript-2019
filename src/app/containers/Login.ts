// containers/FuncCounterContainer.ts
import {connect} from 'react-redux';

import Login from '../components/Login';
import * as actions from '../state/actions';

import {bindActionCreators} from 'redux';
  
function mapStateToProps(state: any) {
    return {
        authenticated: state.auth.authenticated,
        title: "Hello"
    }
}
 
function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}


export default connect(mapStateToProps,
                     mapDispatchToProps) (Login);