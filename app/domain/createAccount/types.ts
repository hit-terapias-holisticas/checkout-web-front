export type RequestCreateUser = {
  email: string;
  password: string;
  planId: string;
  couponId?: string;
  terms: boolean;
};

export type ResponseRegisteredUser = {
  status: string;
  message: string;
  action: string;
};

export type ResponseCreatedUser = {
  linkToPaymentPage: string;
};

export type ResponseCreateContract = ResponseRegisteredUser | ResponseCreatedUser;

export function isUserCreated(
  response: ResponseCreateContract
): response is ResponseCreatedUser {
  return "linkToPaymentPage" in response;
}

export function isUserRegistered(
  response: ResponseCreateContract
): response is ResponseRegisteredUser {
  return "status" in response && response.status === "error";
}

