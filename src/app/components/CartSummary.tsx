// CartSummary.tsx
import React, {Component} from "react";

interface CartSummaryProps {
    amount: number;
    count: number;
}

interface CartSummaryState {
    discount: number;
    grandTotal: number;
}

//TODO: PropTypes

// TODO: PureComponent
export default class CartSummary extends Component<CartSummaryProps, CartSummaryState> {
    constructor(props: CartSummaryProps) {
        super(props);

        this.state = {
            discount: 0,
            grandTotal: 0
        }
    }
 
    //TODO: componentWillMount
    //TODO: componentWillReceiveProps, recalculate 
 
    //TODO: shouldComponentUpdate

    recalculate(props: CartSummaryProps) {
        let discount = 0;

        if (props.count >= 10) {
            discount = 20;
        } else if (props.count >= 5) {
            discount = 10;
        }

        let grandTotal = props.amount - (props.amount * discount / 100);

        this.setState({
            discount, 
            grandTotal
        })
    }
     
    
    render() {
        console.log("CartSummary Render");
        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount : {this.props.amount} </p>
            <p> Count : {this.props.count} </p>

            <p> Discount: {this.state.discount} %</p>
            <p> Grand Total: {this.state.grandTotal} </p>
            </div>
        )
    }
} 
 