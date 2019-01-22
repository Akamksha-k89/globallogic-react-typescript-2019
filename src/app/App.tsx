// app/App.tsx
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';

// class component
// react create object for class component
class App extends React.Component {

    //keyword
    // create and return new virtual dom
    render() {
        console.log('App render');
        return (
          <div>
              <Header  title="My React App"/>
              
              <Counter startValue={0} />
              
              <Counter startValue={100} />

              <Footer company="GL" 
                      year={2018 + 1} 
                      
                      address = {  {city:'Noida', state:'UP', pincode:201305}  }

                      />
          </div>
        )
    }
}

export default App;