import { IActionModel } from '../my-redux/models/action.model';

export function calculateReducer(state: number, action: IActionModel): number {
  switch (action.type) {
    case 'INCREMENT': return state + action.payload;
    case 'DECREMENT': return state - action.payload;
    case 'MULTIPLY': return state * action.payload;
    case 'DIVIDE': return state / action.payload;
    case 'RESET': return 0;
    default: return state;
  }
}