import { createStore, Action } from 'redux';
// ACTIONS
const INCREMENT: string = '[Counter] Increment';
const DECREMENT: string = '[Counter] Decrement';
const RESET: string = '[Counter] Reset';

// STORE
interface ICounterState {
  counter: number;
}
const INITIAL_STATE: ICounterState = { counter: 0 };
const STORE = createStore(counterReducer);


// REDUCER
function counterReducer(state: ICounterState = INITIAL_STATE, action: Action<string>): ICounterState {
// This is and MUST BE a PURE FUNCTION.
  switch (action.type) {

    case INCREMENT:
      return {
        counter: state.counter + 1
      };
    
    case DECREMENT:
      return {
        counter: state.counter - 1
      };

    case RESET:
      return {
        counter: 0
      };

    default:
      return state;

  }
}

// To see some results we will subscribe to the store
STORE.subscribe(() => {
  console.log(`Actual state = ${ JSON.stringify(STORE.getState()) }`);
});

for (let i = 0; i <= 10; i++) {
  STORE.dispatch({ type: INCREMENT });
}

for (let i = 0; i <= 8; i++) {
  STORE.dispatch({ type: INCREMENT });
}
STORE.dispatch({ type: RESET});


// To look more sexy we could create some classes:
class Increment implements Action {
  public readonly type: string = INCREMENT;
}

class Decrement implements Action {
  public readonly type: string = DECREMENT;
}

class Reset implements Action {
  public readonly type: string = RESET;
}


// But this will throw an error: Actions must be plain objects. Use custom middleware for async actions.
/**
  STORE.dispatch(new Increment());
  STORE.dispatch(new Increment());
  STORE.dispatch(new Decrement());
  STORE.dispatch(new Increment());
  STORE.dispatch(new Increment());
  STORE.dispatch(new Increment());
  STORE.dispatch(new Decrement());
  STORE.dispatch(new Decrement());
  STORE.dispatch(new Decrement());
  STORE.dispatch(new Increment());
  STORE.dispatch(new Decrement());
  STORE.dispatch(new Reset());
  STORE.dispatch(new Increment());
  STORE.dispatch(new Decrement());
  STORE.dispatch(new Increment());
  STORE.dispatch(new Increment());
*/
