// containers/BrandList.ts
import {connect} from 'react-redux';

import * as actions from '../state/actions';
import BrandList from '../components/BrandList';
import { bindActionCreators } from 'redux';
  
function mapStateToProps(state: any) {
    console.log("BrandList container mapStateToProps ", state);
    return {
        brands: state.brandList.brands,
        loading: state.brandList.loading,
    }
}
 
function mapDispatchToProps(dispatch: any) {
    return {
        getBrandsFromServer: () => {
            // callback func
            const actionFunc = actions.getBrands();
            // dispatching func
            dispatch(actionFunc);
        },

        actions: bindActionCreators(actions, dispatch)
    }
}
 
export default connect(mapStateToProps,
                            mapDispatchToProps) (BrandList);
