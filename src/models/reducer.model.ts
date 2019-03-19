import { IActionModel } from '../my-redux/models/action.model';

export type ReducerType<T> = (state: T, action: IActionModel) => T;