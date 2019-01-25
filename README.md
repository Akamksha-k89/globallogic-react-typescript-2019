## Get Started

```bash

git clone https://github.com/nodesense/globallogic-react-typescript-2019

cd globallogic-react-typescript-2019

npm install


npm start

```

## JSON Server

https://github.com/typicode/json-server#static-file-server

```

npm install -g json-server

c:\> mkdir data

cd data

c:\data> 

create  a file called db.json


http://localhost:3000/products
http://localhost:3000/products/1

POST http://localhost:3000/products

{
    "name": "iphone",
    "price": 20000
}




In postman,

Get all products

1. Select GET method, http://localhost:3000/products
2. Click send button


to get single product by id

1. Select GET method, http://localhost:3000/products/134
2. Click send button

create new product

1. Select POST method, http://localhost:3000/products
2. In Body, select raw
3. Select JSON (application/json) in the Text(Content Type)

4. Place below content in the text area
        {
    "name": "iphone",
    "price": 20000
    }

5. Click send button


to update existing content


1. Select PUT method, http://localhost:3000/products/2
2. In Body, select raw
3. Select JSON (application/json) in the Text(Content Type)

4. Place below content in the text area
        {
    "name": "iphone 10",
    "price": 45000
    }

5. Click send button


```

Delete

1. Select DELETE method, http://localhost:3000/products/2


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