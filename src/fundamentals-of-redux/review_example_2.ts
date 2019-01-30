import {
  createStore,
  Action,
  Store
} from 'redux';

// ACTIONS
namespace ManagePersonsActions {

  export const ADD_PERSON: string = '[ Persons ] Add person';
  export const DELETE_PERSON: string = '[ Persons ] Delete person';
  export const DELETE_ALL: string = '[ Persons ] Delete all';
  export const MODIFY_PERSON: string = '[ Persons ] Modify person';

  export class AddPerson implements Action {
    constructor(
      public readonly type: string,
      public payload: {
        person: IPersonModel
      }
    ) {}
  }

  export class DeletePerson implements Action {
    constructor(
      public readonly type: string,
      public payload: {
        person: IPersonModel
      }
    ) {}
  }

  export class DeleteAll implements Action {
    constructor(
      public readonly type: string
    ) {}
  }

  export class ModifyPerson implements Action {
    constructor(
      public readonly type: string,
      public payload: {
        person: IPersonModel,
        personNew: IPersonModel
      }
    ) {}
  }

  export type ActionType = AddPerson | DeleteAll | DeletePerson | ModifyPerson;

}


// REDUX
namespace ManagePersonsReducer {

  export interface IManagePersons {
    availablePersons: Array<IPersonModel>;
    deletedPersons: Array<IPersonModel>;
  }

  const INITIAL_STATE: IManagePersons = {
    availablePersons: [],
    deletedPersons: []
  }

  export function reducer(state: IManagePersons = INITIAL_STATE, action: ManagePersonsActions.ActionType): IManagePersons {
    switch (action.type) {

      case ManagePersonsActions.ADD_PERSON:
        const addedPerson: IPersonModel = { ...(<any>action).payload.person };
        return {
          availablePersons: [
            ...state.availablePersons,
            addedPerson
          ],
          deletedPersons: [ ...state.deletedPersons ]
        };
      break;

      case ManagePersonsActions.DELETE_PERSON:
        const deletedPerson: IPersonModel = { ...(<any>action).payload.person };
        const newAvailablePersonsDP: Array<IPersonModel> = [ ...state.availablePersons ];
        const indexDP: number = newAvailablePersonsDP.indexOf(deletedPerson);
        console.log(indexDP);
        if (indexDP >= 0) {
          newAvailablePersonsDP.splice(indexDP);
        }
        return {
          availablePersons: newAvailablePersonsDP,
          deletedPersons: [
            ...state.deletedPersons,
            deletedPerson
          ]
        };
      break;

      case ManagePersonsActions.DELETE_ALL:
        return {
          availablePersons: [],
          deletedPersons: [
            ...state.deletedPersons,
            ...state.availablePersons
          ]
        };
      break;

      case ManagePersonsActions.MODIFY_PERSON:
        const currentPersonData: IPersonModel = { ...(<any>action).payload.person };
        const currentPersonNewData: IPersonModel =  { ...(<any>action).payload.personNew };
        const newAvailablePersonsMP: Array<IPersonModel> = [ ...state.availablePersons ];
        const indexMP: number = newAvailablePersonsMP.indexOf(currentPersonData);
        if (indexMP >= 0) {
          newAvailablePersonsMP[indexMP] = currentPersonNewData;
        }
        return {
          availablePersons: newAvailablePersonsMP,
          deletedPersons: [
            ...state.deletedPersons
          ]
        };
      break;

      default:
        return state;
    }
  }


}

// STORE
type genderType = 'male' | 'female';

interface IPersonModel {
  id: string;
  firstName: string;
  lastName: string;
  gender: genderType;
  age: number;
  employed: boolean;
}

const STORE: Store = createStore(ManagePersonsReducer.reducer);


// SUBSCRIBE

STORE.subscribe(() => {
  console.log('Actual state: ', STORE.getState());
});


STORE.dispatch({
  type: ManagePersonsActions.ADD_PERSON,
  payload: {
    person: {
      id: 'XD00001',
      firstName: 'John',
      lastName: 'Smith',
      gender: 'male',
      age: 45,
      employed: false
    }
  }
});

STORE.dispatch({
  type: ManagePersonsActions.ADD_PERSON,
  payload: {
    person: {
      id: 'XD00002',
      firstName: 'Jane',
      lastName: 'Smith',
      gender: 'female',
      age: 39,
      employed: true
    }
  }
});

STORE.dispatch({
  type: ManagePersonsActions.ADD_PERSON,
  payload: {
    person: {
      id: 'XD00003',
      firstName: 'Daniel',
      lastName: 'Brown',
      gender: 'male',
      age: 28,
      employed: true
    }
  }
});

STORE.dispatch({
  type: ManagePersonsActions.ADD_PERSON,
  payload: {
    person: {
      id: 'XD00004',
      firstName: 'Eva',
      lastName: 'Brown',
      gender: 'female',
      age: 24,
      employed: false
    }
  }
});

STORE.dispatch({
  type: ManagePersonsActions.DELETE_PERSON,
  payload: {
    person: {
      id: 'XD00002',
      firstName: 'Jane',
      lastName: 'Smith',
      gender: 'female',
      age: 39,
      employed: true
    }
  }
});

STORE.dispatch({
  type: ManagePersonsActions.DELETE_ALL
})