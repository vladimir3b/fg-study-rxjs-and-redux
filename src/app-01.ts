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


/***
 *    ┬─┐┌─┐┌┬┐┬ ┬┌─┐┌─┐┬─┐
 *    ├┬┘├┤  │││ ││  ├┤ ├┬┘
 *    ┴└─└─┘─┴┘└─┘└─┘└─┘┴└─
 */
function reducer(state = 10, action: IAction) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
}

console.log(reducer(10, incrementAction));