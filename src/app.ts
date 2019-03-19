import { CHANGE_EMAIL, CHANGE_USERNAME, CHANGE_PASSWORD, RESET } from './manage-users/manage-users.actions';
import { ManagerUserReducer } from './manage-users/manage-user.reducer';
import { IStoreModel } from './my-redux/models/store.model';
import { IUserModel } from './models/user.model';
import { createStore } from './my-redux';

const INITIAL_STATE: IUserModel = {
  username: 'maria-perez',
  password: 'm4r!@p3r35',
  email: 'maria-perez92@yahoo.com'
}

const store: IStoreModel<IUserModel> = createStore(ManagerUserReducer, INITIAL_STATE);

store.subscribe(() => console.log(store.getState()));

store.dispatch(CHANGE_EMAIL);
store.dispatch(CHANGE_USERNAME);
store.dispatch(CHANGE_PASSWORD);
store.dispatch(RESET);
store.dispatch(CHANGE_EMAIL);
store.dispatch(CHANGE_USERNAME);
store.dispatch(CHANGE_PASSWORD);