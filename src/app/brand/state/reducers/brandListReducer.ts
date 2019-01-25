// brandListReducer.ts

import { Action } from 'redux';

import * as ActionTypes  from '../action-types';
import { InitBrandsAction, LoadingBrandsAction } from '../actions';
import { Brand } from '../../models/Brand';

interface BrandState {
    brands: Brand[];
    loading: boolean;
};

const INITIAL_STATE: BrandState = {
    brands: [],
    loading: false
};

function brandListReducer(state = INITIAL_STATE, 
                        action: InitBrandsAction | LoadingBrandsAction): BrandState {

    console.log('brandListReducer called', state, action);

    switch(action.type) {
        case ActionTypes.INIT_BRANDS: {
            // type casting
            const brandAction = <InitBrandsAction>  action;
            console.log('brandAction', brandAction)
            return {...state, brands: brandAction.payload.brands};
        }

        case ActionTypes.LOADING_BRANDS: {
               // type casting
               const loadingAction = <LoadingBrandsAction>  action;
     
               return {...state, loading: loadingAction.payload.loading};
        }
 
        default:
            return state;
    }

}

export default brandListReducer;