import { CHECK_NUMBER, UNCHECK_NUMBER, UNDO, CLEAR_BOARD } from '../actions/board';

export default function counter(state = [10, 15], action) {
  const newState = state.slice();
  switch (action.type) {
    case CHECK_NUMBER:
      if (state.indexOf(action.num) === -1) {
        newState.push(action.num);
      }
      return newState;
    case UNCHECK_NUMBER:
      if (state.indexOf(action.num) !== -1) {
        newState.splice(state.indexOf(action.num), 1);
      }
      return newState;
    case CLEAR_BOARD:
      return [];
    case UNDO:
      newState.pop();
      return newState;
    default:
      return state;
  }
}
