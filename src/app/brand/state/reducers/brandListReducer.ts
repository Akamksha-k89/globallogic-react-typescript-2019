import { Action } from 'redux';
// counterReducer.ts

import * as ActionTypes  from '../action-types';
import { InitBrandsAction, LoadingBrandsAction } from '../actions';
import { Brand } from '../../models/Brand';
 
const INITIAL_STATE = {
    brands: Brand[] = [],
    loading: boolean = false
};

function brandListReducer(state = INITIAL_STATE, 
                        action: InitBrandsAction | LoadingBrandsAction) {

    console.log('brandListReducer called', state, action);

    switch(action.type) {
        case ActionTypes.INIT_BRANDS: {
            // type casting
            const brandAction = <InitBrandsAction> <unknown> action.payload;
     
            return {...state, brands: brandAction.payload.brands};
        }

        case ActionTypes.LOADING_BRANDS: {
               // type casting
               const loadingAction = <LoadingBrandsAction> <unknown> action.payload;
     
               return {...state, loading: loadingAction.payload.loading};
        }
 
        default:
            return state;
    }

}

export default brandListReducer;