import { Selector, State, Action, StateContext } from "@ngxs/store";
import { LoginAction, LogoutAction } from "../action/auth.action";

export interface UserStateModal {
  user: string;
  isAuth: boolean;
}
const defaults: UserStateModal = {
  user: null,
  isAuth: false
};
@State<UserStateModal>({
  name: "auth",
  defaults,
})
export class AuthState {
  @Selector()
  static getuser(state: UserStateModal) {
    return state;
  }

  @Selector()
  static isAuth(state: UserStateModal) {
    return state.isAuth;
  }



  @Action(LoginAction)
  login(ctx: StateContext<UserStateModal>, action: LoginAction) {
    ctx.patchState({
      user: action.user,
      isAuth: action.isAuth,
    });
  }

  @Action(LogoutAction)
  logout(ctx: StateContext<UserStateModal>, action: LogoutAction) {
    // ctx.patchState({
    //   user: null,
    //   isAuth: false,
    // });
  }
}
