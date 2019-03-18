import { createStore, Store} from 'redux';
import { calculateReducer } from './calculate/calculate.reducer';
import {
  decrementAction,
  divideBy4Action,
  incrementAction,
  multiplyBy5Action,
  resetAction
} from './calculate/calculate.actions';

const INITIAL_STATE: number = 25;
const store: Store = createStore(calculateReducer, INITIAL_STATE);

store.subscribe(() => console.log('State:', store.getState()));

store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(multiplyBy5Action);
store.dispatch(incrementAction);
store.dispatch(decrementAction);
store.dispatch(incrementAction);
store.dispatch(resetAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(multiplyBy5Action);
store.dispatch(incrementAction);
store.dispatch(decrementAction);
store.dispatch(incrementAction);
store.dispatch(decrementAction);
store.dispatch(incrementAction);
store.dispatch(decrementAction);
store.dispatch(incrementAction);