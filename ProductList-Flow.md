store 

state {
    brandList: {
        brands: []
        loading: false
    }
}

1. User Visit BrandList page
    React Loads BrandList container, that contains BrandList comp
2. BrandList, componentDidMount called
3. BrandList comp calls props.getBrandsFromServer(), which defined in container
4. getBrandsFromServer calls  actions.getBrands(), which returns a callback/thunk function as a action
5. getBrandsFromServer dispatch the callback function
6. Middlewares get called
   6.1 loggerMiddleware called
   6.2. forward actionFunc to thunk middleware
   6.3 thunk check if action is a function,
        true, yes action is a function
          call the callback function, pass dispatch, getState func as argument

7. callback function
    7.1 get the brands/data from api server
    7.2 dispatch the BRAND.INIT_BRANDS with brands read from server

8. Middlwares get called

    8.1 loggerMiddleware called
    8.2 forward BRAND.INIT_BRANDS action object to thunk middleware
    8.3 thunk check if action is a function
    8.4 forward the action object to reducer