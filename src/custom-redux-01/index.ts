// Actions
interface Action {
  type: string;
  payload?: any;
}

const incrementAction: Action = {
  type: 'INCREMENT'
};

const decrementAction: Action = {
  type: 'DECREMENT'
}

const multiplyAction: Action = {
  type: 'MULTIPLY',
  payload: 2
}

const divideAction: Action = {
  type: 'DIVISION',
  payload: 2
}

// Reducer
function reducer(state: number = 10, action: Action): number {
  switch (action.type) {

    case 'INCREMENT':
      return state + 1;

    case 'DECREMENT':
      return state - 1;

    case 'MULTIPLY':
      return state * action.payload;

    case 'DIVIDE':
      return state / action.payload;

    default:
      return state;

  }
}

// Use the reducer
console.log(reducer(10, incrementAction));
console.log(reducer(10, decrementAction));
console.log(reducer(10, { type: 'null' }));
console.log(reducer(10, multiplyAction));
console.log(reducer(10, divideAction));

