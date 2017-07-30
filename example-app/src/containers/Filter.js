import { connect } from 'react-redux'
import { setVisibilityFilter } from '../state/visibiity-actions';
import Pill from '../components/Pill'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
};

const Filter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Pill);

export default Filter;
