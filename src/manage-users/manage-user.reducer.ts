import { IActionModel } from './../my-redux/models/action.model';
import { ReducerType } from './../my-redux/models/reducer.type';
import { IUserModel } from '../models/user.model';

const NULL_USERNAME: IUserModel = {
  username: '',
  password: '',
  email: ''
}

export const ManagerUserReducer: ReducerType<IUserModel> = (state: IUserModel, action: IActionModel<IUserModel>) => {
  switch (action.type) {
    case 'CHANGE-USERNAME': return { ...state, username: (action.payload as any).username };
    case 'CHANGE-PASSWORD': return { ...state, password: (action.payload as any).password };
    case 'CHANGE-EMAIL': return { ...state, email: (action.payload as any).email };
    case 'RESET': return { ...NULL_USERNAME };
    default: return { ...state };
  }
}