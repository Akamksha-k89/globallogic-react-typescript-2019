// app/App.tsx
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';
import Checkout from './components/Checkout';
import Cart from './components/Cart';


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
        this.state = {
            pageName: 'Checkout'
        }
    }

    onCheckout = () => {
        this.setState({
            pageName: 'Checkout'
        })
    }

    onCounter = () => {
        this.setState({
            pageName: 'Counter'
        })
    }


    //keyword
    // create and return new virtual dom
    render() {
        console.log('App render');
        return (
          <div>
              <Header  title="My React App"/>

              <Cart />

            {/*
              <button onClick={this.onCheckout}>
                Checkout
              </button>

              <button onClick={this.onCounter}>
                Counter
              </button>

              {
                this.state.pageName == "Checkout" && 
                    <Checkout />
              }
              
              {
                 this.state.pageName == "Counter" && 
                    <Counter startValue={0} />
              }

            */}
               

              <Footer company="GL" 
                      year={2018 + 1} 
                      
                      address = {  {city:'Noida', state:'UP', pincode:201305}  }

                      />
          </div>
        )
    }
}

export default App;