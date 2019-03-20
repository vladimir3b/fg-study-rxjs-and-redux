import { IActionModel } from './action.model';

export interface IStoreModel<T> {
  getState: () => T;
  dispatch: (action: IActionModel) => void;
  subscribe: (fn: () => any) => void;
}