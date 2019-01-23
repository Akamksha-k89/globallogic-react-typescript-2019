// CartItem.tsx
import React, {Component} from "react";
import { CartDataItem } from "../models/CartDataItem";

interface CartItemProps {
    item: CartDataItem;

    //todo: removeItem and updateItem
}

interface CartItemState {
    qty: number;
}

export default class CartItem extends Component<CartItemProps,CartItemState>  {
    constructor(props: CartItemProps) {
        super(props);

        //TODO: assing from props
        this.state = {
            qty: 0
        }
    }

    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty
   
    render() {
        let {item} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name} - {this.context.theme}</td>
                <td>{item.price}</td>
                <td>
                     <input 
                            value={item.qty}
                            type="number"
                            onChange = { () => {} }
                     />
                </td>
                <td>{item.price * item.qty}</td>
                <td> 
                <button onClick={() => {}}>
                        Update
                </button>    
                <button onClick={() => {} }>
                        Delete
                </button>
                </td>
            </tr>
        )
    }
} 

