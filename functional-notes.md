class Calculator {
    int sum = 0;
    int add(int value) {
        sum += value; // mutation
        return sum;
    }
}

// given same input, expect same output
// pure function
function add(sum, value) {
    // immutable
    return sum + value;
}

add(0, 10); // 10

class Cart {
    Array<CartITem> items;

    addItem(CartItem item) {
        this.items.add(item); //mutation
    }
}

function addItem(items, item) {
    // immutable
    return [...items, item]
}

addItem([], {id: 1}) // [{id: 1}]
addItem([], {id: 1}) // [{id: 1}]
addItem([{id: 0}], {id: 1}) // [{id: 0}, {id: 1}]
addItem([{id: 0}], {id: 1}) // [{id: 0}, {id: 1}]


calc = new Calculator()
calc.add(10); // 10
calc.add(10); // 20
calc.add(5); // 25
calc.add(10);
calc.add(5);
calc.add(10);
calc.add(5);calc.add(10);
calc.add(5);calc.add(10);
calc.add(5);calc.add(10);
calc.add(5);calc.add(10);
calc.add(5);calc.add(10);
calc.add(5);calc.add(10);
calc.add(5);calc.add(10);
calc.add(5);calc.add(10);
calc.add(5);calc.add(10);
calc.add(5);calc.add(10);
calc.add(5);calc.add(10);
calc.add(5);calc.add(10);
calc.add(5);calc.add(10);
calc.add(5); // 
calc.add(10);
calc.add(5);

function add(sum, value) {
    // immutable
    return sum + value;
}

add(0, 10); // 10
add(0, 10); // 10

add(0, 10); // 10
add(0, 10); // 10

add(0, 10); // 10
add(0, 10); // 10

add(0, 10); // 10
add(0, 10); // 10

add(0, 10); // 10
add(0, 10); // 10

add(0, 10); // 10
add(0, 10); // 10

add(0, 10); // 10
add(0, 10); // 10

add(0, 10); // 10
add(0, 10); // 10

add(0, 10); // 10
add(0, 10); // 10

add(0, 10); // 10
add(100, 200); // 300
