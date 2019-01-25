// containers/BrandList.ts
import {connect} from 'react-redux';

import * as actions from '../state/actions';
import BrandList from '../components/BrandList';
  
function mapStateToProps(state: any) {
    console.log("BrandList container mapStateToProps ", state);
    return {
        brands: state.brandList.brands,
        loading: state.brandList.loading,
    }
}
 
function mapDispatchToProps(dispatch: any) {
    return {
        getProductsFromServer: () => {

        },

        deleteBrand: (id: any) => {
            
        }
    }
}
 
export default connect(mapStateToProps,
                            mapDispatchToProps) (BrandList);
