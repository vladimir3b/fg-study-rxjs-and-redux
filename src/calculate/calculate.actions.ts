import { IAction } from '../ngrx-fake/ngrx';

/***
 *    ┌─┐┌─┐┌┬┐┬┌─┐┌┐┌┌─┐
 *    ├─┤│   │ ││ ││││└─┐
 *    ┴ ┴└─┘ ┴ ┴└─┘┘└┘└─┘
 */
export const incrementAction: IAction = {
  type: 'INCREMENT'
};

export const decrementAction: IAction = {
  type: 'DECREMENT'
};

export const multiplyBy5Action: IAction = {
  type: 'MULTIPLY BY 5',
  payload: 5
};

export const divideBy4Action: IAction = {
  type: 'DIVIDE BY 4',
  payload: 4
};

export const resetAction: IAction = {
  type: 'RESET'
}