
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import BrandEdit from "../components/BrandEdit";
import * as actions from "../state/actions";

const mapStateToProps = (state: any) => {
    return {
         brand: state.brandEdit.brand
    }
}

const mapDispatchToProps = (dispatch : any) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (BrandEdit)