// configureStore.ts

import {createStore, combineReducers} from 'redux';

import counterReducer from './state/reducers/counterReducer';
import brandListReducer from './brand/state/reducers/brandListReducer';

export default function configureStore() {
    const rootReducer = combineReducers({
        counter: counterReducer,
        brandList: brandListReducer
    });

    console.log('creating store');
    const store = createStore(rootReducer);
    console.log('store created');

    return store;
}