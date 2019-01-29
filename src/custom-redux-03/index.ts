import { Store } from './ngrx-fake/ngrx';
import { CounterActions } from './counter/counter.actions';
import { CounterReducer as fromCounter } from './counter/counter.reducer';


const store: Store<number> = new Store(fromCounter.reducer, 20);

console.log(store.getState());

store.dispatch(CounterActions.divideAction);

console.log(store.getState());

store.dispatch(CounterActions.incrementAction);
store.dispatch(CounterActions.multiplyAction);

console.log(store.getState());
