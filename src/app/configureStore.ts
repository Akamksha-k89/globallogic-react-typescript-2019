// configureStore.ts

import {createStore, combineReducers} from 'redux';

import counterReducer from './state/reducers/counterReducer';

export default function configureStore() {
    const rootReducer = combineReducers({
        counter: counterReducer
    });

    console.log('creating store');
    const store = createStore(rootReducer);
    console.log('store created');

    return store;
}