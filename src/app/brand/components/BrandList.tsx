// BrandList.tsx
import React, {Component} from "react";
import PropTypes from "prop-types";

import {Link} from "react-router-dom";

export default class BrandList extends Component<any> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        //TODO
    }
 
    render() {
        if (this.props.loading) {
            return (
                <h2>Brands loading ...</h2>
            );
        }
 

        return (
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Delete</th>
                    </tr>
                  
                {
                    this.props.brands.map ( (brand: any) => (
                        <tr key={brand.id}>

                            <td>{brand.id}</td>
                           <td>
                            <Link to={`/brands/edit/${brand.id}`}
                                >
                                {brand.name}
                                </Link>
                           </td>
                            
                            <td>
                               <button onClick={() => this.props.actions.deleteBrand(brand.id)}>
                                X
                               </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        )

    }

}