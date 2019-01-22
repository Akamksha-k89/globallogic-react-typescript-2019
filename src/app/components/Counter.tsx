// app/components/Counter.tsx

import React, {Component} from 'react';

interface CounterProps {
    startValue: number;
};

// React.Component === Component
// class component accept generics 
// first one is Props Type, second one is State  Type
class Counter extends Component<CounterProps> {
    // constructor receive props very first time
    constructor(props: CounterProps) {
        super(props); // MUST
        console.log('Counter object created');
    }

    render() {
        // props is available as this.props
        // this.props is a keyword
        console.log('Counter render called', this.props);
        return (
            <div>
                <h2>Counter</h2>

                <p>Start value {this.props.startValue}</p>

                <p>Counter is</p>
            </div>
        );
    }

}

export default Counter;