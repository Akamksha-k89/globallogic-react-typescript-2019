// CartList.tsx

import React, {Component} from "react";

import CartItem from "./CartItem";
import { CartDataItem } from "../models/CartDataItem";

 //TODO: PureComponent
 interface CartListProps {
     items: CartDataItem[];
     //todo: removeItem, updateItem
 }

export default class CartList extends Component<CartListProps> {
    constructor(props: CartListProps) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate
    
    render() {
        console.log("CartList Render");
        // let items = this.props.items;
        // deconstruct, es6 feature
        let {items} = this.props;

       

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem */ }
                    
                    {
                        items.map(item => (
                                <CartItem item={item} 
                                          key={item.id}
                                />
                        ))
                    }

                </tbody>
            </table>
            </div>
        )
    }
} 