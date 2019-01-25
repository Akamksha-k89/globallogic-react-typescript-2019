// brands..actions.ts

import * as ActionTypes from './action-types';
import {Action} from 'redux';
import { Brand } from '../models/Brand';
import * as api from './api';

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


export interface InitBrandAction extends Action<string> {
    payload: { 
        brand: Brand
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



// THUNK - 
// you write ajax/async as action method
// this action method pull data from webserivce
// then update the store with dispatch

// thunk actions return a function instead of action object
// we dispatch function as action

export const getBrands = () => {
    // action function, called by thunk
    return function(dispatch: any, getState: any) {
        dispatch(loadingBrands(true));
        return api.fetchBrands()
                  .then( (brands: Brand[]) => {
                        //const action = initBrands(brands);
                        // dispatch(action);
                        dispatch(initBrands(brands));
                        dispatch(loadingBrands(false));
                  });
    }
}


export const initBrand = (brand: Brand):InitBrandAction => {
    return {
        type: ActionTypes.INIT_BRAND,
        payload: {
            brand
        }
    }
}

export const newBrand = ():Action<string> => {
    return {
        type: ActionTypes.NEW_BRAND
    }
}

export const getBrand = (id: any) => {
    // action function, called by thunk
    return function(dispatch: any, getState: any) {
         return api.fetchBrand(id)
                  .then( (brand: Brand) => {
                        dispatch(initBrand(brand));
                  });
    }
}



export const saveBrand = (brand: Brand) => {
    // action function, called by thunk
    return function(dispatch: any, getState: any) {
         return api.saveBrand(brand)
                  .then( (brand: Brand) => {
                        dispatch(initBrand(brand));
                  });
    }
}



export const deleteBrand = (id: any) => {
    // action function, called by thunk
    return function(dispatch: any, getState: any) {
         return api.deleteBrand(id)
                  .then( (data: any) => {
                       //todo
                       // dispatch a thunk method
                       dispatch(getBrands());
                  });
    }
}