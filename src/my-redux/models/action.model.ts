export interface IActionModel<T> {
  type: string;
  payload?: T;
}