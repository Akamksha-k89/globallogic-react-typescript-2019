import React, {Component} from "react";
import PropTypes from "prop-types";

export default class BrandEdit extends Component<any, any> {
    input: any;

    constructor(props: any) {
        super(props);

        this.state = {
            errors: {
                
            }
        }
    }
    
    componentDidMount() {
 
        this.input.focus();
 
        console.log(this.props.match);

        let id = this.props.match.params.id;
        console.log('id is ', id);
        if (id) {
            // fetch existing brand
            // bind action creater wrapper, this dispatch also
            this.props.actions.getBrand(id);
        } else {
            //TODO: new brand
            this.props.actions.newBrand();
        }

    }

    changeValue(e: any) {
        let {name, value} = e.target;

        let cBrand = {...this.props.brand, 
                            [name]: value};

        this.props.actions.initBrand(cBrand);

        console.log(name, value, e.target.validity.valid);
    }

    saveBrand(e: any) {
        //stop browser from submit form
        e.preventDefault();

        this.props.actions
            .saveBrand(this.props.brand);
    }
    
    render() {
        return (
            <div> 
            <h2>Brand Edit - {this.props.match.params.id}</h2>
             

            <form onSubmit={(e) => this.saveBrand(e)}  >
                Name
                <input name="name" 
                 ref={(elem) => this.input = elem}
                        onChange= { (e) => this.changeValue(e) }
                       value={this.props.brand.name}
                       
                        minLength={3}
                       
                        />

 
                <button type="submit">
                    Save
                </button>

            </form>
            
            
            
            </div>
        )
    }
} 


// BrandEdit.defaultProps = {
//     brand: {}   
// }

// BrandEdit.propTypes = {
//     brand: PropTypes.object
// }
 