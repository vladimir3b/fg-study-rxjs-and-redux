import { IUserModel } from '../models/person.model';
import { IActionModel } from './../my-redux/models/action.model';

// Define actions
namespace ManageUsersActions {

  export const changeUsername: IActionModel<IUserModel> = {
    type: 'CHANGE-USERNAME',
    payload: {
      email: '',
      password: '',
      username: 'john-smith82'
    }
  }

  export const changePassword: IActionModel<IUserModel> = {
    type: 'CHANGE-PASSWORD',
    payload: {
      email: '',
      password: 'v3ry53cr37',
      username: ''
    }
  }

  export const changeEmail: IActionModel<IUserModel> = {
    type: 'CHANGE-EMAIL',
    payload: {
      email: 'john-smith82@yahoo.com',
      password: '',
      username: ''
    }
  }

  export const resetUser: IActionModel<IUserModel> = {
    type: 'RESET'
  }

}

export const CHANGE_USERNAME: IActionModel<IUserModel> = ManageUsersActions.changeUsername;
export const CHANGE_PASSWORD: IActionModel<IUserModel> = ManageUsersActions.changePassword;
export const CHANGE_EMAIL: IActionModel<IUserModel> = ManageUsersActions.changeEmail;
export const RESET: IActionModel<IUserModel> = ManageUsersActions.resetUser;
