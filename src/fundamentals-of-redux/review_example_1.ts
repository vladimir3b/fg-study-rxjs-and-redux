//https://www.youtube.com/watch?v=f-rNubnP49U&index=6&list=PLoAsubXIl8uKWBxNNZL_-OuXtcu82-aFN
import { 
  Action,
  createStore, 
  Store 
} from "redux";

// ACTIONS
const CHANGE_NAME = '[ Person ] Change Name';
const CHANGE_AGE = '[ Person ] Change Age';

class ChangeName implements Action {
  constructor(
    public readonly type: string,
    public payload: { name: string }
    ) { }
}

class ChangeAge implements Action {
  constructor(
    public readonly type: string,
    public payload: { age: number }
    ) { }
}

type ActionType = ChangeAge | ChangeName;

// STORE
interface IPersonState {
  name: string;
  age: number;
}

const INITIAL_STATE: IPersonState = {
  name: 'Big Boss',
  age: 45
}

const STORE: Store = createStore(reducer);

// REDUCER
function reducer(state: IPersonState = INITIAL_STATE, action: ActionType): IPersonState {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: (<any>action).payload.name
      };
  
    case CHANGE_AGE:
     return {
       ...state,
       age: (<any>action).payload.age
     }
    
    default:
      return state
  }
}


// Subscribe
STORE.subscribe(() => {
  console.log('Actual state: ', STORE.getState());
});

STORE.dispatch({
  type: CHANGE_NAME,
  payload: {
    name: 'John Smith'
  }
})