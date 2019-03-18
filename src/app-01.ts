/***
 *    ┌─┐┌─┐┌┬┐┬┌─┐┌┐┌┌─┐
 *    ├─┤│   │ ││ ││││└─┐
 *    ┴ ┴└─┘ ┴ ┴└─┘┘└┘└─┘
 */
interface IAction {
  type: string;
  payload?: any;
}

const incrementAction: IAction = {
  type: 'INCREMENT'
};

const decrementAction: IAction = {
  type: 'DECREMENT'
};

const multiplyBy5Action: IAction = {
  type: 'MULTIPLY BY 5',
  payload: 5
};

const divideBy5Action: IAction = {
  type: 'DIVIDE BY 4',
  payload: 4
};


/***
 *    ┬─┐┌─┐┌┬┐┬ ┬┌─┐┌─┐┬─┐
 *    ├┬┘├┤  │││ ││  ├┤ ├┬┘
 *    ┴└─└─┘─┴┘└─┘└─┘└─┘┴└─
 */
function reducer(state = 10, action: IAction) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'MULTIPLY BY 5':
      return state * action.payload;
    case 'DIVIDE BY 4':
      return state / action.payload;
    default:
      return state;
  }
}

console.log(reducer(10, incrementAction));
console.log(reducer(10, decrementAction));
console.log(reducer(10, multiplyBy5Action));
console.log(reducer(20, divideBy5Action));
