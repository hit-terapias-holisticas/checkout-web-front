export enum AppErrorAction {
  CreateAccount = "createAccount",
}

export class AppError {
  message: string;
  statusCode: number;
  action?: AppErrorAction;

  constructor(
    message: string,
    statusCode: number = 400,
    action?: AppErrorAction
  ) {
    this.message = message;
    this.statusCode = statusCode;
    this.action = action;
  }
}
