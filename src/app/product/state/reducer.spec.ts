import reducer from "./productsReducer";
import * as ActionTypes from "./action-types";
import * as actions from "./actions";

describe ("Testing reducer", ()=> {
    

    it ("should be initial state", () => {
        expect(reducer(undefined, {}))
        .toEqual ({
            
            loading: false,
            error: null,
            products: [],
        
        
            product: {
                name: '',
                year: 2017,
                brandId: 0,
                price: 0
            }
            
        })

    })


    it ("should change loading state", () => {
        expect(reducer({
                                loading: false,
                                product: {}
                        }, 
                        actions.loading(true)))
        .toEqual ({
                loading: true,
                product: {}
        })

    })



    it ("should have one item in the products", () => {
        expect(reducer({
                products: []
        }, actions.initProducts([{id: 1}])))
        .toEqual ({
            products: [ {id: 1}]
        })

    })

    it ("should have updated data in product", () => {
        expect(reducer({
                product: {}
        }, 
        actions.updateProduct({id: 1})
    ))
        .toEqual ({
            product:  {id: 1}
        })

    })

})