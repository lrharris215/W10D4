import {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP,
} from "../actions/step_actions";

let initialState = {
  1: {
    // this is the step with id = 1
    id: 1,
    title: "walk to store",
    done: false,
    todo_id: 1,
  },
  2: {
    // this is the step with id = 2
    id: 2,
    title: "buy soap",
    done: false,
    todo_id: 1,
  },
};

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_STEP:
      nextState[action.step.id] = action.step;
      return nextState;
    case RECEIVE_STEPS:
      for (let key in action.steps) {
        nextState[key] = action.steps[key];
      }
      return nextState;
    case REMOVE_STEP:
      if (nextState[action.step.id]) {
        delete nextState[action.step.id];
      }
      return nextState;
    default:
      return state;
  }
};

export default stepsReducer;
