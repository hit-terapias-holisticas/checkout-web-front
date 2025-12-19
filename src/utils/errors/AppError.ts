export enum AppErrorAction {
  RedirectToCreateUser = "REDIRECT_TO_CREATE_USER",
  RedirectToPaymentHomepage = "REDIRECT_TO_PAYMENT_HOMEPAGE",
  UserAlreadyHasAPlan = "USER_ALREADY_HAS_A_PLAN",
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
