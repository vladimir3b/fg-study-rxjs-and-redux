import { ReducerType } from './reducer.model';
import { IActionModel } from '../my-redux/models/action.model';
import { Subject } from 'rxjs';

export interface IStoreModel<T> {
  stateObserver: Subject<T>;
  getState: () => T;
  dispatch: (action: IActionModel ) => void;
}

