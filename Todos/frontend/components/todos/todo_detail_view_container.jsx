import {connect} from 'react-redux';
import { receiveStep, receiveSteps, removeStep } from '../../actions/step_actions';
import {allSteps} from '../../reducers/selectors';
import todoDetailView from './todo_detail_view';

const mapStateToProps = (state) => {
    return {
        steps: allSteps(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveStep: (step) => {
            return dispatch(receiveStep(step))
        },
        receiveSteps: (steps) => {
            return dispatch(receiveSteps(steps))
        },
        removeStep: (step) => {
            return dispatch(removeStep(step))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(todoDetailView)