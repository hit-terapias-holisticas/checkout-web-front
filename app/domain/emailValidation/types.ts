export type CheckUserRequestDTO = {
  email: string;
  planId: string;
  couponId?: string;
};

export type UserIsRegistered = {
  linkToPaymentPage: string;
};

export type UserIsNotRegistered = {
  message: string;
  action: "REDIRECT_TO_CREATE_USER";
};

export type CheckUserResponseDTO = UserIsRegistered | UserIsNotRegistered;

export function isUserRegistered(
  response: CheckUserResponseDTO
): response is UserIsRegistered {
  return "linkToPaymentPage" in response;
}

export function isUserNotRegistered(
  response: CheckUserResponseDTO
): response is UserIsNotRegistered {
  return "action" in response && response.action === "REDIRECT_TO_CREATE_USER";
}
