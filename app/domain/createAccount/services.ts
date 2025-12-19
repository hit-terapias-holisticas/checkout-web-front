import { createUserResource } from "./resources";
import {
  type RequestCreateUser,
  type ResponseCreateContract,
  isUserCreated,
  isUserRegistered,
} from "./types";

export type CreateUserResult =
  | { type: "redirect"; url: string }
  | { type: "registered" };

export async function createUserService(
  email: string,
  password: string,
  planId: string,
  couponId: string | undefined,
  terms: boolean
): Promise<CreateUserResult> {
  const payload: RequestCreateUser = {
    email,
    password,
    planId,
    ...(couponId ? { couponId } : {}),
    terms,
  };

  const response: ResponseCreateContract = await createUserResource(payload);

  if (isUserCreated(response)) {
    return {
      type: "redirect",
      url: response.linkToPaymentPage,
    };
  }

  if (isUserRegistered(response)) {
    return {
      type: "registered",
    };
  }

  // Fallback (should not happen with proper typing)
  throw new Error("Unexpected response format");
}
