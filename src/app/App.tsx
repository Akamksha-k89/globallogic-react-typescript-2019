// app/App.tsx
import React from 'react';

import Header from './containers/HeaderContainer';

import Footer from './components/Footer';
import Counter from './components/Counter';
import Checkout from './components/Checkout';

// import Cart from './components/Cart';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import ReduxCounter from './components/ReduxCounter';
import AuthRoute from './components/AuthRoute';

// alias by default
import FuncCounter from './containers/FuncCounterContainer';
import Login from './containers/Login';

import BrandList from './brand/containers/BrandList';
import BrandEdit from './brand/containers/BrandEdit';

import ProductList from './product/containers/ProductList';
import ProductEdit from './product/containers/ProductEdit';
import ReduxCart from './redux-cart/containers/ReduxCart';

import Loadable from 'react-loadable';

// function component
// used when it take times to download module
function Loading() {
        return (
                <div>
                        <h2>Loading page...</h2>
                </div>
        )
}
 
const LoadableCart = Loadable({
  loader: () => import('./components/Cart'),
  loading: Loading,
});


import {
        Route,
        Switch
} from 'react-router-dom';


interface AppProps {
}

interface AppState {
    pageName: string;
}

// class component
// react create object for class component
class App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
    }

    //keyword
    // create and return new virtual dom
    render() {
        console.log('App render');
        return (
           <div>
              <Header  title="My React App"/>
 
             <Switch>
                <Route path="/" exact component={Home} />

                {/* <Route path="/cart" component={Cart} />
                 */}


                <Route path="/cart" component={LoadableCart} />

                <Route path="/checkout" component={Checkout} />

            {/*   <Route path="/counter" component={Counter} /> */}

                <Route path="/counter" 
                        render={ () => (
                            <Counter startValue={0} />
                        ) } 
                        />
                

                <Route path="/contact/:country" component={Contact} />
                <Route path="/about" component={About} />

                <Route path="/redux-counter"
                        component={ReduxCounter} />

                <Route path="/func-counter"
                        component={FuncCounter} />

                <Route path="/brands" exact
                        component={BrandList} />

                <AuthRoute path="/brands/edit/:id"
                        component={BrandEdit} />

                <AuthRoute path="/brands/create"
                        component={BrandEdit} />

                <Route path="/redux-cart" exact
                        component={ReduxCart} />

                <Route path="/products" exact
                        component={ProductList} />

                <Route path="/products/edit/:id"
                        component={ProductEdit} />

                <Route path="/products/create"
                        component={ProductEdit} />


                <Route path="/login"
                        component={Login} />

                <Route path='*' component={NotFound} />
            </Switch>

              <Footer company="GL" 
                      year={2018 + 1} 
                      
                      address = {  {city:'Noida', state:'UP', pincode:201305}  }

                      />
          </div>
        )
    }
}

export default App;