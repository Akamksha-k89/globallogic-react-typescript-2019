// actions.ts

import * as ActionTypes from './action-types';
import {Action} from 'redux';
import { Brand } from '../models/Brand';
// action creators

export interface InitBrandsAction extends Action<string> {
    payload: { 
        brands: Brand[]
     };
}

export interface LoadingBrandsAction extends Action<string> {
    payload: { 
        loading: boolean
     };
}

// es6
// multi-line function, needs return
export const initBrands = (brands: Brand[]):InitBrandsAction => {
    return {
        type: ActionTypes.INIT_BRANDS,
        payload: {
            brands
        }
    }
}

// es6, single line function, return object
export const loadingBrands = (loading: boolean):LoadingBrandsAction => ({
    type: ActionTypes.LOADING_BRANDS,
    payload: {
        loading
    }
})
