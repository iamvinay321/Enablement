import { UserLoginState } from './auth/userlogin.reducer';

export interface AppState {
    readonly userInfo:UserLoginState
}