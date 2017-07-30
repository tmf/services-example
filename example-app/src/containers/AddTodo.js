import { connect } from 'react-redux';
import { addTodo } from 'example-api-connector';
import SubmitInput from '../components/SubmitInput';

const mapStateToProps = () => {
    return {
        placeholder: 'What needs to be done?'
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: text => {
            dispatch(addTodo(text))
        },
    }
};

const AddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubmitInput);

export default AddTodo;
