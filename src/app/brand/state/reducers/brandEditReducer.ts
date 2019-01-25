import { InitBrandAction } from './../actions';
import { Action } from 'redux';
// counterReducer.ts

import * as ActionTypes  from '../action-types';
import { Brand } from '../../models/Brand';

interface BrandEditState {
    brand: Brand;
};

const INITIAL_STATE: BrandEditState = {
    brand: new Brand()
};

function brandEditReducer(state = INITIAL_STATE, 
                        action: InitBrandAction): BrandEditState {

    console.log('brandEditReducer called', state, action);

    switch(action.type) {
        case ActionTypes.INIT_BRAND: {
            // type casting
            const brandAction = <InitBrandAction>  action;
            console.log('brandAction', brandAction)
            return {...state, brand: brandAction.payload.brand};
        }

        case ActionTypes.NEW_BRAND: {
            // type casting
            return {...state, brand: new Brand()};
        }
 
        default:
            return state;
    }
}

export default brandEditReducer;