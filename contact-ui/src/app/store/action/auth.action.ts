export class LoginAction {
  static readonly type = "[Auth set User Deatl]";
  constructor(
    public user: string,
    public isAuth: boolean
  ) { }
}
export class LogoutAction {
  static readonly type = "[Auth set User Deatl]";
  constructor(public isAuth: boolean) { }
}
