import { Action } from '../ngrx-fake/ngrx';


export namespace CounterReducer {
  export function reducer(state: number = 10, action: Action): number {
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
}
