

export interface Action {
  type: string;
  payload?: any;
}

export interface Reducer<T> {
  // tslint:disable-next-line:callable-types
  (state: T, action: Action): T;
}

export class Store<T> {
  constructor(
    private reducer: Reducer<T>,
    private state: T
  ) { }

  public getState(): T {
    return this.state;
  }

  public dispatch(action: Action): void {
    this.state = this.reducer(this.state, action);
  }

}