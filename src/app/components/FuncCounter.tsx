    // app/components/FuncCounter.tsx

    import React, {Component} from 'react'; 

    type Function0 = ()=>{};

    
    interface FuncProps {
        counter: number;
        increment: any;
        decrement: any;
        reset: any;
        actions: any;
    };
    
    function FuncCounter(props: FuncProps) {
            console.log('FuncCounter  called');
    

            return (
                <div>
                    <h2>Counter</h2>

                    <p>Counter is {props.counter} </p>

                    <button onClick={props.increment}>
                        Incr + 1
                    </button>

                    <button onClick={props.decrement}>
                        Decr - 1
                    </button>

                    <button onClick={props.reset}>
                        Reset 
                    </button>

                    <p>Bind Action Creations example</p>

                    <button onClick={() => props.actions.increment(2) }>
                        Incr + 2
                    </button>

                    <button onClick={() => props.actions.decrement(2)}>
                        Decr - 2
                    </button>

                    <button onClick={props.actions.reset}>
                        Reset 
                    </button>
    
                    
                </div>
            );
    }

    export default FuncCounter;