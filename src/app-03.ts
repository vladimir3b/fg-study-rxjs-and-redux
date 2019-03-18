import {
  IAction,
  IReducer
} from './ngrx-fake/ngrx';
import { calculateReducer } from './calculate/calculate.reducer';
import {
  decrementAction,
  divideBy4Action,
  incrementAction,
  multiplyBy5Action,
  resetAction
} from './calculate/calculate.actions'

/***
 *    ┌─┐┌┬┐┌─┐┬─┐┌─┐
 *    └─┐ │ │ │├┬┘├┤
 *    └─┘ ┴ └─┘┴└─└─┘
 */
class Store<T> {

  constructor(
    private _reducer: IReducer<T>,
    private _state: T
  ) { }

  public getState(): T {
    return this._state;
  }

  public dispatch(action: IAction): void {
    this._state = this._reducer(this._state, action);
  }

}

const INITIAL_STATE: number = 10;

const store = new Store(calculateReducer, INITIAL_STATE);

console.log(store.getState());

store.dispatch(incrementAction);
console.log(store.getState());
store.dispatch(divideBy4Action);
console.log(store.getState());
store.dispatch(multiplyBy5Action);
console.log(store.getState());
store.dispatch(decrementAction);

store.dispatch(resetAction);
console.log(store.getState());
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(multiplyBy5Action);
console.log(store.getState());



