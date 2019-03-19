import { IActionModel } from './action.model';

export type ReducerType<T> = (state: T, action: IActionModel<T>) => T;