import { createStore } from './my-redux/index';
import { IStoreModel } from './my-redux/models/store.model';
import { ManagePersonsReducer } from './manage-persons/manage-persons.reducer';
import { PERSONS } from './data/persons.data';
import { ManagePersonsActions } from './manage-persons/manage-persons.actions';

const store: IStoreModel<ManagePersonsReducer.IState> = createStore(
  ManagePersonsReducer.reducer,
  ManagePersonsReducer.INITIAL_STATE
);

store.subscribe(() => {
  console.log(store.getState());
  console.log('----------------------------------------------------');
});

store.dispatch(new ManagePersonsActions.AddNewPerson({person: PERSONS[0]}));
store.dispatch(new ManagePersonsActions.AddNewPerson({person: PERSONS[1]}));
store.dispatch(new ManagePersonsActions.DeleteAllPersons());
store.dispatch(new ManagePersonsActions.AddNewPerson({person: PERSONS[2]}));
store.dispatch(new ManagePersonsActions.AddNewPerson({person: PERSONS[3]}));
store.dispatch(new ManagePersonsActions.AddNewPerson({person: PERSONS[4]}));
store.dispatch(new ManagePersonsActions.DeletePerson({personId: '5c9251fa085b6306d89f2545'}));
store.dispatch(new ManagePersonsActions.DeletePerson({personId: '5c9251fa085b6306d89f2545'}));
store.dispatch(new ManagePersonsActions.DeletePerson({personId: '5c9251fa085b6306d89f2545'}));
store.dispatch(new ManagePersonsActions.AddNewPerson({person: PERSONS[4]}));
store.dispatch(new ManagePersonsActions.AddNewPerson({person: PERSONS[4]}));
store.dispatch(new ManagePersonsActions.AddNewPerson({person: PERSONS[4]}));
store.dispatch(new ManagePersonsActions.AddNewPerson({person: PERSONS[4]}));
store.dispatch(new ManagePersonsActions.AddNewPerson({person: PERSONS[2]}));
store.dispatch(new ManagePersonsActions.UpdatePerson({person: PERSONS[2], personId: PERSONS[4].id}));
store.dispatch(new ManagePersonsActions.UpdatePerson({person: PERSONS[6], personId: PERSONS[4].id}));




