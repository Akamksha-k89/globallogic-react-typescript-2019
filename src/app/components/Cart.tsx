// Cart.tsx

import React, {Component} from "react";

import CartList from "./CartList";
import CartSummary from "./CartSummary";
import { CartDataItem } from "../models/CartDataItem";

interface CartProps {
}

interface CartState {
    items: CartDataItem[];
    amount: number;
    count: number;
    flag: boolean;
}

export default class Cart extends Component<CartProps, CartState> {
    constructor(props: CartProps) {
        super(props);

        this.state = {
            items: [ 
            			new CartDataItem(1, 'P1', 100,  1)
            	   ],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
    }
    
    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item: CartDataItem =  new CartDataItem(
             id,
             `Product ${id}`,
             Math.ceil(Math.random() * 100),
              1
        );

        //TODO:
 
    }
    
    removeItem = (id: number) => {
        //TODO
    }

    updateItem = (id: number, qty: number) => {
        //TODO
    }

    empty = () => {
        //TODO
         
    }

    //dummy
    refresh = () => {
        this.setState({
            flag: true
        })
    }

    // derived data from state
    recalculate(items: CartDataItem[]) {
        let count = 0, 
            amount = 0;

        for (let item of items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        this.setState({
            amount,
            count
        })
    }

    //TODO:
    //componentWillMount
    
    
    render() {
        console.log("Cart render")
        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={this.addItem}>
                Add Item
            </button>


            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.refresh}>
                Refresh
            </button>
            

            <CartList  items={this.state.items}  
                      
            />

            <CartSummary amount={this.state.amount}
                         count = {this.state.count}
            />

            </div>
        )
    }
} 
