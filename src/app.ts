import {
  DECREMENT_ACTION,
  DIVIDE_ACTION,
  INCREMENT_ACTION,
  MULTIPLY_ACTION,
  RESET_ACTION
} from './calculate/calculate.actions';
import { createStore } from './my-redux/my-redux.store';
import { calculateReducer } from './calculate/calculate.reducer';
import { IStoreModel } from './my-redux/models/store.mode';


const INITIAL_STATE: number = 5;
const store: IStoreModel<number> = createStore(calculateReducer, INITIAL_STATE);

store.stateObserver.subscribe(() => console.log(store.getState()));

store.dispatch(INCREMENT_ACTION);
store.dispatch(MULTIPLY_ACTION);
store.dispatch(INCREMENT_ACTION);
store.dispatch(INCREMENT_ACTION);
store.dispatch(INCREMENT_ACTION);
store.dispatch(INCREMENT_ACTION);
store.dispatch(INCREMENT_ACTION);
store.dispatch(DIVIDE_ACTION);
store.dispatch(RESET_ACTION);
store.dispatch(DECREMENT_ACTION);
store.dispatch(DECREMENT_ACTION);
store.dispatch(DECREMENT_ACTION);
store.dispatch(DECREMENT_ACTION);



