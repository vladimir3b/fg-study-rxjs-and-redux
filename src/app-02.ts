import {
  decrementAction,
  divideBy4Action,
  incrementAction,
  multiplyBy5Action,
  resetAction
} from './calculate/calculate.actions';
import { IAction } from './ngrx-fake/ngrx';

/***
 *    ┬─┐┌─┐┌┬┐┬ ┬┌─┐┌─┐┬─┐
 *    ├┬┘├┤  │││ ││  ├┤ ├┬┘
 *    ┴└─└─┘─┴┘└─┘└─┘└─┘┴└─
 */
function reducer(state = 10, action: IAction) {
  switch (action.type) {
    case 'INCREMENT':
      return state += 1;
    case 'DECREMENT':
      return state -= 1;
    case 'MULTIPLY BY 5':
      return state *= action.payload;
    case 'DIVIDE BY 4':
      return state /= action.payload;
    case 'RESET':
      return state = 0;
    default:
      return state;
  }
}


console.log(reducer(40, divideBy4Action));
console.log(reducer(40, multiplyBy5Action));
console.log(reducer(40, incrementAction));
console.log(reducer(40, resetAction));
console.log(reducer(40, decrementAction));