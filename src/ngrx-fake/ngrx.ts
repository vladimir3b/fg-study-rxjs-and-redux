export interface IAction {
  type: string;
  payload?: any;
}


export interface IReducer<T> {
  // tslint:disable-next-line:callable-types
  (state: T, action: IAction): T;
}