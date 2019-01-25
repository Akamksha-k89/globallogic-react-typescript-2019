import { Action, Middleware, MiddlewareAPI, Dispatch, AnyAction } from 'redux';
// configureStore.ts

import {createStore,
        combineReducers,
        Store,
        applyMiddleware
    } from 'redux';

import thunkMiddleware from 'redux-thunk';

import counterReducer from './state/reducers/counterReducer';
import brandListReducer from './brand/state/reducers/brandListReducer';
import brandEditReducer from './brand/state/reducers/brandEditReducer';


function logger() {
    const loggerMiddleware: Middleware = ( store : MiddlewareAPI) => (
      next: Dispatch
    ) => action => {
      console.log('LOGGER Middlware, will dispatch', action)
      console.log('Action Type', typeof action)

      // Call the next dispatch method in the middleware chain.
      const returnValue = next(action)
  
      console.log('state after dispatch', store.getState())
  
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue;
    }
  
    return loggerMiddleware
  }
  

export default function configureStore() {
    const rootReducer = combineReducers({
        counter: counterReducer,
        brandList: brandListReducer,
        brandEdit: brandEditReducer
    });

    console.log('creating store');
    const store = createStore(rootReducer, 
                              applyMiddleware(logger(), 
                                              thunkMiddleware
                                            ) );
    console.log('store created');

    return store;
}