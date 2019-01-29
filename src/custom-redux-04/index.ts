import { Store, createStore } from 'redux';
import { CounterReducer as fromCounter } from './counter/counter.reducer';
import { CounterActions } from '../custom-redux-02/counter/counter.actions';

const store: Store = createStore(fromCounter.reducer);

store.dispatch(CounterActions.incrementAction);

console.log(store.getState());

store.subscribe(() => {
  console.log('Subscription: ', store.getState());
});

store.dispatch(CounterActions.multiplyAction);
store.dispatch(CounterActions.multiplyAction);
store.dispatch(CounterActions.multiplyAction);
store.dispatch(CounterActions.decrementAction);
store.dispatch(CounterActions.divideAction);
store.dispatch(CounterActions.divideAction);
store.dispatch(CounterActions.divideAction);


