import { IActionModel } from './models/action.model';
import { Subject } from 'rxjs';
import { ReducerType } from '../my-redux/models/reducer.model';
import { IStoreModel } from '../my-redux/models/store.mode';

namespace MyRedux {

  // define store
  // tslint:disable-next-line:no-shadowed-variable
  export class Store<T> implements IStoreModel<T> {

    public stateObserver: Subject<void>;

    constructor(
      private _reducer: ReducerType<T>,
      private _state: T
    ) {
      this.stateObserver = new Subject();
    };

    public getState(): T {
      return this._state;
    }

    public dispatch(action: IActionModel): void {
      this._state = this._reducer(this._state, action);
      this.stateObserver.next();
    }

  }

  // define create-store function
  export function _createStore<T>(reducer: ReducerType<T>, initial_state: T): IStoreModel<T> {
    return new Store(reducer, initial_state);
  }

}

export const createStore = MyRedux._createStore