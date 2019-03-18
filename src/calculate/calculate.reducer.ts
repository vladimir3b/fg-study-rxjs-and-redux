import { IAction } from '../ngrx-fake/ngrx';

/***
 *    ┬─┐┌─┐┌┬┐┬ ┬┌─┐┌─┐┬─┐
 *    ├┬┘├┤  │││ ││  ├┤ ├┬┘
 *    ┴└─└─┘─┴┘└─┘└─┘└─┘┴└─
 */
export function calculateReducer(state = 10, action: IAction) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'MULTIPLY BY 5':
      return state * action.payload;
    case 'DIVIDE BY 4':
      return state / action.payload;
    case 'RESET':
      return 0;
    default:
      return state;
  }
}