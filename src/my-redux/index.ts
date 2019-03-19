import { IActionModel } from './models/action.model';
import { Subject } from 'rxjs';
import { ReducerType } from './models/reducer.type';
import { IStoreModel } from './models/store.model';

namespace MyStore {

  // Define store class
  class Store<T> implements IStoreModel<T> {

    // PROPERTIES AND CONSTRUCTOR
    private _watcher: Subject<void>;
    constructor(
        private _reducer: ReducerType<T>,
        private _state: T
    ) {
      this._watcher = new Subject();
    }

    // METHODS
    public getState(): T {
      return this._state
    }

    public dispatch(action: IActionModel<T>): void {
      this._state = this._reducer(this._state, action);
      this._watcher.next();
    }

    public subscribe(fn: () => any): void {
      this._watcher.subscribe(fn);
    }

  }


  // Define createStore function
  export function _createStore<T>(reducer: ReducerType<T>, initial_state: T): IStoreModel<T> {
    return new Store(reducer, initial_state);
  }

}

export const createStore = MyStore._createStore;