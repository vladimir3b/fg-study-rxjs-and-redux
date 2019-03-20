import { cloneDeep } from 'lodash';
import { IPersonModel } from './../data/models/person.model';
import { ManagePersonsActions } from './manage-persons.actions';


export namespace ManagePersonsReducer {

  export interface IState {
    persons: Array<IPersonModel>;
  }

  export const INITIAL_STATE: IState = { persons: [] };

  export function reducer(state: IState, action: ManagePersonsActions.actionsType): IState {
    state = cloneDeep(state);
    switch(action.type) {
      // case add new person
      case ManagePersonsActions.ADD_NEW_PERSON: {
        const index: number = state.persons.findIndex(
          (person: IPersonModel) => person.id === (action as any).payload.person.id
        );
        if (index === -1) {
          state.persons.push((action as any).payload.person);
        }
        break;
      }
      // case delete person
      case ManagePersonsActions.DELETE_PERSON: {
        const index: number = state.persons.findIndex(
          (person: IPersonModel) => person.id === (action as any).payload.personId
        );
        if (index >= 0) {
          state.persons.splice(index, 1);
        }
        break;
      }
      // case update person
      case ManagePersonsActions.UPDATE_PERSON: {
        const index: number = state.persons.findIndex(
          (person: IPersonModel) => person.id === (action as any).payload.personId
        );
        if (index >= 0) {
          const index1: number = state.persons.findIndex(
            (person: IPersonModel) => person.id === (action as any).payload.person.id
          );
          if (index1 === -1) { // verify if the updated person already exists
            state.persons[index] = (action as any).payload.person;
          }
        };
        break;
      }
      // case delete all persons
      case ManagePersonsActions.DELETE_ALL_PERSONS:
        state.persons = [];
      break
    }
    return state;
  }

}
