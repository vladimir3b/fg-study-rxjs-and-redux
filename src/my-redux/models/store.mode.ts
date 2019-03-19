import { Subject } from 'rxjs';
import { IActionModel } from './action.model';

export interface IStoreModel<T> {
  stateObserver: Subject<void>;
  getState: () => T;
  dispatch: (action: IActionModel ) => void;
}

