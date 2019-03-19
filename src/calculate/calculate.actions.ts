import { IActionModel } from '../my-redux/models/action.model';

namespace CalculateActions {

  // Defining actions
  export const incrementAction: IActionModel = {
    type: 'INCREMENT',
    payload: 2
  };

  export const decrementAction: IActionModel = {
    type: 'DECREMENT',
    payload: 2
  }

  export const multiplyAction: IActionModel = {
    type: 'MULTIPLY',
    payload: 2
  }

  export const divideAction: IActionModel = {
    type: 'DIVIDE',
    payload: 2
  }

  export const resetAction: IActionModel = {
    type: 'RESET'
  }

}

export const INCREMENT_ACTION = CalculateActions.incrementAction;
export const DECREMENT_ACTION = CalculateActions.decrementAction;
export const MULTIPLY_ACTION = CalculateActions.multiplyAction;
export const DIVIDE_ACTION = CalculateActions.divideAction;
export const RESET_ACTION = CalculateActions.resetAction;

