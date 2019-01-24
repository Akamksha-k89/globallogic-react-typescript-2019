## Get Started

```bash

git clone https://github.com/nodesense/globallogic-react-typescript-2019

cd globallogic-react-typescript-2019

npm install


npm start

```

## Technical Resources

### ES6

- http://es6-features.org/
- http://exploringjs.com/es6/ch_core-features.html

### TypeScript

- https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

### React
- https://medium.freecodecamp.org/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6
- https://reactjs.org/tutorial/tutorial.html
- https://github.com/fullstackreact/30-days-of-react


## Limitation

- React is a library
- Props, parent to child
    Parent  [Data ], function
        Child L1
            Child L2
                Child L3
                    ...
                    ...
                        Child L10 [Data], wants to modify data
        
- Component lose the state, when destroyed [route, if/for]

- Siblings cannot share data

- Writing business logics in view

- Writing communication logics (web service) in view


# Action Types

- Unique
- ModuleName.ActionType
- FeatureName.ActionType

- COUNTER.INCREMENT
- CART.INCREMENT

- AUTH.LOGOUT

     counterReducer
        ..
        case AUTH.LOGOUT: 
            return 0;
     authReducer
            { authencated: false}

     cartReducer
            return []