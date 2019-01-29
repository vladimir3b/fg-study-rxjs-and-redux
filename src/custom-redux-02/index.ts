import { Action } from './ngrx-fake/ngrx';
import { CounterActions } from './counter/counter.actions';

function reducer(state: number = 10, action: Action): number {
  switch (action.type) {

    case 'INCREMENT':
      return state + 1;

    case 'DECREMENT':
      return state - 1;

    case 'MULTIPLY':
      return state * action.payload;

    case 'DIVIDE':
      return state / action.payload;

    case 'RESET':
      return 0

    default:
      return state;

  }
}

console.log(reducer(10, CounterActions.incrementAction));
console.log(reducer(10, CounterActions.decrementAction));
console.log(reducer(10, CounterActions.multiplyAction));
console.log(reducer(10, CounterActions.divideAction));
console.log(reducer(10, CounterActions.resetAction));



