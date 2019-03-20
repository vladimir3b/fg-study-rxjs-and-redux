import { IActionModel } from './../my-redux/models/action.model';
import { IPersonModel } from './../data/models/person.model';

interface IPayload {
  person?: IPersonModel;
  personId?: string
}

export namespace ManagePersonsActions {

  export const ADD_NEW_PERSON: string = '[Manage-Persons] Add a new person';
  export const DELETE_PERSON: string = '[Manage-Persons] Delete a person';
  export const UPDATE_PERSON: string = '[Manage-Persons] Update a person';
  export const DELETE_ALL_PERSONS: string = '[Manage-Persons] Delete all persons';

  export class AddNewPerson implements IActionModel {
    public readonly type: string;
    public constructor(public payload: IPayload) {
      this.type = ADD_NEW_PERSON;
    }
  }

  export class DeletePerson implements IActionModel {
    public readonly type: string;
    public constructor(public payload: IPayload) {
      this.type = DELETE_PERSON;
    }
  }

  export class UpdatePerson implements IActionModel {
    public readonly type: string;
    public constructor(public payload: IPayload) {
      this.type = UPDATE_PERSON;
    }
  }

  export class DeleteAllPersons implements IActionModel {
    public readonly type: string;
    public constructor() {
      this.type = DELETE_ALL_PERSONS;
    }
  }

  export type actionsType =
    AddNewPerson |
    DeletePerson |
    DeleteAllPersons|
    UpdatePerson;

}